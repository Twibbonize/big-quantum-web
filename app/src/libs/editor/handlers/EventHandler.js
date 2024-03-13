import Hammer from 'hammerjs';
import { code } from '../constants';
import { treatAngle } from '../utils';

export default class EventHandler {
    constructor(handler) {
        this.handler = handler;
        this.initCanvasEvents();

        this.rotatingState = {
            lastAngleRotation: null,
            currentAngle: null,
            isRotating: false,
            cursorPos: new fabric.Point()
        };

        this.gestureState = {
            lastX: null,
            lastY: null,
            adjustDeltaX: 0,
            adjustDeltaY: 0,
            adjustScale: 1,
            adjustScaleX: 1,
            adjustScaleY: 1,
            adjustRotation: 0,
            currentDeltaX: null,
            currentDeltaY: null,
            currentScale: null,
            currentScaleX: null,
            currentScaleY: null,
            currentRotation: null
        };

        this.rotateSnaps = [0, 45, 90, 135, 180, 225, 270, 315, 360];

        this.initHammerManager();
        // this.lastAngleRotation = null
    }

    _between = (value, first, last) => {
        let lower = Math.min(first, last),
            upper = Math.max(first, last);
        return value >= lower && value <= upper;
    };

    _checkRotateSnap = (degree, object) => {
        const inDegree = degree + this.gestureState.adjustRotation;
        let newDegree = null;

        if (object.lockRotation == true) {
            if (
                this._between(
                    Math.abs(Math.ceil(inDegree)),
                    Math.abs(object.lockedDegree) - 10,
                    Math.abs(object.lockedDegree) + 10
                )
            ) {
                //console.log("111 - maintain snap")
                object.lockRotation = true;
                newDegree = object.lockedDegree;
                //newDegree = degree

                // break
            } else {
                object.lockRotation = false;
                object.lockedDegree = null;
                newDegree = degree + this.gestureState.adjustRotation;
                // break
            }
        } else {
            if (this.rotateSnaps.includes(Math.abs(Math.ceil(inDegree)))) {
                object.lockRotation = true;
                newDegree = Math.ceil(degree + this.gestureState.adjustRotation);
                object.lockedDegree = newDegree;
            } else {
                object.lockRotation = false;
                object.lockedDegree = null;
                newDegree = degree + this.gestureState.adjustRotation;
            }
        }

        return newDegree;
    };

    initHammerManager = () => {
        this.hammer = new Hammer.Manager(this.handler.canvas.wrapperEl);
        let rotate = new Hammer.Rotate();
        let pinch = new Hammer.Pinch();

        this.hammer.add([pinch, rotate]);

        this.hammer.get('pinch').set({
            enable: true
        });
        this.hammer.get('rotate').set({
            enable: true
        });

        this.hammer.on('pinchstart rotatestart', (e) => {
            const { canvas } = this.handler;

            this.gestureState.adjustRotation -= e.rotation;
            this.gestureState.lastX = e.center.x;
            this.gestureState.lastY = e.center.y;

            if (canvas.getActiveObject()) {
                const object = canvas.getActiveObject();
                this.gestureState.adjustScaleX = object.scaleX;
                this.gestureState.adjustScaleY = object.scaleY;
            }
        });

        this.hammer.on('pinchmove rotatemove', (e) => {
            const { canvas } = this.handler;

            this.gestureState.currentScale = this.gestureState.adjustScale * e.scale;

            if (canvas.getActiveObject() && e.maxPointers == 2) {
                const object = canvas.getActiveObject();

                // check rotate snap
                this.gestureState.currentRotation = this._checkRotateSnap(e.rotation, object);
                // this.gestureState.currentRotation = this.gestureState.adjustRotation + e.rotation

                this.gestureState.currentScaleX = this.gestureState.adjustScaleX * e.scale * 1;
                this.gestureState.currentScaleY = this.gestureState.adjustScaleY * e.scale * 1;

                // Blocks object from being resized too small (and maintains aspect ratio)
                if (
                    this.gestureState.currentScaleX > object.minScaleLimit &&
                    this.gestureState.currentScaleY > object.minScaleLimit
                ) {
                } else {
                    console.log('object has reached a limit');
                    this.gestureState.currentScaleX = object.scaleX; //Math.max(this.gestureState.currentScaleX, object.minScaleLimit)
                    this.gestureState.currentScaleY = object.scaleY; //Math.max(this.gestureState.currentScaleY, object.minScaleLimit)
                }

                let deltaScaleX = this.gestureState.currentScaleX;
                let deltaScaleY = this.gestureState.currentScaleY;

                // Temporarily locking regular object dragging during the gesture, just to smooth out jitteryness
                object.set({
                    lockMovementX: true,
                    lockMovementY: true
                });

                // object.set('scaleX', deltaScaleX);
                // object.set('scaleY', deltaScaleY);
                object.scale(deltaScaleY);

                if (this.gestureState.currentRotation) {
                    object.rotate(this.gestureState.currentRotation);
                }

                object.setCoords();
                canvas.renderAll();

                const { onModified } = this.handler;

                if (onModified) {
                    onModified(object, 'scale');
                }
            }
        });

        this.hammer.on('pinchend rotateend', (e) => {
            const { canvas } = this.handler;

            this.gestureState.adjustScale = this.gestureState.currentScale;
            this.gestureState.adjustRotation = this.gestureState.currentRotation;
            this.gestureState.adjustDeltaX = this.gestureState.currentDeltaX;
            this.gestureState.adjustDeltaY = this.gestureState.currentDeltaY;
            this.gestureState.adjustScaleX = this.gestureState.currentScaleX;
            this.gestureState.adjustScaleY = this.gestureState.currentScaleY;

            if (canvas.getActiveObject()) {
                const object = canvas.getActiveObject();

                // Timeout is to smooth out jitteryness, especially on iOS (iPad)
                setTimeout(function () {
                    object.set({
                        lockMovementX: false,
                        lockMovementY: false
                    });
                }, 300);
            }
            canvas.renderAll();
        });

        this.hammer.on('pinchin', this.pinchin);
        this.hammer.on('pinchout', this.pinchout);
    };

