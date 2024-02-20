import { euclideanDistance, clamp } from '@/libs/editor/utils';

export default {
    type: 'Vignette',
    radius: 0,
    smoothness: 0.5,
    mainParameter: 'radius',
    /**
     * Fragment source for the redify program
     */
    fragmentSource:
        'precision highp float;\n' +
        'uniform sampler2D uTexture;\n' +
        'uniform float uRadius;' +
        'uniform float uSmoothness;' +
        'varying vec2 vTexCoord;\n' +
        'float vignette(vec2 uv, float radius, float smoothness) {' +
        'float diff = radius - distance(uv, vec2(0.5, 0.5));' +
        'return smoothstep(-smoothness, smoothness, diff);' +
        '}' +
        'void main() {\n' +
        'vec2 p = -1.0 + 2.0 * vTexCoord;' +
        'float r = 1.0 - uRadius;' +
        'float vignetteValue = vignette(vTexCoord, r, uSmoothness);' +
        'vec4 color = vec4(texture2D(uTexture, vTexCoord).rgb * vignetteValue,1.0);' +
        //'vec4 color = vec4(texture2D(uTexture,vTexCoord).rgb*r,1.0);\n' +

        //'color.g = 1.0;\n' +
        //'color.b = 0.0;\n' +
        'gl_FragColor = color;\n' +
        '}',

    applyTo2d: function (options) {
        if (this.radius === 0) {
            return;
        }

        let imageData = options.imageData,
            data = imageData.data,
            i,
            len = data.length;

        const w = options.sourceWidth;
        const h = options.sourceHeight;

        const centerPoint = {
            x: Math.floor(w / 2),
            y: Math.floor(h / 2)
        };
        const furthestDistanceFromCentre = euclideanDistance(
            {
                x: 0,
                y: 0
            },
            centerPoint
        );

        const maximumRadius = furthestDistanceFromCentre / 1.6;
        const radius = (this.radius / 100) * maximumRadius;
        const brightnessDecreaseMax = (this.radius / 100) * 125;

        for (let i = 0; i < len; i += 4) {
            const x = (i / 4) % w,
                y = Math.floor((i / 4 - x) / h);

            const currentPoint = {
                x: x,
                y: y
            };
            const distance = Math.floor(
                furthestDistanceFromCentre - euclideanDistance(currentPoint, centerPoint)
            );

            const brightnessDecrease = Math.abs((1 - distance / radius) * brightnessDecreaseMax);

            if (distance < radius) {
                data[i] = clamp(data[i] - brightnessDecrease);
                data[i + 1] = clamp(data[i + 1] - brightnessDecrease);
                data[i + 2] = clamp(data[i + 2] - brightnessDecrease);
            }
        }
    },
    getUniformLocations: function (gl, program) {
        return {
            uRadius: gl.getUniformLocation(program, 'uRadius'),
            uSmoothness: gl.getUniformLocation(program, 'uSmoothness')
        };
    },
    sendUniformData: function (gl, uniformLocations) {
        gl.uniform1f(uniformLocations.uRadius, this.radius);
        gl.uniform1f(uniformLocations.uSmoothness, this.smoothness);
    }
};
