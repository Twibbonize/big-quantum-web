import { parseGIF, decompressFrames } from 'gifuct-js';

export function euclideanDistance(point1, point2) {
    return Math.sqrt(
        Math.abs(Math.pow(point1.x - point2.x, 2)) + Math.abs(Math.pow(point1.y - point2.y, 2))
    );
}

export function hexToRGB(hexColor) {
    const hex = hexColor.replace('#', '');
    var bigint = parseInt(hex, 16),
        r = (bigint >> 16) & 255,
        g = (bigint >> 8) & 255,
        b = bigint & 255;
    return [r, g, b];
}

export function luminanceByColor(pixel) {
    const lumR = 0.2125;
    const lumG = 0.7154;
    const lumB = 0.0721;

    const r = pixel[0];
    const g = pixel[1];
    const b = pixel[2];

    return (lumR * r + lumG * g + lumB * b) / 255;
}

export function clamp(x, minValue = 0, maxValue = 255) {
    return Math.max(Math.min(x, maxValue), minValue);
}

export function angle2rect(angle, sx, sy) {
    while (angle < 0) angle += 360;
    angle %= 360;

    let a = sy,
        b = a + sx,
        c = b + sy, // 3 first corners
        p = (sx + sy) * 2, // perimeter
        rp = p * 0.00277, // ratio between perimeter & 360
        pp = Math.round((angle * rp + (sy >> 1)) % p); // angle position on perimeter

    if (pp <= a)
        return {
            x: 0,
            y: sy - pp
        };
    if (pp <= b)
        return {
            y: 0,
            x: pp - a
        };
    if (pp <= c)
        return {
            x: sx,
            y: pp - b
        };
    return {
        y: sy,
        x: sx - (pp - c)
    };
}

export function xy2angle(x, y, sx, sy) {
    (x -= sx >> 1), (y -= sy >> 1);
    let a = Math.round(Math.atan(Math.abs(x) / Math.abs(y)) * (180 / Math.PI));
    if (x >= 0 && y <= 0) return a + 90;
    if (x >= 0 && y >= 0) return 270 - a;
    if (x <= 0 && y >= 0) return a + 270;
    return 90 - a;
}

export function treatAngle(angle) {
    return angle - (angle % 15);
}

export function angleBasedRotateIcon(angle) {
    const relativeAngle = angle - 90;
    const pos = {
        '-90': '9.25 5.25',
        '-75': '9.972 3.863',
        '-60': '10.84 1.756',
        '-45': '11.972 -1.716',
        '-30': '18.83 0.17',
        '-15': '28.49 -9.49',
        15: '-7.985 46.77',
        30: '-0.415 27.57',
        45: '2.32 21.713',
        60: '3.916 18.243',
        75: '4.762 16.135',
        90: '5.25 14.75',
        105: '5.84 13.617',
        120: '6.084 12.666',
        135: '6.317 12.01',
        150: '6.754 11.325',
        165: '7.06 10.653',
        180: '7.25 10',
        195: '7.597 9.43',
        210: '7.825 8.672',
        225: '7.974 7.99',
        240: '8.383 7.332',
        255: '8.83 6.441'
    };

    const defaultPos = '7.25 10';
    const transform =
        relativeAngle === 0
            ? 'translate(9.5 3.5)'
            : `rotate(${relativeAngle} ${pos[relativeAngle] || defaultPos})`;

    const imgCursor = encodeURIComponent(`
      <svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24'>
        <defs>
          <filter id='a' width='266.7%' height='156.2%' x='-75%' y='-21.9%' filterUnits='objectBoundingBox'>
            <feOffset dy='1' in='SourceAlpha' result='shadowOffsetOuter1'/>
            <feGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='1'/>
            <feColorMatrix in='shadowBlurOuter1' result='shadowMatrixOuter1' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0'/>
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1'/>
              <feMergeNode in='SourceGraphic'/>
            </feMerge>
          </filter>
          <path id='b' d='M1.67 12.67a7.7 7.7 0 0 0 0-9.34L0 5V0h5L3.24 1.76a9.9 9.9 0 0 1 0 12.48L5 16H0v-5l1.67 1.67z'/>
        </defs>
        <g fill='none' fill-rule='evenodd'><path d='M0 24V0h24v24z'/>
          <g fill-rule='nonzero' filter='url(#a)' transform='${transform}'>
            <use fill='#000' fill-rule='evenodd' xlink:href='#b'/>
            <path stroke='#FFF' d='M1.6 11.9a7.21 7.21 0 0 0 0-7.8L-.5 6.2V-.5h6.7L3.9 1.8a10.4 10.4 0 0 1 0 12.4l2.3 2.3H-.5V9.8l2.1 2.1z'/>
          </g>
        </g>
      </svg>`);

    return `url("data:image/svg+xml;charset=utf-8,${imgCursor}") 12 12, crosshair`;
}