    initCanvasEvents() {
        this.handler.canvas.on({
            'text:editing:entered': this.editingEntered,
            'text:editing:exited': this.editingExited,
            'object:modified': this.modified,
            'object:scaling': this.scaling,
            'object:scaled': this.scaled,
            'object:moving': this.moving,
            'object:moved': this.moved,
            'object:rotating': this.rotating,
            'object:rotated': this.rotated,
            'mouse:dblclick': this.mousedblclick,
            'mouse:wheel': this.mousewheel,
            'mouse:down': this.mousedown,
            'mouse:move': this.mousemove,
            'mouse:up': this.mouseup,
            'selection:cleared': this.selection,
            'selection:created': this.selection,
            'selection:updated': this.selection,
            'after:render': this.afterRender
        });

        // touch gestures
        // const mc = new Hammer(this.handler.canvas.wrapperEl)
        // mc.get('pinch').set({
        //   enable: true
        // })
        // mc.on('pinchin', this.pinchin)
        // mc.on('pinchout', this.pinchout)

        document.body.addEventListener('keydown', this.keydown, false);
        document.body.addEventListener('keyup', this.keyup, false);
        this.handler.canvas.wrapperEl.addEventListener('mousedown', this.onmousedown, false);
        this.handler.canvas.wrapperEl.addEventListener('contextmenu', this.contextmenu, false);
    }

    editingEntered = (_opt) => {
        this.handler.keyEvent.del = false;
    };

    editingExited = (_opt) => {
        this.handler.keyEvent.del = true;
    };

    modified = (opt) => {
        const { action, target } = opt;

        if (this.handler.interactionMode === 'crop') {
            this.handler.cropHandler.modified(opt);
            return;
        }

        if (action === 'drag') {
            this.handler.canvas.fire('object:moved');

            // if (target.type !== 'Photo') {
            //   target.set({
            //     hasControls: true
            //   })
            // }
        } else if (action === 'scale') {
            if (target.type === 'textbox') {
                this.scaleTextbox(target);
            }

            this.handler.canvas.fire('object:scaled');
        } else if (action === 'rotate') {
            this.handler.canvas.fire('object:rotated');
        }

        const { onModified } = this.handler;

        if (onModified) {
            onModified(target, action);
        }
    };

