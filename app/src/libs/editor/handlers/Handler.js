import AlignmentHandler from './AlignmentHandler';
import ContextmenuHandler from './ContextmenuHandler';
import CropHandler from './CropHandler';
import EventHandler from './EventHandler';
import GuidelineHandler from './GuidelineHandler';
import ImageHandler from './ImageHandler';
import InteractionHandler from './InteractionHandler';
import ShortcutHandler from './ShortcutHandler';
import TextHandler from './TextHandler';
import TransactionHandler from './TransactionHandler';
import ZoomHandler from './ZoomHandler';
import WebFont from 'webfontloader';
import { fabric } from 'fabric';
import { v4 as uuidv4 } from 'uuid';
import { angle2rect } from '../utils';
import FontFaceObserver from 'fontfaceobserver';
import { keyEvent, mouseEvent } from '../constants/default';

export default class Handler {
    constructor({ canvas, ...option }) {
        this.propertiesToInclude = [
            'id',
            'name',
            'locked',
            'preset',
            'parentType',
            'shadowEffect',
            '_controlsVisibility',
            '_downScaled',
            '_scaledOriginalElement',
            'hasBorders',
            'hasControls',
            'width',
            'height',
            'originalSrc',
            'isGoogleFont',
            'perPixelTargetFind'
        ];
        this.clipboard = null;

        this.canvas = canvas;
        this.width = canvas.wrapperEl.offsetWidth;
        this.height = canvas.wrapperEl.offsetHeight;

        this.interactionMode = 'selection';
        this.editable = true;

        this.guidelineOption = {
            enabled: true
        };

        this.gridOption = {
            grid: 10
        };

        this.zoomEnabled = true;
        this.skippedObjectTypes = [];
        this.objects = [];

        // control the keyboard event

        this.mouseEvent = {
            ...mouseEvent,
            ...option.mouseEvent
        };

        this.keyEvent = { ...keyEvent, ...option.keyEvent };

        this.zoomLimit = {
            minZoom: 10,
            maxZoom: 500
        };

        // this.setupDrawArea(drawAreaWidth, drawAreaHeight)
        this.initClasses(option);
        this.initHandler();
        this.initCallback(option);
        // this.drawAreaCheckboard()
    }

    initHandler = () => {
        this.zoomHandler = new ZoomHandler(this);
        this.textHandler = new TextHandler(this);
        this.imageHandler = new ImageHandler(this);
        this.transactionHandler = new TransactionHandler(this);
        this.interactionHandler = new InteractionHandler(this);
        this.shortcutHandler = new ShortcutHandler(this);
        this.guidelineHandler = new GuidelineHandler(this);
        // this.contextmenuHandler = new ContextmenuHandler(this);
        this.alignmentHandler = new AlignmentHandler(this);
        this.eventHandler = new EventHandler(this);
        // this.cropHandler = new CropHandler(this);
    };

    initCallback = (options) => {
        this.onAdd = options.onAdd || undefined;
        this.onContext = options.onContext || undefined;
        this.onClick = options.onClick || undefined;
        this.onDblClick = options.onDblClick || undefined;
        this.onRemove = options.onRemove || undefined;
        this.onZoom = options.onZoom || undefined;
        this.onModified = options.onModified || undefined;
        this.onSelect = options.onSelect || undefined;
        this.onLock = options.onLock || undefined;
        this.onUnlock = options.onUnlock || undefined;
        this.onContext = options.onContext || undefined;
        this.onTransaction = options.onTransaction || undefined;
        this.onInteraction = options.onInteraction || undefined;
        this.onUngroup = options.onUngroup || undefined;
        this.onGroup = options.onGroup || undefined;
    };

    initClasses = (options) => {
        this.classes = {
            contextmenu: {
                container: options.contextmenuContainer || 'contextmenu',
                visible: options.contextmenuVisible || 'contextmenu--visible'
            }
        };
    };

    drawAreaCheckboard = () => {
        const checkboardImageUrl = '/images/bg/checkboard-sm.png';

        fabric.Image.fromURL(checkboardImageUrl, (patternImg) => {
            // Create the checkboard pattern
            const pattern = new fabric.Pattern({
                source: patternImg.getElement(),
                repeat: 'repeat'
            });

            const drawArea = this.canvas.getItemByName('drawing-area');

            drawArea.set({
                fill: pattern
            });
        });
    };