export const gifToSprite = async (gif, maxWidth, maxHeight, maxDuration) => {
    let arrayBuffer;
    let error;
    let frames;

    // if the gif is an input file, get the arrayBuffer with FileReader
    if (gif.type) {
        const reader = new FileReader();
        try {
            arrayBuffer = await new Promise((resolve, reject) => {
                reader.onload = () => resolve(reader.result);
                reader.onerror = () => reject(reader.error);
                reader.readAsArrayBuffer(gif);
            });
        } catch (err) {
            error = err;
        }
    }
    // else the gif is a URL or a dataUrl, fetch the arrayBuffer
    else {
        try {
            arrayBuffer = await fetch(gif).then((resp) => resp.arrayBuffer());
        } catch (err) {
            error = err;
        }
    }

    // Parse and decompress the gif arrayBuffer to frames with the "gifuct-js" library
    if (!error) frames = decompressFrames(parseGIF(arrayBuffer), true);
    if (!error && (!frames || !frames.length)) error = 'No_frame_error';
    if (error) {
        console.error(error);
        return { error };
    }

    // Create the needed canvass
    const dataCanvas = document.createElement('canvas');
    const dataCtx = dataCanvas.getContext('2d');
    const frameCanvas = document.createElement('canvas');
    const frameCtx = frameCanvas.getContext('2d');
    const spriteCanvas = document.createElement('canvas');
    const spriteCtx = spriteCanvas.getContext('2d');

    // Get the frames dimensions and delay
    let [width, height, delay] = [
        frames[0].dims.width,
        frames[0].dims.height,
        frames.reduce((acc, cur) => (acc = !acc ? cur.delay : acc), null)
    ];

    // Set the Max duration of the gif if any
    // FIXME handle delay for each frame
    const duration = frames.length * delay;
    maxDuration = maxDuration || duration;
    if (duration > maxDuration) frames.splice(Math.ceil(maxDuration / delay));

    // Set the scale ratio if any
    maxWidth = maxWidth || width;
    maxHeight = maxHeight || height;
    const scale = Math.min(maxWidth / width, maxHeight / height);
    width = width * scale;
    height = height * scale;

    //Set the frame and sprite canvass dimensions
    frameCanvas.width = width;
    frameCanvas.height = height;
    spriteCanvas.width = width * frames.length;
    spriteCanvas.height = height;

    frames.forEach((frame, i) => {
        // Get the frame imageData from the "frame.patch"
        const frameImageData = dataCtx.createImageData(frame.dims.width, frame.dims.height);
        frameImageData.data.set(frame.patch);
        dataCanvas.width = frame.dims.width;
        dataCanvas.height = frame.dims.height;
        dataCtx.putImageData(frameImageData, 0, 0);

        // Draw a frame from the imageData
        if (frame.disposalType === 2) frameCtx.clearRect(0, 0, width, height);
        frameCtx.drawImage(
            dataCanvas,
            frame.dims.left * scale,
            frame.dims.top * scale,
            frame.dims.width * scale,
            frame.dims.height * scale
        );

        // Add the frame to the sprite sheet
        spriteCtx.drawImage(frameCanvas, width * i, 0);
    });

    // Get the sprite sheet dataUrl
    const dataUrl = spriteCanvas.toDataURL();

    // Clean the dom, dispose of the unused canvass
    dataCanvas.remove();
    frameCanvas.remove();
    spriteCanvas.remove();

    return {
        dataUrl,
        frameWidth: width,
        framesLength: frames.length,
        delay
    };
};
