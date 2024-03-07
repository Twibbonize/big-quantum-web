import { hexToRGB } from '../utils';
const FILTER_TYPES = [
    'duotone',
    'brightness',
    'contrast',
    'highlight',
    'shadow',
    'saturation',
    'vibrance',
    'temperature',
    'tint',
    'vignette',
    'noise',
    'blur'
];

export default class ImageHandler {
    constructor(handler) {
        this.handler = handler;
    }

    resetFilters = (imageObj = undefined) => {
        const obj = imageObj || this.handler.canvas.getActiveObject();

        if (obj.originalSrc) {
            const { originalSrc } = obj;
            const resizedWidth = obj.getScaledWidth();
            const resizedHeight = obj.getScaledHeight();
            const noColorFilters = obj.filters.filter((filter) => filter.type === 'Resize');

            imageObj.setSrc(originalSrc, (modifyObj) => {
                this.handler.setObject(
                    {
                        preset: null,
                        filters: noColorFilters,
                        originalSrc: null
                    },
                    modifyObj
                );

                imageObj.scaleToWidth(resizedWidth);
                imageObj.scaleToHeight(resizedHeight);
                modifyObj.applyFilters();
                this.handler.canvas.renderAll();
            });

            return;
        }

        this.handler.setObject(
            {
                preset: null,
                filters: []
            },
            obj
        );
        obj.applyFilters();
        this.handler.canvas.renderAll();
        return;
    };

    createColorMatrix = (shadowColor, highlightColor) => {
        const color1 = hexToRGB(highlightColor);
        const color2 = hexToRGB(shadowColor);

        // normalize value
        const c1 = {};
        c1.red = color1[0] / 256;
        c1.green = color1[1] / 256;
        c1.blue = color1[2] / 256;

        // normalize value
        const c2 = {};
        c2.red = color2[0] / 256;
        c2.green = color2[1] / 256;
        c2.blue = color2[2] / 256;

        // create duotone matrix
        let colorMatrix = [];

        colorMatrix = colorMatrix.concat([c1.red - c2.red, 0, 0, 0, c2.red]);
        colorMatrix = colorMatrix.concat([c1.green - c2.green, 0, 0, 0, c2.green]);
        colorMatrix = colorMatrix.concat([c1.blue - c2.blue, 0, 0, 0, c2.blue]);
        colorMatrix = colorMatrix.concat([0, 0, 0, 1, 0]);

        return colorMatrix;
    };

    createFilter = (filter) => {
        const { type: filterType, ...other } = filter;
        const type = filterType.toLowerCase();

        if (type === 'brightness') {
            return new fabric.Image.filters.Brightness({
                brightness: other.brightness
            });
        } else if (type === 'contrast') {
            return new fabric.Image.filters.Contrast({
                contrast: other.contrast
            });
        } else if (type === 'highlight') {
            return new fabric.Image.filters.Highlight({
                highlight: other.highlight
            });
        } else if (type === 'shadow') {
            return new fabric.Image.filters.Shadow({
                shadow: other.shadow
            });
        } else if (type === 'saturation') {
            return new fabric.Image.filters.Saturation(other);
        } else if (type === 'vibrance') {
            return new fabric.Image.filters.Vibrance({
                vibrance: other.vibrance
            });
        } else if (type === 'temperature') {
            return new fabric.Image.filters.Temperature({
                temperature: other.temperature
            });
        } else if (type === 'tint') {
            return new fabric.Image.filters.Tint({
                tint: other.tint
            });
        } else if (type === 'vignette') {
            return new fabric.Image.filters.Vignette({
                radius: other.radius
            });
        } else if (type === 'noise') {
            return new fabric.Image.filters.Noise({
                noise: other.noise
            });
        } else if (type === 'blur') {
            return new fabric.Image.filters.Blur({
                blur: other.blur
            });
        } else if (type === 'duotone') {
            let m;
            if (other.shadowColor && other.highlightColor) {
                m = this.createColorMatrix(other.shadowColor, other.highlightColor);
            } else {
                m = fabric.Image.filters.Duotone.prototype.matrix;
            }
            return new fabric.Image.filters.Duotone({
                matrix: m,
                ...other
            });
        }
    };

    createFilters = (filters) => {
        const createdFilters = filters.reduce((prev, filter) => {
            let type = filter.type;
            const findIndex = FILTER_TYPES.findIndex(
                (filterType) => type.toLowerCase() === filterType
            );
            if (findIndex > -1) {
                prev[findIndex] = this.createFilter({
                    ...filter,
                    type
                });
            }
            return prev;
        }, []);
        return createdFilters;
    };

    applyFilterByType = async (type, apply = true, value = {}, imageObj = undefined) => {
        const obj = imageObj || this.handler.canvas.getActiveObject();
        const findIndex = FILTER_TYPES.findIndex((ft) => ft === type);
        if (obj.filters && findIndex > -1) {
            if (apply) {
                obj.filters[findIndex] = this.createFilter({
                    type,
                    ...value
                });
                obj.applyFilters();
            } else {
                if (type === 'duotone') {
                    obj.filters[findIndex].matrix = [
                        1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0
                    ];
                } else {
                    obj.filters[findIndex] = false;
                }

                obj.applyFilters();
            }
            this.handler.canvas.renderAll();
        }
    };
}