    getObjects = () => {
        const objects = this.canvas.getObjects().filter((obj) => {
            if (obj.name === 'drawing-area') {
                return false;
            }

            return true;
        });

        return objects;
    };

    set = (key, value) => {
        const activeObject = this.canvas.getActiveObject();
        if (!activeObject) {
            return;
        }

        if (activeObject.type === 'svg' && (key === 'fill' || key === 'stroke')) {
            activeObject._objects.forEach((obj) => obj.set(key, value));
        }

        activeObject.set(key, value);
        activeObject.setCoords();
        this.canvas.requestRenderAll();

        if (key === 'fontFamily') {
            activeObject.initDimensions();
        }

        if (!this.transactionHandler.active) {
            this.transactionHandler.save(`modified:${key}`);
        }

        const { onModified } = this;
        if (onModified) {
            onModified(activeObject);
        }
    };

    setupDrawArea = (width, height) => {
        const drawArea = new fabric.Rect({
            fill: 'white',
            hasBorders: false,
            hasControls: false,
            selectable: false,
            lockMovementX: true,
            lockMovementY: true,
            lockScalingX: true,
            lockScalingY: true,
            height: height,
            width: width,
            name: 'drawing-area',
            hoverCursor: 'default'
        });

        this.canvas.clipPath = drawArea;
        this.canvas.add(drawArea);

        // this.drawArea =
    };

    resizeDrawArea = (nextWidth, nextHeight) => {
        if (nextWidth === 0 || nextHeight === 0) {
            return;
        }

        const drawArea = this.drawArea;

        drawArea.set({
            width: nextWidth,
            height: nextHeight
        });

        this.canvas.renderAll();
        return;
    };

    setObject = (option, target = undefined) => {
        const activeObject = target || this.canvas.getActiveObject();
        if (!activeObject) {
            return;
        }

        Object.keys(option).forEach((key) => {
            if (option[key] !== activeObject[key]) {
                // to check if fill or stroke is gradient
                if (
                    (key === 'fill' || key === 'stroke') &&
                    typeof option[key] !== 'string' &&
                    option[key] !== null
                ) {
                    activeObject.set(key, new fabric.Gradient(option[key]));
                    activeObject.setCoords();
                    return;
                }

                if (key === 'filters') {
                    const createdFilters = this.imageHandler.createFilters(option[key]);
                    activeObject.set(key, createdFilters);
                    activeObject.applyFilters();
                    return;
                }

                if (key === 'rotate') {
                    activeObject.rotate(option[key]);
                    activeObject.setCoords();
                } else {
                    activeObject.set(key, option[key]);
                    activeObject.setCoords();
                }
            }
        });

        this.canvas.requestRenderAll();

        const { onModified } = this;
        if (onModified) {
            onModified(activeObject);
        }
    };

    saveCanvasImage(
        option = {
            name: 'New Image',
            format: 'png',
            quality: 1
        }
    ) {
        // this.zoomHandler.zoomOneToOne();
        const { left, top, width, height } = this.drawArea;

        const dataUrl = this.canvas.toDataURL({
            ...option,
            left,
            top,
            width,
            height,
            enableRetinaScaling: false
        });

        if (dataUrl) {
            const anchorEl = document.createElement('a');
            anchorEl.href = dataUrl;
            anchorEl.download = `${option.name}.png`;
            document.body.appendChild(anchorEl);
            anchorEl.click();
            anchorEl.remove();
        }
    }

    getCanvasImage = (option = { format: 'png', quality: 1 }, transparentBackground = false) => {
        return new Promise((resolve) => {
            const drawArea = this.canvas.getItemByName('drawing-area');

            const { left, top, width, height } = drawArea;

            this.canvas.clone((cloned) => {
                const center = cloned.getCenter();
                cloned.setViewportTransform([1, 0, 0, 1, 0, 0]);
                cloned.zoomToPoint(new fabric.Point(center.left, center.top), 1);

                if (transparentBackground) {
                    cloned.getItemByName('drawing-area').set({
                        fill: 'transparent'
                    });
                }

                const dataUrl = cloned.toDataURL({
                    ...option,
                    left,
                    top,
                    width,
                    height,
                    enableRetinaScaling: false
                });

                resolve(dataUrl);
            }, this.propertiesToInclude);
        });
    };

