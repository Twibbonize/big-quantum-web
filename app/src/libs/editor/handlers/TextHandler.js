export default class TextHandler {
    constructor(handler) {
        this.handler = handler;
    }

    applyTextEffectByType = (type, enabled, option, target = undefined) => {
        const activeObject = target || this.handler.canvas.getActiveObject();

        if (type === 'shadow') {
            if (enabled) {
                const { distance, angle, blur, transparency, color } = option;

                const offsetY =
                    activeObject.top -
                    (activeObject.top + distance * Math.sin((angle * Math.PI) / 180));

                const offsetX =
                    activeObject.left -
                    (activeObject.left + distance * Math.cos((angle * Math.PI) / 180));

                const shadowColor = new fabric.Color(color);
                shadowColor.setAlpha(transparency / 100);

                const shadow = new fabric.Shadow({
                    color: shadowColor.toRgba(),
                    blur,
                    offsetX,
                    offsetY
                });

                const shadowEffect = {
                    enabled,
                    color,
                    blur,
                    angle,
                    distance,
                    transparency
                };

                this.handler.setObject({
                    shadow,
                    shadowEffect
                });

                return shadowEffect;
            } else {
                const { shadowEffect } = activeObject;
                this.handler.setObject({
                    shadow: null,
                    shadowEffect: {
                        ...shadowEffect,
                        enabled: false
                    }
                });

                return {
                    ...shadowEffect,
                    enabled: false
                };
            }
        }
    };

    getShadowAngleDistance = (target) => {
        const activeObject = target || this.canvas.getActiveObject();

        if (!activeObject) {
            return;
        }

        if (!activeObject.shadow) {
            return;
        }

        const shadow = activeObject.shadow;
        const deltaX = Math.pow(activeObject.left + shadow.offsetX - activeObject.left, 2);
        const deltaY = Math.pow(activeObject.top + shadow.offsetY - activeObject.top, 2);

        //pythagras theorem for distance
        const distance = Math.sqrt(deltaY + deltaX);

        //atan2 for angle
        const radians = Math.atan2(
            activeObj.top + shadow.offsetY - activeObj.top,
            activeObj.left + shadow.offsetX - activeObj.left
        ); // Don't use squared delta

        //radians into degrees
        const angle = radians * (180 / Math.PI);

        return {
            distance: parseInt(distance),
            angle: parseInt(angle + 180)
        };
    };
}
