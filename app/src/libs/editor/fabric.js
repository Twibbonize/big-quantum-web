import { fabric } from 'fabric';
import { tint, temperature, shadow, highlight, vignette, duotone } from '@/libs/editor/filters';
import { treatAngle, angleBasedRotateIcon } from '@/libs/editor/utils';

fabric.Image.filters.Highlight = fabric.util.createClass(
    fabric.Image.filters.BaseFilter,
    highlight
);
fabric.Image.filters.Shadow = fabric.util.createClass(fabric.Image.filters.BaseFilter, shadow);
fabric.Image.filters.Temperature = fabric.util.createClass(
    fabric.Image.filters.BaseFilter,
    temperature
);
fabric.Image.filters.Tint = fabric.util.createClass(fabric.Image.filters.BaseFilter, tint);
fabric.Image.filters.Vignette = fabric.util.createClass(fabric.Image.filters.BaseFilter, vignette);
fabric.Image.filters.Duotone = fabric.util.createClass(fabric.Image.filters.ColorMatrix, duotone);

fabric.Image.filters.Vignette.fromObject = fabric.Image.filters.BaseFilter.fromObject;
fabric.Image.filters.Highlight.fromObject = fabric.Image.filters.BaseFilter.fromObject;
fabric.Image.filters.Shadow.fromObject = fabric.Image.filters.BaseFilter.fromObject;
fabric.Image.filters.Temperature.fromObject = fabric.Image.filters.BaseFilter.fromObject;
fabric.Image.filters.Tint.fromObject = fabric.Image.filters.BaseFilter.fromObject;
fabric.Image.filters.Duotone.fromObject = fabric.Image.filters.ColorMatrix.fromObject;

fabric.Canvas.prototype.getItemByName = function (name) {
    let object = null,
        objects = this.getObjects();

    for (let i = 0, len = this.size(); i < len; i++) {
        if (objects[i].name && objects[i].name === name) {
            object = objects[i];
            break;
        }
    }

    return object;
};

fabric.Canvas.prototype.getItemById = function (id) {
    let object = null,
        objects = this.getObjects();

    for (let i = 0, len = this.size(); i < len; i++) {
        if (objects[i].id && objects[i].id === id) {
            object = objects[i];
            break;
        }
    }

    return object;
};

fabric.Object.prototype.getZIndex = function () {
    return this.canvas.getObjects().indexOf(this);
};
fabric.Object.prototype.setOriginToCenter = function () {
    this._originalOriginX = this.originX;
    this._originalOriginY = this.originY;

    var center = this.getCenterPoint();

    this.set({
        originX: 'center',
        originY: 'center',
        left: center.x,
        top: center.y
    });
};

fabric.Object.prototype.setCenterToOrigin = function () {
    var originPoint = this.translateToOriginPoint(
        this.getCenterPoint(),
        this._originalOriginX,
        this._originalOriginY
    );

    this.set({
        originX: this._originalOriginX,
        originY: this._originalOriginY,
        left: originPoint.x,
        top: originPoint.y
    });
};

// const rotateIcon = '/assets/img/icons/rotate-icon.svg';
// const imgRotate = document.createElement('img');
// imgRotate.src = rotateIcon;

// function renderIcon(icon) {
//     return function renderIcon(ctx, left, top, styleOverride, fabricObject) {
//         var size = this.cornerSize;
//         ctx.save();
//         ctx.translate(left, top);
//         ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
//         ctx.drawImage(icon, -size / 2, -size / 2, size, size);
//         ctx.restore();
//     };
// }

// function rotationStyleHandler(eventData, control, fabricObject) {
//     if (fabricObject.lockRotation) {
//         return NOT_ALLOWED_CURSOR;
//     }
//     const angle = treatAngle(fabricObject.angle);
//     return angleBasedRotateIcon(angle);
// }

// fabric.Object.prototype.controls.mtr = new fabric.Control({
//     x: 0,
//     y: -0.5,
//     offsetY: -40,
//     cursorStyleHandler: rotationStyleHandler,
//     actionHandler: fabric.controlsUtils.rotationWithSnapping,
//     actionName: 'rotate',
//     render: renderIcon(imgRotate),
//     cornerSize: 24,
//     withConnection: false
// });

// fabric.Textbox.prototype.controls.mtr = fabric.Object.prototype.controls.mtr;

// fabric.Object.prototype.set({
//     cornerStyle: 'circle',
//     cornerColor: '#FFFFFF',
//     cornerStrokeColor: '#000000',
//     transparentCorners: false,
//     borderColor: '#1BAAA0',
//     paintFirst: 'stroke',
//     borderDashArray: [16, 6],
//     borderScaleFactor: 2,
//     snapAngle: 45,
//     snapThreshold: 5
// });

export default fabric;
