import { throttle } from 'lodash';
import WebFont from 'webfontloader';
import { fabric } from 'fabric';
import { v4 as uuidv4 } from 'uuid';
import FontFaceObserver from 'fontfaceobserver';

export default class TransactionHandler {
    constructor(handler) {
        this.handler = handler;
        this.undos = [];
        this.redos = [];
        this.state = {
            width: 0,
            height: 0,
            objects: []
        };
        this.active = false;
        this.modified = false;
    }

    save(type, canvasJSON) {
        try {
            if (this.state) {
                const json = JSON.stringify(this.state);
                this.redos = [];

                if (this.undos.length >= 30) {
                    this.undos.splice(0, 1);
                }

                this.undos.push({
                    type: type,
                    json: json
                });
            }

            const { objects, width, height } = canvasJSON || this.handler.canvas.toJSON(this.handler.propertiesToInclude);

            this.state = {
                width,
                height,
                objects: objects.filter((obj) => {
                    if (obj.name === 'drawing-area') {
                        return false;
                    }

                    return true;
                })
            };
        } catch (error) {
            console.log(error);
        }
    }

    undo = throttle(() => {
        const undo = this.undos.pop();
        if (!undo) {
            return;
        }
        this.redos.push({
            type: 'redo',
            json: JSON.stringify(this.state)
        });
        this.replay(undo);
    }, 100);

    redo = throttle(() => {
        const redo = this.redos.pop();
        if (!redo) {
            return;
        }
        this.undos.push({
            type: 'undo',
            json: JSON.stringify(this.state)
        });
        this.replay(redo);
    }, 100);

    replay = (transaction, isLoadFromTemplate = null) => {
        const { objects, width, height } = transaction ? JSON.parse(transaction.json) : this.state;

        this.state = {
            width,
            height,
            objects
        };

        this.active = true;
        this.handler.canvas.renderOnAddRemove = false;
        this.handler.canvas.discardActiveObject();
        this.handler.clear();

        this.handler.eventHandler.resize(width, height);

        fabric.util.enlivenObjects(
            objects,
            (enlivenObjects) => {
                enlivenObjects.forEach((obj) => {
                    obj.set({
                        perPixelTargetFind: true
                    });

                    if (obj.name === 'drawing-area') {
                        const drawAreaStyle = obj.toObject(['width', 'height']);

                        const drawArea = this.handler.canvas.getItemByName('drawing-area');
                        drawArea.set(drawAreaStyle);
                        // this.handler.drawAreaCheckboard()
                        return;
                    }

                    if (obj.type === 'image') {
                        obj.setSrc(obj.getSrc(), undefined, {
                            crossOrigin: 'anonymous'
                        });
                    }


                    const systemFonts = ['Rubik', 'Plus Jakarta Sans', 'Arial', 'Times New Roman'];
                    if (obj.type === 'textbox' && !systemFonts.includes(obj.fontFamily)) {
                        const font = obj.fontFamily;

                        obj.set({
                            fontFamily: 'Times New Roman'
                        });

                        WebFont.load({
                            google: {
                                families: [font]
                            }
                        });

                        const fontObserver = new FontFaceObserver(font);
                        fontObserver.load().then(() => {
                            obj.set({
                                fontFamily: font
                            });
                            fabric.util.clearFabricFontCache(font);
                            obj.initDimensions();
                            this.handler.canvas.requestRenderAll();
                        });
                    }

                    if (isLoadFromTemplate) {
                        obj.set({
                            id: uuidv4()
                        });
                    }

                    const targetIndex = this.handler.canvas._objects.length;
                    this.handler.canvas.insertAt(obj, targetIndex, false);
                });

                this.handler.canvas.renderOnAddRemove = true;
                this.active = false;
                this.handler.canvas.requestRenderAll();

                this.handler.objects = this.handler.getObjects();

                if (this.handler.onTransaction) {
                    this.handler.onTransaction(transaction, isLoadFromTemplate);
                }
            },
            null
        );
    };

    activate = () => {
        this.active = false;

        if (this.modified) {
            this.modified = false;
            this.save('modified');
        }
    };

    deactivate = () => {
        this.active = true;
    };

    setState = (state) => {
        const { width, height, objects } = state;

        // const { objects } = canvasJSON || this.handler.canvas.toJSON(this.handler.propertiesToInclude);

        this.state = {
            width,
            height,
            objects: objects
        };
    };
}