    /**
     * Add object to canvas
     */
    async add(obj, centered = true) {
        const { editable, onAdd } = this;

        let createdObj;
        const objId = uuidv4();

        if (obj.type === 'text') {
            const texts = await this.addText(obj);

            if (texts.length > 1) {
                texts.forEach((text) => {
                    while (text.textLines.length > 1) {
                        text.set({
                            width: text.getScaledWidth() + 1
                        });
                    }
                    this.canvas.add(text);
                });

                createdObj = new fabric.ActiveSelection(texts, {
                    canvas: this.canvas
                });
            } else {
                createdObj = texts[0];

                while (createdObj.textLines.length > 1) {
                    createdObj.set({
                        width: createdObj.getScaledWidth() + 1
                    });
                }
                this.canvas.add(createdObj);
            }
        } else if (obj.type === 'shape') {
            const { src } = obj;
            createdObj = await this.addShape(src);
            this.canvas.add(createdObj);
        } else if (obj.type === 'image') {
            const { src, opt } = obj;
            createdObj = await this.addImage(src);
            createdObj.dblclick = true;

            if (opt) {
                createdObj.set(opt);
            }

            this.canvas.add(createdObj);
        } else {
            createdObj = obj;
            this.canvas.add(createdObj);
        }

        const drawArea = this.canvas.getItemByName('drawing-area');
        // make sure created object not too big
        // if (Math.max(createdObj.width, createdObj.height) > drawArea.width) {
        //     const objectScaleWidth = (80 / 100) * drawArea.width;
        //     createdObj.scaleToWidth(objectScaleWidth * this.canvas.getZoom());
        // }

        createdObj.set({
            id: objId,
            locked: false,
            parentType: obj.type,
            centeredScaling: true
        });

        if (centered) {
            this.canvas.centerObject(createdObj);
        }

        if (createdObj.dblclick) {
            createdObj.on('mousedblclick', this.eventHandler.object.mousedblclick);
        }

        this.objects = this.getObjects();

        if (!this.transactionHandler.active) {
            this.transactionHandler.save('add');
        }

        createdObj.setCoords();
        this.canvas.requestRenderAll();

        if (createdObj.type !== 'Frame') {
            this.canvas.setActiveObject(createdObj);
        }

        if (onAdd && editable) {
            onAdd(createdObj);
        }

        return createdObj;
    }

    duplicate = (target) => {
        const {
            onAdd,
            propertiesToInclude,
            gridOption: { grid = 10 }
        } = this;

        const activeObject = target && !target.target ? target : this.canvas.getActiveObject();

        if (!activeObject) {
            return;
        }

        activeObject.clone((clonedObj) => {
            this.canvas.discardActiveObject();
            clonedObj.set({
                left: clonedObj.left + grid,
                top: clonedObj.top + grid,
                evented: true
            });

            if (clonedObj.type === 'activeSelection') {
                const activeSelection = clonedObj;
                activeSelection.canvas = this.canvas;
                activeSelection.forEachObject((obj) => {
                    obj.set('id', uuidv4());

                    this.canvas.add(obj);
                    this.objects = this.getObjects();

                    if (obj.dblclick) {
                        obj.on('mousedblclick', this.eventHandler.object.mousedblclick);
                    }
                });

                if (onAdd) {
                    onAdd(activeSelection);
                }
                activeSelection.setCoords();
            } else {
                if (activeObject.id === clonedObj.id) {
                    clonedObj.set('id', uuidv4());
                }

                this.canvas.add(clonedObj);
                this.objects = this.getObjects();
                if (clonedObj.dblclick) {
                    clonedObj.on('mousedblclick', this.eventHandler.object.mousedblclick);
                }
                if (onAdd) {
                    onAdd(clonedObj);
                }
            }

            this.canvas.setActiveObject(clonedObj);
            this.canvas.requestRenderAll();

            if (!this.transactionHandler.active) {
                this.transactionHandler.save('duplicate');
            }
        }, propertiesToInclude);
    };