    moving = (opt) => {
        const { target } = opt;

        if (this.handler.interactionMode === 'crop') {
            this.handler.cropHandler.moving(opt);
        } else {
            if (this.handler.editable && this.handler.guidelineOption.enabled) {
                this.handler.guidelineHandler.movingGuidelines(target);
            }

            // target.set({
            //   hasControls: false
            // })

            // if (target.type === 'activeSelection') {
            //   const activeSelection = target

            //   activeSelection.getObjects().forEach((obj) => {
            //     const left = target.left + obj.left + target.width / 2;
            //     const top = target.top + obj.top + target.height / 2;

            //     obj.set({
            //       left,
            //       top
            //     })

            //     obj.setCoords()
            //   });

            //   return;
            // }
        }
    };

    moved = () => {
        if (!this.handler.transactionHandler.active) {
            this.handler.transactionHandler.save('moved');
        }
    };

    scaling = (opt) => {
        if (this.handler.interactionMode === 'crop') {
            this.handler.cropHandler.scaling(opt);
            return;
        }

        // const { minZoom, maxZoom } = this.handler.zoomLimit
        // const target = opt.target
        // target.set({
        //   scaleX: fabric.util.clamp(target.scaleX, minZoom / 100, maxZoom / 100),
        //   scaleY: fabric.util.clamp(target.scaleY, minZoom / 100, maxZoom / 100),
        // })
    };

    scaled = (_opt) => {
        if (!this.handler.transactionHandler.active) {
            this.handler.transactionHandler.save('scaled');
        }

        const { onScaled } = this.handler;
        if (onScaled) {
            onScaled(target);
        }
    };

    renderRotateLabel = (ctx, canvas) => {
        const angleText = `${this.rotatingState.currentAngle.toFixed(0)}°`,
            borderRadius = 5,
            rectWidth = 40,
            rectHeight = 24,
            textWidth = 6.01 * angleText.length - 1.317;

        const pos = fabric.util.rotatePoint(
            this.rotatingState.cursorPos,
            this.rotatingState.cursorPos,
            fabric.util.degreesToRadians(30)
        );

        const { tl, br } = canvas.vptCoords;

        ctx.save();
        ctx.translate(
            Math.min(Math.max(pos.x, tl.x), br.x - rectWidth),
            Math.min(Math.max(pos.y, tl.y), br.y - rectHeight)
        );
        ctx.beginPath();
        ctx.fillStyle = 'rgba(37,38,39,0.9)';
        ctx.roundRect(0, 0, rectWidth, rectHeight, borderRadius);
        ctx.fill();
        ctx.font = '400 12px Rubik';
        ctx.fillStyle = 'hsla(0,0%, 100%, 0.9)';
        ctx.fillText(angleText, rectWidth / 2 - textWidth / 2, rectHeight / 2 + 4);
        ctx.restore();
    };

    afterRender = (opt) => {
        this.rotatingState.isRotating && this.renderRotateLabel(opt.ctx, this.handler.canvas);
    };

    rotating = (opt) => {
        const angle = treatAngle(opt.target.angle);
        this.rotatingState.isRotating = true;
        this.rotatingState.currentAngle = opt.target.angle;
        this.rotatingState.cursorPos.x = opt.pointer.x;
        this.rotatingState.cursorPos.y = opt.pointer.y;

        if (this.lastAngleRotation !== angle) {
            // TODO
            // this.handler.canvas.setCursor(fabric.util.angleBasedRotateIcon(angle));
            this.lastAngleRotation = angle;
        }

        // if (this.handler.guidelineOption.enabled) {
        //   this.handler.guidelineHandler.updateRotatingGuideline(opt.target)
        // }
    };

    rotated = (_opt) => {
        if (!this.handler.transactionHandler.active) {
            this.handler.transactionHandler.save('rotated');
        }

        if (this.handler.guidelineOption.enabled) {
            // this.handler.guidelineHandler.clearRotatingGuideline()
        }

        const { onRotated } = this.handler;
        if (onRotated) {
            onRotated(target);
        }
    };

    /*methods for event handling use arrow function to keep bind the
     this keyword to EventHandler Class rather than canvas */
    mousedown = (opt) => {
        if (this.handler.interactionMode === 'grab') {
            this.panning = true;
            return;
        }
    };

    mouseup = (opt) => {
        this.rotatingState.isRotating = false;

        if (this.handler.interactionMode === 'grab') {
            this.panning = false;
            return;
        }
    };

