export default class ZoomHandler {
    constructor(handler) {
        this.handler = handler;
    }

    zoomToPoint(point, zoom) {
        const { minZoom, maxZoom } = this.handler.zoomLimit;

        let zoomRatio = zoom;

        if (zoom <= minZoom / 100) {
            zoomRatio = minZoom / 100;
        } else if (zoom >= maxZoom / 100) {
            zoomRatio = maxZoom / 100;
        }

        this.handler.canvas.zoomToPoint(point, zoomRatio);

        this.handler.guidelineHandler.viewportTransform = this.handler.canvas.viewportTransform;
        this.handler.guidelineHandler.zoom = this.handler.canvas.getZoom();

        if (this.handler.onZoom) {
            this.handler.onZoom(zoomRatio);
        }

        this.handler.canvas.requestRenderAll();
    }

    zoomToFit() {
        const drawArea = this.handler.canvas.getItemByName('drawing-area');

        if (!drawArea) {
            return;
        }

        let scaleX = this.handler.canvas.getWidth() / drawArea.width;
        const scaleY = this.handler.canvas.getHeight() / drawArea.height;

        if (drawArea.height >= drawArea.width) {
            scaleX = scaleY;
            if (this.handler.canvas.getWidth() < drawArea.width * scaleX) {
                scaleX = scaleX * (this.handler.canvas.getWidth() / (drawArea.width * scaleX));
            }
        } else {
            if (this.handler.canvas.getHeight() < drawArea.height * scaleX) {
                scaleX = scaleX * (this.handler.canvas.getHeight() / (drawArea.height * scaleX));
            }
        }

        const center = this.handler.canvas.getCenter();
        this.handler.canvas.setViewportTransform([1, 0, 0, 1, 0, 0]);
        this.zoomToPoint(new fabric.Point(center.left, center.top), scaleX);
    }

    zoomOneToOne() {
        const center = this.handler.canvas.getCenter();
        this.handler.canvas.setViewportTransform([1, 0, 0, 1, 0, 0]);
        this.zoomToPoint(new fabric.Point(center.left, center.top), 1);
    }

    zoomIn() {
        let zoomRatio = this.handler.canvas.getZoom();
        zoomRatio += 0.05;
        const center = this.handler.canvas.getCenter();
        this.zoomToPoint(new fabric.Point(center.left, center.top), zoomRatio);
    }

    zoomOut() {
        let zoomRatio = this.handler.canvas.getZoom();
        zoomRatio -= 0.05;
        const center = this.handler.canvas.getCenter();
        this.zoomToPoint(new fabric.Point(center.left, center.top), zoomRatio);
    }
}