    async addText(obj) {
        const texts = await Promise.all(
            obj.texts.map(async (text) => {
                const textbox = new fabric.Textbox(
                    text.defaultText,
                    Object.assign(text.config, {
                        top: text.config.offsetTop,
                        left: text.config.offsetLeft,
                        centeredRotation: true,
                        centeredScaling: true,
                        lockUniScaling: true,
                        editingBorderColor: 'rgba(27, 170, 160, 0.4)',
                        perPixelTargetFind: false
                    })
                );

                // textbox.effects = {
                //   outlineEffect: {
                //     enabled: !!textbox.strokeColor
                //   },
                //   highlightEffect: {
                //     enabled: !!textbox.strokeColor
                //   },
                // }

                textbox.shadowEffect = {
                    enabled: !!textbox.shadow,
                    color: textbox.shadow ? textbox.shadow.color : '#000000',
                    blur: textbox.shadow ? textbox.shadow.blur : 10,
                    distance: 10,
                    angle: 45,
                    transparency: 40
                };

                if (textbox.shadow) {
                    const { angle, distance } =
                        this.handler.textHandler.getShadowAngleDistance(text);
                    textbox.shadowEffect = {
                        ...textbox.shadowEffect,
                        angle,
                        distance
                    };
                }

                if (text.config.isGoogleFont) {
                    const font = await this.loadFont(text.config.fontFamily);

                    fabric.util.clearFabricFontCache(font);

                    textbox.set({
                        fontFamily: font,
                        isGoogleFont: true
                    });

                    textbox.initDimensions();
                }
                return textbox;
            })
        );

        return texts;
    }

    loadFont(font) {
        return new Promise((resolve) => {
            WebFont.load({
                google: {
                    families: [font]
                },
                fontactive: () => {
                    resolve(font);
                }
            });
        });
    }

    resizeImage = (targetImage) => {
        return new Promise((resolve) => {
            const tempCanvas = document.createElement('canvas');

            if (targetImage.height >= targetImage.width) {
                tempCanvas.height = fabric.textureSize * 0.5;
                tempCanvas.width =
                    ((fabric.textureSize * 0.5) / targetImage.height) * targetImage.width;
            } else {
                tempCanvas.width = fabric.textureSize * 0.5;
                tempCanvas.height =
                    ((fabric.textureSize * 0.5) / targetImage.width) * targetImage.height;
            }

            const tempContext = tempCanvas.getContext('2d');
            tempContext.drawImage(
                targetImage.getElement(),
                0,
                0,
                tempCanvas.width,
                tempCanvas.height
            );

            resolve(tempContext.canvas.toDataURL());
        });
    };

    createPhoto = (src) => {
        return new Promise((resolve) => {
            fabric.Photo.fromURL(src, (photo) => {
                photo.filters.push(
                    new fabric.Image.filters.Duotone({
                        duotone: false
                    })
                );

                if (Math.max(photo.width, photo.height) > fabric.textureSize * 0.5) {
                    this.resizeImage(photo).then((resizedImage) => {
                        photo.setSrc(resizedImage, (obj) => resolve(obj));
                    });
                    return;
                }

                resolve(photo);
            });
        });
    };

    addImage = (src) => {
        return new Promise((resolve) => {
            fabric.Image.fromURL(
                src,
                (img) => {
                    img.filters.push(
                        new fabric.Image.filters.Duotone({
                            duotone: false
                        })
                    );

                    if (Math.max(img.width, img.height) > fabric.textureSize * 0.5) {
                        this.resizeImage(img).then((resizedImage) => {
                            img.setSrc(resizedImage, (obj) => {
                                obj.set({
                                    centeredRotation: true,
                                    centeredScaling: true,
                                    scaleX: 1,
                                    scaleY: 1,
                                    perPixelTargetFind: true
                                });
                                obj.preset = null;
                                resolve(obj);
                            });
                        });
                        return;
                    }

                    img.set({
                        centeredRotation: true,
                        centeredScaling: true,
                        scaleX: 1,
                        scaleY: 1,
                        perPixelTargetFind: true
                    });
                    img.preset = null;
                    resolve(img);
                },
                {
                    crossOrigin: 'anonymous'
                }
            );
        });
    };

