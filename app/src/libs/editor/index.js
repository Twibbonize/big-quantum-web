import fabric from './fabric';
import Handler from './handlers/Handler';

class Editor {
    constructor({ el, width, height, ...options }) {
        this.width = width;
        this.height = height;

        console.log(width, height);

        const canvas = new fabric.Canvas(el, {
            height: height,
            width: width,
            controlsAboveOverlay: true,
            preserveObjectStacking: true
        });

        const drawArea = new fabric.Rect({
            fill: 'white',
            hasBorders: false,
            hasControls: false,
            hasRotatingPoint: false,
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

        canvas.centerObject(drawArea);
        canvas.clipPath = drawArea;
        canvas.add(drawArea);

        this.handler = new Handler({ canvas: canvas, ...options });
    }
}

export default Editor;
