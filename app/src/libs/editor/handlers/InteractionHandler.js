export default class InteractionHandler {
    constructor(handler) {
        this.handler = handler;
    }

    selection = () => {
        if (this.handler.interactionMode === 'selection') {
            return;
        }

        const drawArea = this.handler.canvas.getItemByName('drawing-area');

        this.handler.interactionMode = 'selection';
        this.handler.canvas.defaultCursor = 'default';
        this.handler.canvas.selection = true;
        drawArea.hoverCursor = 'default';

        this.handler.getObjects().forEach((obj) => {
            obj.selectable = true;
            obj.evented = true;
        });

        this.handler.canvas.renderAll();
        const { onInteraction } = this.handler;

        if (onInteraction) {
            onInteraction('selection');
        }
    };

    grab() {
        if (this.handler.interactionMode === 'grab') {
            return;
        }

        const drawArea = this.handler.canvas.getItemByName('drawing-area');

        this.handler.interactionMode = 'grab';
        this.handler.canvas.selection = false;
        this.handler.canvas.defaultCursor = 'grab';
        drawArea.hoverCursor = 'grab';
        this.handler.getObjects().forEach((obj) => {
            obj.selectable = false;
            obj.evented = this.handler.editable ? false : true;
        });
        this.handler.canvas.renderAll();

        const { onInteraction } = this.handler;

        if (onInteraction) {
            onInteraction('grab');
        }
    }

    // moving objects in grab mode
    moving(e) {
        const delta = new fabric.Point(e.movementX, e.movementY);
        this.handler.canvas.relativePan(delta);
        this.handler.canvas.requestRenderAll();

        // update viewportransform
        this.handler.guidelineHandler.viewportTransform = this.handler.canvas.viewportTransform;
        this.handler.guidelineHandler.zoom = this.handler.canvas.getZoom();
    }
}