    addShape = (src) => {
        return new Promise((resolve) => {
            fabric.loadSVGFromURL(
                src,
                function (objects, options) {
                    const el = new fabric.util.groupSVGElements(objects, options);

                    el.set({
                        stroke: null,
                        strokeUniform: true,
                        strokeWidth: 0,
                        perPixelTargetFind: true
                    });

                    resolve(el);
                },
                undefined,
                { crossOrigin: 'Anonymous' }
            );
        });
    };

    createGradient = (colors, angle, type = 'linear', target = undefined) => {
        const activeObject = target || this.canvas.getActiveObject();

        if (type === 'linear') {
            const { x: x1, y: y1 } = angle2rect(angle, activeObject.width, activeObject.height);

            return new fabric.Gradient({
                type: 'linear',
                gradientUnits: 'pixels',
                colorStops: colors,
                coords: {
                    x1: x1,
                    y1: y1,
                    x2: activeObject.width - x1,
                    y2: activeObject.height - y1
                }
            });
        } else {
            return new fabric.Gradient({
                type: 'radial',
                gradientUnits: 'pixels',
                coords: {
                    x1: activeObject.width / 2,
                    y1: activeObject.height / 2,
                    x2: activeObject.width / 2,
                    y2: activeObject.height / 2,
                    r1: 0.5 * activeObject.width, // inner circle radius
                    r2: 0.2 * activeObject.height // outer circle radius
                },
                colorStops: colors
            });
        }
    };

    copyToClipboard(value) {
        const textarea = document.createElement('textarea');
        document.body.appendChild(textarea);
        textarea.value = value;
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        this.canvas.wrapperEl.focus();
    }

    copy = () => {
        // const { propertiesToInclude } = this;

        const activeObject = this.canvas.getActiveObject();

        if (activeObject) {
            this.clipboard = activeObject;
        }

        return true;
    };

    paste = (event) => {
        const { propertiesToInclude, clipboard, onAdd } = this;

        const padding = 10;
        if (!clipboard) {
            return false;
        }

        if (clipboard.type === 'activeSelection') {
            this.canvas.discardActiveObject();
            const objects = [];

            clipboard.getObjects().forEach((obj) => {
                obj.clone((cloned) => {
                    let top, left;

                    left = cloned.left + padding + padding;
                    top = cloned.top + padding;

                    if (event) {
                        const pointer = this.canvas.getPointer(event);
                        (left = pointer.x), (top = pointer.y);
                    }

                    const newId = uuidv4();
                    cloned.set({
                        left,
                        top,
                        id: newId
                    });

                    this.canvas.add(cloned);
                    objects.push(cloned);
                });
            });

            const activeSelection = new fabric.ActiveSelection(objects, {
                canvas: this.canvas
            });

            this.canvas.setActiveObject(activeSelection);
            this.canvas.renderAll();

            if (!this.transactionHandler.active) {
                this.transactionHandler.save('paste');
            }

            this.objects = this.getObjects();

            if (onAdd) {
                onAdd(activeSelection);
            }

            return true;
        }

        clipboard.clone((cloned) => {
            this.canvas.discardActiveObject();

            let left, top;

            left = cloned.left + padding;
            top = cloned.top + padding;

            if (event) {
                const pointer = this.canvas.getPointer(event);
                left = pointer.x;
                top = pointer.y;
            }

            const newId = uuidv4();
            cloned.set({
                left,
                top,
                id: newId
            });

            this.canvas.add(cloned);

            const newClipboard = cloned;

            this.clipboard = newClipboard;

            cloned.setCoords();
            this.canvas.setActiveObject(cloned);
            this.canvas.requestRenderAll();

            if (onAdd) {
                onAdd(cloned);
            }

            if (!this.transactionHandler.active) {
                this.transactionHandler.save('paste');
            }
        }, propertiesToInclude);

        return true;
    };

    select = (obj, find = false) => {
        let findObject = obj;

        if (find) {
            findObject = this.find(obj);
        }

        if (findObject) {
            if (findObject.group) {
                findObject.hasControls = false;
            }

            this.canvas.discardActiveObject();
            this.canvas.setActiveObject(findObject);
            this.canvas.requestRenderAll();
        }
    };