    mousemove = (opt) => {
        if (this.handler.interactionMode === 'grab' && this.panning) {
            this.handler.interactionHandler.moving(opt.e);
            this.handler.canvas.requestRenderAll();
        }
    };

    mousewheel = (opt) => {
        const { mouseEvent } = this.handler;
        const { wheel } = mouseEvent;

        if (!wheel) {
            return;
        }
        const event = opt.e;
        const delta = event.deltaY;
        let zoomRatio = this.handler.canvas.getZoom();
        if (delta > 0) {
            zoomRatio -= 0.01;
        } else {
            zoomRatio += 0.01;
        }
        this.handler.zoomHandler.zoomToPoint(
            new fabric.Point(
                this.handler.canvas.getWidth() / 2,
                this.handler.canvas.getHeight() / 2
            ),
            zoomRatio
        );

        event.preventDefault();
        event.stopPropagation();
    };

    mousedblclick = (event) => {
        const subTarget = event.subTargets[0];
        if (subTarget) {
            this.handler.select(subTarget, true);
            return;
        }

        this.handler.cropHandler.start();
    };

    pinchin = (_e) => {
        const { canvas } = this.handler;

        if (canvas.getActiveObject()) {
            return;
        }

        let zoomRatio = canvas.getZoom();

        zoomRatio -= 0.001;
        this.handler.zoomHandler.zoomToPoint(
            new fabric.Point(canvas.getWidth() / 2, canvas.getHeight() / 2),
            zoomRatio
        );
    };

    pinchout = (_e) => {
        const { canvas } = this.handler;

        if (canvas.getActiveObject()) {
            return;
        }

        let zoomRatio = canvas.getZoom();

        zoomRatio += 0.001;
        this.handler.zoomHandler.zoomToPoint(
            new fabric.Point(canvas.getWidth() / 2, canvas.getHeight() / 2),
            zoomRatio
        );
    };

    selection = (opt) => {
        const { onSelect } = this.handler;

        const { selected, deselected } = opt;

        const target = this.handler.canvas.getActiveObject();

        if (target && target.type === 'activeSelection') {
            if (target.getObjects().some((obj) => obj.locked)) {
                target.set({
                    lockMovementX: true,
                    lockMovementY: true,
                    hasControls: false,
                    hoverCursor: 'pointer',
                    locked: true
                });
            }
        }

        if (selected && onSelect) {
            onSelect(target);
            return;
        } else if (onSelect) {
            onSelect();
        }
    };

    keydown = (e) => {
        const { keyEvent } = this.handler;
        const { grab } = keyEvent;

        if (this.handler.shortcutHandler.isW(e) && grab) {
            this.handler.interactionHandler.grab();
            return;
        }

        if (this.handler.shortcutHandler.isSpace(e) && grab) {
            if (this.handler.interactionMode !== 'crop') {
                this.handler.interactionHandler.grab();
                return;
            }
        }

        if (this.handler.shortcutHandler.isEscape(e)) {
            if (this.handler.interactionMode === 'selection') {
                this.handler.clearSelection();
            }

            if (this.handler.interactionMode === 'crop') {
                this.handler.cropHandler.cancel();
            }
        }

        const activeElement = document.activeElement;
        // Check if the active element is an input-like element
        if (
            activeElement.tagName === 'INPUT' ||
            activeElement.tagName === 'TEXTAREA' ||
            activeElement.tagName === 'SELECT'
        ) {
            return; // Active element is an input-like element
        }

        if (this.handler.shortcutHandler.isDelete(e)) {
            this.handler.remove();
        } else if (this.handler.shortcutHandler.isArrow(e)) {
            this.arrowmoving(e);
        } else if (this.handler.shortcutHandler.isCtrlA(e)) {
            e.preventDefault();
            this.handler.selectAll();
        } else if (this.handler.shortcutHandler.isCtrlC(e)) {
            e.preventDefault();
            this.handler.copy();
        } else if (this.handler.shortcutHandler.isCtrlV(e)) {
            e.preventDefault();
            this.handler.paste();
        } else if (this.handler.shortcutHandler.isCtrlX(e)) {
            e.preventDefault();
            this.handler.cut();
        } else if (
            this.handler.shortcutHandler.isShiftCmdZ(e) ||
            this.handler.shortcutHandler.isCtrlY(e)
        ) {
            e.preventDefault();
            this.handler.transactionHandler.redo();
        } else if (this.handler.shortcutHandler.isCtrlZ(e)) {
            e.preventDefault();
            this.handler.transactionHandler.undo();
        } else if (this.handler.shortcutHandler.isCtrlPlus(e)) {
            e.preventDefault();
            this.handler.zoomHandler.zoomIn();
        } else if (this.handler.shortcutHandler.isCtrlMinus(e)) {
            e.preventDefault();
            this.handler.zoomHandler.zoomOut();
        }

        // else if (this.handler.shortcutHandler.isO(e)) {
        //   e.preventDefault();
        //   this.handler.zoomHandler.zoomOneToOne();
        // } else if (this.handler.shortcutHandler.isP(e)) {
        //   e.preventDefault();
        //   this.handler.zoomHandler.zoomToFit();
        // }
    };

