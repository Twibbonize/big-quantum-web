import { clamp, luminanceByColor } from '@/libs/editor/utils';

export default {
    type: 'Highlight',
    highlight: 0,
    mainParameter: 'highlight',
    fragmentSource: `
        precision highp float;
        uniform sampler2D uTexture;
        varying vec2 vTexCoord;
        uniform float uHighlight;
  
        const mediump vec3 luminanceWeighting = vec3(0.2125, 0.7154, 0.0721);
  
        void main() {
            lowp vec4 source = texture2D(uTexture, vTexCoord);
            mediump float luminance = dot(source.rgb, luminanceWeighting);
        
            if (luminance >= 0.5) {
            float h = uHighlight*0.05*(pow(8.0, 1.0 - luminance) - 1.0);
            source.r+=h;
            source.g+=h;
            source.b+=h;
            }
  
            gl_FragColor = source;
        }
    `,
    applyTo2d: function (options) {
        if (this.highlight === 0) {
            return;
        }

        let imageData = options.imageData,
            data = imageData.data,
            i,
            len = data.length,
            highlight = Math.round(this.highlight * 255);

        for (i = 0; i < len; i += 4) {
            const luminance = luminanceByColor([data[i], data[i + 1], data[i + 2]]);

            if (luminance >= 0.5) {
                h = highlight * 0.05 * (Math.pow(8.0, luminance) - 1.0);
                data[i] = clamp(data[i] + h);
                data[i + 1] = clamp(data[i + 1] + h);
                data[i + 2] = clamp(data[i + 2] + h);
            }
        }
    },
    getUniformLocations: function (gl, program) {
        return {
            uHighlight: gl.getUniformLocation(program, 'uHighlight')
        };
    },
    sendUniformData: function (gl, uniformLocations) {
        gl.uniform1f(uniformLocations.uHighlight, this.highlight);
    }
};