    selectAll = () => {
        this.canvas.discardActiveObject();
        const filteredObjects = this.canvas.getObjects().filter((obj) => {
            if (obj.name === 'drawing-area') {
                return false;
            } else if (!obj.evented) {
                return false;
            }
            return true;
        });

        if (!filteredObjects.length) {
            return;
        }

        if (filteredObjects.length === 1) {
            this.canvas.setActiveObject(filteredObjects[0]);
            this.canvas.renderAll();
            return;
        }

        const activeSelection = new fabric.ActiveSelection(filteredObjects, {
            canvas: this.canvas
        });
        this.canvas.setActiveObject(activeSelection);
        this.canvas.renderAll();
    };

    clearSelection = () => {
        this.canvas.discardActiveObject();
        this.canvas.renderAll();
    };

    remove = (target) => {
        const { onRemove } = this;

        const activeObject = target && !target.target ? target : this.canvas.getActiveObject();

        if (!activeObject) {
            return;
        }

        if (activeObject.deleteable !== undefined && !activeObject.deleteable) {
            return;
        }

        if (activeObject.type === 'activeSelection') {
            this.canvas.discardActiveObject();
            activeObject.forEachObject((obj) => this.canvas.remove(obj));
        } else {
            this.canvas.remove(activeObject);
        }

        if (!this.transactionHandler.active) {
            this.transactionHandler.save('remove');
        }

        this.objects = this.getObjects();

        if (onRemove) {
            onRemove(activeObject);
        }
    };

    cut = () => {
        this.copy();
        this.remove();
    };

    lock = (locked) => {
        const activeObject = this.canvas.getActiveObject();
        if (!activeObject) {
            return;
        }

        const isLocked = !locked.target ? locked : !activeObject.lockMovementX;

        if (activeObject.type === 'activeSelection') {
            activeObject.getObjects().forEach((obj) => {
                this.setObject(
                    {
                        lockMovementX: locked,
                        lockMovementY: locked,
                        hasControls: !locked,
                        hoverCursor: locked ? 'pointer' : 'move',
                        editable: !locked,
                        locked: locked
                    },
                    obj
                );
            });
        }

        this.setObject({
            lockMovementX: isLocked,
            lockMovementY: isLocked,
            hasControls: !isLocked,
            hoverCursor: isLocked ? 'pointer' : 'move',
            editable: !isLocked,
            locked: isLocked
        });

        if (!this.transactionHandler.active) {
            if (!isLocked) {
                this.transactionHandler.save('lock');
            } else {
                this.transactionHandler.save('unlock');
            }
        }
    };

    /**
     * Bring forward
     */
    bringForward = (target) => {
        const activeObject = target || this.canvas.getActiveObject();
        if (activeObject) {
            this.canvas.bringForward(activeObject);
            if (!this.transactionHandler.active) {
                this.transactionHandler.save('bringForward');
            }
            const { onModified } = this;
            if (onModified) {
                onModified(activeObject);
            }
        }
    };

    /**
     * Bring to front
     */
    bringToFront = (target) => {
        const activeObject = target || this.canvas.getActiveObject();
        if (activeObject) {
            this.canvas.bringToFront(activeObject);
            if (!this.transactionHandler.active) {
                this.transactionHandler.save('bringToFront');
            }
            const { onModified } = this;
            if (onModified) {
                onModified(activeObject);
            }
        }
    };

    find = (obj) => this.findById(obj.id);

    findByIdInObjects = (id, objects) => {
        let item = null;

        for (const idx in objects) {
            const object = objects[idx];

            if (object.id === id) {
                item = object;
                break;
            }
            if (object.type === 'group') {
                const itemInGroup = this.findByIdInObjects(id, object._objects);
                if (itemInGroup) {
                    item = itemInGroup;
                    break;
                }
            }
        }

        return item;
    };

    findById = (id) => {
        const findObject = this.findByIdInObjects(id, this.getObjects());

        if (!findObject) {
            return null;
        }

        return findObject;
    };

    findByName = (name) => {
        const findObject = this.canvas.getItemByName(name);

        if (!findObject) {
            return null;
        }

        return findObject;
    };

    getIndex = (target) => {
        const activeObject = target || this.canvas.getActiveObject();
        return this.canvas.getObjects().indexOf(activeObject);
    };

