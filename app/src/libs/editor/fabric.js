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

const rotateIcon = '/assets/img/icons/rotate-icon.svg';
const imgRotate = document.createElement('img');
imgRotate.src = rotateIcon;

function renderIcon(icon) {
    return function renderIcon(ctx, left, top, styleOverride, fabricObject) {
        var size = this.cornerSize;
        ctx.save();
        ctx.translate(left, top);
        ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
        ctx.drawImage(icon, -size / 2, -size / 2, size, size);
        ctx.restore();
    };
}

function rotationStyleHandler(eventData, control, fabricObject) {
    if (fabricObject.lockRotation) {
        return NOT_ALLOWED_CURSOR;
    }
    const angle = treatAngle(fabricObject.angle);
    return angleBasedRotateIcon(angle);
}

fabric.Object.prototype.controls.mtr = new fabric.Control({
    x: 0,
    y: -0.5,
    offsetY: -40,
    cursorStyleHandler: rotationStyleHandler,
    actionHandler: fabric.controlsUtils.rotationWithSnapping,
    actionName: 'rotate',
    render: renderIcon(imgRotate),
    cornerSize: 24,
    withConnection: false
});

var deleteIcon =
    "data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_4377_13809)'%3E%3Cmask id='mask0_4377_13809' style='mask-type:luminance' maskUnits='userSpaceOnUse' x='0' y='0' width='24' height='24'%3E%3Cpath d='M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12Z' fill='white'/%3E%3C/mask%3E%3Cg mask='url(%23mask0_4377_13809)'%3E%3Cpath d='M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12Z' fill='white'/%3E%3Cpath d='M15 8.4H18V9.6H16.8V17.4C16.8 17.7314 16.5314 18 16.2 18H7.8C7.46863 18 7.2 17.7314 7.2 17.4V9.6H6V8.4H9V6.6C9 6.26864 9.26864 6 9.6 6H14.4C14.7314 6 15 6.26864 15 6.6V8.4ZM15.6 9.6H8.4V16.8H15.6V9.6ZM10.2 7.2V8.4H13.8V7.2H10.2Z' fill='%23F54336'/%3E%3C/g%3E%3Cpath d='M23.625 12C23.625 5.57969 18.4203 0.375 12 0.375C5.57969 0.375 0.375 5.57969 0.375 12C0.375 18.4203 5.57969 23.625 12 23.625C18.4203 23.625 23.625 18.4203 23.625 12Z' stroke='%23F54336' stroke-width='0.5'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_4377_13809'%3E%3Crect width='24' height='24' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A";

var img = document.createElement('img');
img.src = deleteIcon;

function deleteObject(eventData, transform) {
    var target = transform.target;
    var canvas = target.canvas;
    canvas.remove(target);
    canvas.requestRenderAll();
}

function renderIconDelete(ctx, left, top, styleOverride, fabricObject) {
    var size = this.cornerSize;
    ctx.save();
    ctx.translate(left, top);
    ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
    ctx.drawImage(img, -size / 2, -size / 2, size, size);
    ctx.restore();
}

fabric.Object.prototype.controls.deleteControl = new fabric.Control({
    x: -0.5,
    y: 0,
    offsetX: -20,
    cursorStyle: 'pointer',
    mouseUpHandler: deleteObject,
    render: renderIconDelete,
    cornerSize: 24
});

fabric.Textbox.prototype.controls.mtr = fabric.Object.prototype.controls.mtr;
fabric.Textbox.prototype.controls.deleteControl = fabric.Object.prototype.controls.deleteControl;

fabric.Object.prototype.set({
    cornerStyle: 'circle',
    cornerColor: '#FFFFFF',
    cornerStrokeColor: '#000000',
    transparentCorners: false,
    borderColor: '#F54336',
    paintFirst: 'stroke',
    borderScaleFactor: 2,
    snapAngle: 45,
    snapThreshold: 5
});

fabric.Textbox.prototype.setControlsVisibility({
    ml: false,
    mr: false,
    deleteControl: true
});

export default fabric;