    keyup = (e) => {
        if (this.handler.shortcutHandler.isSpace(e) || !this.handler.shortcutHandler.isW(e)) {
            if (this.handler.interactionMode === 'crop') {
                return;
            }

            this.handler.interactionHandler.selection();
        }
    };

    onmousedown = (e) => {
        let isRightMB;

        if ('which' in e)
            // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
            isRightMB = e.which == 3;
        else if ('button' in e)
            // IE, Opera
            isRightMB = e.button == 2;

        // TODO
        // if (!isRightMB) {
        //     this.handler.contextmenuHandler.hide();
        // }
    };

    arrowmoving = (e) => {
        const activeObject = this.handler.canvas.getActiveObject();
        if (!activeObject) {
            return false;
        }

        if (e.code === code.ARROW_UP) {
            activeObject.set('top', activeObject.top - 2);
            activeObject.setCoords();
            this.handler.canvas.renderAll();
            return true;
        } else if (e.code === code.ARROW_DOWN) {
            activeObject.set('top', activeObject.top + 2);
            activeObject.setCoords();
            this.handler.canvas.renderAll();
            return true;
        } else if (e.code === code.ARROW_LEFT) {
            activeObject.set('left', activeObject.left - 2);
            activeObject.setCoords();
            this.handler.canvas.renderAll();
            return true;
        } else if (e.code === code.ARROW_RIGHT) {
            activeObject.set('left', activeObject.left + 2);
            activeObject.setCoords();
            this.handler.canvas.renderAll();
            return true;
        }

        return true;
    };

    contextmenu = (e) => {
        e.preventDefault();
        const { editable } = this.handler;

        if (editable) {
            const target = this.handler.canvas.findTarget(e, false);
            if (target && target.type !== 'activeSelection') {
                this.handler.select(target);
            }

            // onContext(e, target)
            // this.handler.contextmenuHandler.show(e, target);
        }
    };

    resize(nextWidth, nextHeight) {
        const drawArea = this.handler.canvas.getItemByName('drawing-area');

        if (nextWidth === 0 || nextHeight === 0) {
            return;
        }

        this.handler.canvas.setWidth(nextWidth).setHeight(nextHeight);

        const diffWidth = nextWidth / 2 - this.handler.width / 2;
        const diffHeight = nextHeight / 2 - this.handler.height / 2;
        this.handler.width = nextWidth;
        this.handler.height = nextHeight;

        this.handler.canvas.centerObject(drawArea);
        drawArea.setCoords();
        this.handler.canvas.getObjects().forEach((obj) => {
            if (obj.name !== 'drawing-area') {
                const left = obj.left + diffWidth;
                const top = obj.top + diffHeight;
                obj.set({
                    left,
                    top
                });
                obj.setCoords();
            }
        });
        this.handler.canvas.requestRenderAll();
        return;
    }

    // individual object event
    object = {
        /**
         * Mouse double click event on object
         * @param {FabricEvent} opt
         */
        mousedblclick: (opt) => {
            const { target } = opt;
            if (target) {
                const { onDblClick } = this.handler;
                if (onDblClick) {
                    onDblClick(this.handler.canvas, target);
                }
            }
        }
    };

    scaleTextbox = (target) => {
        const { fontSize, width, scaleX } = target;
        target.set({
            fontSize: parseInt(fontSize * scaleX),
            width: width * scaleX,
            scaleX: 1,
            scaleY: 1
        });
    };
}