    /**
     * Send backwards
     * @returns
     */
    sendBackwards = (target) => {
        const activeObject = target || this.canvas.getActiveObject();
        if (activeObject) {
            const firstObject = this.canvas.getObjects()[1];
            if (firstObject.id === activeObject.id) {
                return;
            }

            const photos = this.objects.filter((object) => object.type === 'Photo');
            const currentZIndex = this.canvas.getObjects().indexOf(activeObject);

            // prevent object send backward behind participant photos
            if (currentZIndex - 1 === photos.length) {
                return;
            }

            if (!this.transactionHandler.active) {
                this.transactionHandler.save('sendBackwards');
            }
            this.canvas.sendBackwards(activeObject);
            const { onModified } = this;
            if (onModified) {
                onModified(activeObject);
            }
        }
    };

    /**
     * Send to back
     */
    sendToBack = (target) => {
        const activeObject = target || this.canvas.getActiveObject();
        if (activeObject) {
            this.canvas.sendToBack(activeObject);
            this.canvas.sendToBack(this.canvas.getObjects()[1]);
            if (!this.transactionHandler.active) {
                this.transactionHandler.save('sendToBack');
            }
            const { onModified } = this;
            if (onModified) {
                onModified(activeObject);
            }
        }
    };

    moveToIndex = (target, targetIndex, callOnModified = false) => {
        if (target) {
            this.canvas.moveTo(target, targetIndex);

            // if (!this.transactionHandler.active) {
            //     this.transactionHandler.save('moveToIndex');
            // }

            const { onModified } = this;

            if (onModified && callOnModified) {
                onModified(target);
            }
        }
    };

    clear(includeDrawArea = false) {
        this.canvas.discardActiveObject();

        if (includeDrawArea) {
            this.canvas.clear();
            this.drawArea = null;
        } else {
            this.canvas.getObjects().forEach((obj) => {
                if (obj.name === 'drawing-area') {
                    return;
                }
                this.canvas.remove(obj);
            });
        }

        this.objects = this.getObjects();
        this.canvas.renderAll();
    }

    toGroup = () => {
        const activeObject = this.canvas.getActiveObject();

        if (!activeObject) {
            return null;
        }
        if (activeObject.type !== 'activeSelection') {
            return null;
        }

        const group = activeObject.toGroup();
        group.set({
            id: uuidv4(),
            type: 'group',
            subTargetCheck: true
        });
        this.objects = this.getObjects();

        if (!this.transactionHandler.active) {
            this.transactionHandler.save('group');
        }

        const { onSelect, onModified } = this;

        if (onSelect) {
            onSelect(group);
        }

        if (this.onGroup) {
            this.onGroup();
        }

        // if (onModified) {
        //     onModified(group)
        // }

        this.canvas.renderAll();
        return group;
    };

    toActiveSelection = () => {
        const activeObject = this.canvas.getActiveObject();
        if (!activeObject) {
            return;
        }
        if (activeObject.type !== 'group') {
            return;
        }
        const activeSelection = activeObject.toActiveSelection();
        this.objects = this.getObjects();

        if (!this.transactionHandler.active) {
            this.transactionHandler.save('ungroup');
        }

        if (this.onSelect) {
            this.onSelect(activeSelection);
        }

        if (this.onUngroup) {
            this.onUngroup();
        }

        this.canvas.renderAll();
        return activeSelection;
    };

    objectFromJSON = (json) => {
        const objects = JSON.parse(json);

        return new Promise((resolve, reject) => {
            fabric.util.enlivenObjects(objects, (enlivenObjects) => {
                if (enlivenObjects.length > 1) {
                    const group = new fabric.Group([]);

                    // console.log(group)

                    enlivenObjects.forEach((obj) => {
                        group.addWithUpdate(obj);
                    });

                    resolve(group);
                }

                const obj = enlivenObjects[0];

                if (obj.isGoogleFont) {
                    const font = obj.fontFamily;

                    this.loadFont(font);

                    obj.set({
                        fontFamily: 'Times New Roman'
                    });

                    const fontObserver = new FontFaceObserver(font);
                    fontObserver.load().then(() => {
                        obj.set({
                            fontFamily: font
                        });
                        fabric.util.clearFabricFontCache(font);
                        obj.initDimensions();
                        this.canvas.requestRenderAll();

                        const { onModified } = this;
                        if (onModified) {
                            onModified(obj);
                        }
                    });
                }

                resolve(obj);
            });
        });
    };
}
