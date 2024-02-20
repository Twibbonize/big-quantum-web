import { clamp } from '@/libs/editor/utils';

export default {
    type: 'Tint',
    tint: 0,
    mainParameter: 'tint',
    fragmentSource: `
        precision highp float;
        uniform sampler2D uTexture;
        varying vec2 vTexCoord;
        uniform float uTint;
  
        void main () {
          vec4 color = texture2D(uTexture, vTexCoord);
          color.g += uTint;
  
          gl_FragColor = color;
        }
      `,
    applyTo2d: function (options) {
        if (this.tint === 0) {
            return;
        }

        var imageData = options.imageData,
            data = imageData.data,
            i,
            len = data.length,
            tint = Math.round(this.tint * 255);

        for (i = 0; i < len; i += 4) {
            data[i + 1] = clamp(data[i + 1] + tint);
        }
    },
    getUniformLocations: function (gl, program) {
        return {
            uTint: gl.getUniformLocation(program, 'uTint')
        };
    },
    sendUniformData: function (gl, uniformLocations) {
        gl.uniform1f(uniformLocations.uTint, this.tint);
    }
};
