export default class CropHandler {
    constructor(handler) {
        this.handler = handler;

        this.cropRect = null;
        this.cropObject = null;
        this.cropObjectClone = null;
        this.overlayObj = null;

        this.cropRectState = {
            scaleX: null,
            scaleY: null,
            height: null,
            width: null
        };

        this.initOverlay();
    }

    validType = () => {
        const activeObject = this.handler.canvas.getActiveObject();
        if (!activeObject) {
            return false;
        }
        if (activeObject.type === 'image') {
            return true;
        }
        return false;
    };

    initOverlay = () => {
        const drawArea = this.handler.canvas.getItemByName('drawing-area');
        const { left, top, width, height } = drawArea;

        const overlayObj = new fabric.Rect({
            left,
            top,
            height,
            width,
            selectable: false,
            fill: 'rgba(53,71, 90, 0.2)'
        });

        this.overlayObj = overlayObj;
    };

    saveCropRectState = () => {
        const { width, height, scaleX, scaleY } = this.cropRect;

        this.cropRectState = {
            height,
            width,
            scaleX,
            scaleY
        };
    };

    start = () => {
        if (this.validType()) {
            this.handler.interactionMode = 'crop';

            // add overlay
            this.handler.canvas.add(this.overlayObj);

            // disable uniform scaling
            this.handler.canvas.uniformScaling = false;

            // set crop object
            this.cropObject = this.handler.canvas.getActiveObject();
            const { cropX, cropY, left, top, width, height, scaleX, scaleY, angle } =
                this.cropObject;
            const { width: ogWidth, height: ogHeight } = this.cropObject.getOriginalSize();

            // create cropper object
            this.cropRect = new fabric.Cropper({
                height: height !== ogHeight ? height : height - 5,
                width: width !== ogWidth ? width : width - 5,
                left: left,
                top: top,
                scaleX,
                scaleY,
                angle
            });

            // clone cropobject for cropping preview
            this.cropObject.clone((clonedObj) => {
                clonedObj.set({
                    selectable: false
                });

                // add the cloned image and bring to front
                this.cropObjectClone = clonedObj;
                this.handler.canvas.add(this.cropObjectClone);
                this.handler.canvas.add(this.cropRect);
                this.handler.canvas.bringToFront(this.cropObjectClone);
                this.handler.canvas.bringToFront(this.cropRect);

                this.handler.canvas.setActiveObject(this.cropRect);
                this.handler.canvas.renderAll();
                this.saveCropRectState();
            });

            // when start the crop, bring back the original version of the crop object
            this.cropObject
                .set({
                    width: ogWidth,
                    height: ogHeight,
                    cropX: 0,
                    cropY: 0,
                    left: left - cropX * scaleX,
                    top: top - cropY * scaleY
                })
                .setCoords();

            this.cropRect.setCoords();
            this.handler.canvas.renderAll();

            const { onInteraction } = this.handler;

            if (onInteraction) {
                onInteraction('crop');
            }
        }
    };

    finish = () => {
        this.crop(this.cropObject);
        this.cancel();
    };

    cancel = () => {
        this.handler.interactionMode = 'selection';

        this.handler.canvas.remove(this.overlayObj);
        this.handler.canvas.remove(this.cropObjectClone);
        this.handler.canvas.remove(this.cropRect);
        this.handler.canvas.setActiveObject(this.cropObject);

        this.cropRect = null;
        this.cropObject = null;
        this.cropObjectClone = null;

        this.handler.canvas.uniformScaling = true;
        this.handler.canvas.renderAll();

        const { onInteraction } = this.handler;

        if (onInteraction) {
            onInteraction('selection');
        }
    };

    restrictCropRect = () => {
        let save = true;

        if (this.cropRect.left < this.cropObject.left) {
            this.cropRect.set(this.cropRectState);
            this.cropRect.left = this.cropObject.left;
            save = false;
        }

        if (this.cropRect.top < this.cropObject.top) {
            this.cropRect.set(this.cropRectState);
            this.cropRect.top = this.cropObject.top;
            save = false;
        }

        if (
            this.cropRect.left + this.cropRect.getScaledWidth() >
            this.cropObject.left + this.cropObject.getScaledWidth()
        ) {
            this.cropRect.set(this.cropRectState);
            this.cropRect.left =
                this.cropObject.left +
                this.cropObject.getScaledWidth() -
                this.cropRect.getScaledWidth();
            save = false;
        }

        if (
            this.cropRect.top + this.cropRect.getScaledHeight() >
            this.cropObject.top + this.cropObject.getScaledHeight()
        ) {
            this.cropRect.set(this.cropRectState);
            this.cropRect.top =
                this.cropObject.top +
                this.cropObject.getScaledHeight() -
                this.cropRect.getScaledHeight();
            save = false;
        }

        if (save) {
            this.saveCropRectState();
        }
    };

    moving = (_opt) => {
        this.restrictCropRect();
        this.crop(this.cropObjectClone);
    };

    scaling = (_opt) => {
        this.restrictCropRect();
        this.crop(this.cropObjectClone);
    };

    modified = (_opt) => {
        this.restrictCropRect();
        this.crop(this.cropObjectClone);
    };

    crop = (target) => {
        const cropRect = this.cropRect;
        const cropObject = this.cropObject;

        cropRect.setCoords();
        cropObject.setCoords();

        const cleft = cropRect.left;
        const ctop = cropRect.top;
        const height = (cropRect.get('height') / cropObject.get('scaleY')) * cropRect.get('scaleY');
        const width = (cropRect.get('width') / cropObject.get('scaleX')) * cropRect.get('scaleX');

        const dleft = cleft - cropObject.left;
        const dtop = ctop - cropObject.top;

        target
            .set({
                cropX: dleft / cropObject.get('scaleX'),
                cropY: dtop / cropObject.get('scaleY'),
                height: height,
                width: width
            })
            .setCoords();

        target.set({
            left: cleft,
            top: ctop
        });
    };
}
