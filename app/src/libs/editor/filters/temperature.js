import { clamp } from '@/libs/editor/utils';

export default {
    type: 'Temperature',
    temperature: 0,
    mainParameter: 'temperature',
    fragmentSource: `
        precision highp float;
        uniform sampler2D uTexture;
        varying vec2 vTexCoord;
        uniform float uTemperature;
  
        void main () {
          vec4 color = texture2D(uTexture, vTexCoord);
          color.r += uTemperature;
          color.b -= uTemperature;
  
          gl_FragColor = color;
        }
      `,
    applyTo2d: function (options) {
        if (this.temperature === 0) {
            return;
        }

        var imageData = options.imageData,
            data = imageData.data,
            i,
            len = data.length,
            temperature = Math.round(this.temperature * 255);

        for (i = 0; i < len; i += 4) {
            data[i] = clamp(data[i] + temperature);
            data[i + 1] = clamp(data[i + 1]);
            data[i + 2] = clamp(data[i + 2] - temperature);
        }
    },
    getUniformLocations: function (gl, program) {
        return {
            uTemperature: gl.getUniformLocation(program, 'uTemperature')
        };
    },
    sendUniformData: function (gl, uniformLocations) {
        gl.uniform1f(uniformLocations.uTemperature, this.temperature);
    }
};
