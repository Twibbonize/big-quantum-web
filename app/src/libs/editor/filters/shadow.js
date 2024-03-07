import { clamp, luminanceByColor } from '@/libs/editor/utils';

export default {
    type: 'Shadow',
    shadow: 0,
    mainParameter: 'shadow',
    fragmentSource: `
        precision highp float;
        uniform sampler2D uTexture;
        varying vec2 vTexCoord;
        uniform float uShadow;
  
        const mediump vec3 luminanceWeighting = vec3(0.2125, 0.7154, 0.0721);
  
        void main() {
            lowp vec4 source = texture2D(uTexture, vTexCoord);
            mediump float luminance = dot(source.rgb, luminanceWeighting);
        
            if (luminance <= 0.4) {
            float s = uShadow*0.05*(pow(8.0, 1.0 - luminance) - 1.0);
            source.r+=s;
            source.g+=s;
            source.b+=s;
            }
  
            gl_FragColor = source;
        }
    `,
    applyTo2d: function (options) {
        if (this.shadow === 0) {
            return;
        }

        var imageData = options.imageData,
            data = imageData.data,
            i,
            len = data.length,
            shadow = Math.round(this.shadow * 255);

        for (i = 0; i < len; i += 4) {
            const luminance = luminanceByColor([data[i], data[i + 1], data[i + 2]]);

            if (luminance <= 0.4) {
                s = shadow * 0.05 * (Math.pow(8.0, 1.0 - luminance) - 1.0);
                data[i] = clamp(data[i] + s);
                data[i + 1] = clamp(data[i + 1] + s);
                data[i + 2] = clamp(data[i + 2] + s);
            }

            if (i === 1600) {
                console.log(luminance, shadow);
            }
        }
    },
    getUniformLocations: function (gl, program) {
        return {
            uShadow: gl.getUniformLocation(program, 'uShadow')
        };
    },
    sendUniformData: function (gl, uniformLocations) {
        gl.uniform1f(uniformLocations.uShadow, this.shadow);
    }
};
