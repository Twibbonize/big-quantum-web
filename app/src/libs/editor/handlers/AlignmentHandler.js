export default class AlignmentHandler {
    constructor(handler) {
        this.handler = handler;
    }

    left = () => {
        const activeObject = this.handler.canvas.getActiveObject();
        if (activeObject && activeObject.type === 'activeSelection') {
            const activeSelection = activeObject;
            const activeObjectLeft = -(activeObject.width / 2);
            activeSelection.forEachObject((obj) => {
                obj.set({
                    left: activeObjectLeft
                });
                obj.setCoords();
            });

            const objects = activeSelection.getObjects();
            this.handler.canvas.discardActiveObject();
            const newSelection = new fabric.ActiveSelection(objects, {
                canvas: this.handler.canvas
            });
            this.handler.canvas.setActiveObject(newSelection);
            this.handler.canvas.renderAll();
        }
    };

    center = () => {
        const activeObject = this.handler.canvas.getActiveObject();
        if (activeObject && activeObject.type === 'activeSelection') {
            const activeSelection = activeObject;
            activeSelection.forEachObject((obj) => {
                obj.set({
                    left: 0 - (obj.width * obj.scaleX) / 2
                });
                obj.setCoords();
            });

            const objects = activeSelection.getObjects();
            this.handler.canvas.discardActiveObject();
            const newSelection = new fabric.ActiveSelection(objects, {
                canvas: this.handler.canvas
            });
            this.handler.canvas.setActiveObject(newSelection);
            this.handler.canvas.renderAll();
        }
    };

    right = () => {
        const activeObject = this.handler.canvas.getActiveObject();
        if (activeObject && activeObject.type === 'activeSelection') {
            const activeSelection = activeObject;
            const activeObjectLeft = activeObject.width / 2;
            activeSelection.forEachObject((obj) => {
                obj.set({
                    left: activeObjectLeft - obj.width * obj.scaleX
                });
                obj.setCoords();
                this.handler.canvas.renderAll();
            });

            const objects = activeSelection.getObjects();
            this.handler.canvas.discardActiveObject();
            const newSelection = new fabric.ActiveSelection(objects, {
                canvas: this.handler.canvas
            });
            this.handler.canvas.setActiveObject(newSelection);
            this.handler.canvas.renderAll();
        }
    };

    middle = () => {
        const activeObject = this.handler.canvas.getActiveObject();
        if (activeObject && activeObject.type === 'activeSelection') {
            const activeSelection = activeObject;
            activeSelection.forEachObject((obj) => {
                obj.set({
                    top: 0 - (obj.height * obj.scaleY) / 2
                });
                obj.setCoords();
                this.handler.canvas.renderAll();
            });

            const objects = activeSelection.getObjects();
            this.handler.canvas.discardActiveObject();
            const newSelection = new fabric.ActiveSelection(objects, {
                canvas: this.handler.canvas
            });
            this.handler.canvas.setActiveObject(newSelection);
            this.handler.canvas.renderAll();
        }
    };

    top = () => {
        const activeObject = this.handler.canvas.getActiveObject();
        if (activeObject && activeObject.type === 'activeSelection') {
            const activeSelection = activeObject;

            activeSelection.forEachObject((obj) => {
                obj.set({
                    top: -activeObject.height / 2
                });
                obj.setCoords();
                this.handler.canvas.renderAll();
            });

            const objects = activeSelection.getObjects();
            this.handler.canvas.discardActiveObject();
            const newSelection = new fabric.ActiveSelection(objects, {
                canvas: this.handler.canvas
            });
            this.handler.canvas.setActiveObject(newSelection);
            this.handler.canvas.renderAll();
        }
    };

    bottom = () => {
        const activeObject = this.handler.canvas.getActiveObject();
        if (activeObject && activeObject.type === 'activeSelection') {
            const activeSelection = activeObject;
            const activeObjectBottom = activeObject.height / 2;
            activeSelection.forEachObject((obj) => {
                obj.set({
                    top: activeObjectBottom - obj.height * obj.scaleY
                });
                obj.setCoords();
                this.handler.canvas.renderAll();
            });

            const objects = activeSelection.getObjects();
            this.handler.canvas.discardActiveObject();
            const newSelection = new fabric.ActiveSelection(objects, {
                canvas: this.handler.canvas
            });
            this.handler.canvas.setActiveObject(newSelection);
            this.handler.canvas.renderAll();
        }
    };
}
