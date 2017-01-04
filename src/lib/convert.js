/* eslint-disable no-mixed-operators */
const validate = require('./validate.js');

function hue2rgb(p, q, t) {
  let tone = t;
  if (t < 0) tone += 1;
  if (t > 1) tone -= 1;

  if (t < 1 / 6) return p + (q - p) * 6 * tone;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - tone) * 6;
  return p;
}

/* Private function : converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   [Number]  h       The hue
 * @param   [Number]  s       The saturation
 * @param   [Number]  l       The lightness
 * @return  [Array]           The RGB representation
 */
function hslToRgb(h, s, l) {
  let r;
  let g;
  let b;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

/* Private function : Converts r,g and b values to HSL values in range 0-1
 * @param   [Number]  r       The red color value
 * @param   [Number]  g       The green color value
 * @param   [Number]  b       The blue color value
 * @return  [Array]           The HSL representation
 */
function rgbToHsl(red, green, blue) {
  const r = red / 255;
  const g = green / 255;
  const b = blue / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h;
  let s;
  const l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) { // eslint-disable-line default-case
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return [h, s, l];
}

/* Private function : convert rgb to array of each color value
 * @param [String] : rgb value
 * @return [Array] : array [orignal value, r, g, b]
 */
function rgbToArray(rgb) {
  const strippedRgb = rgb.replace(/^\s+|\s+$/g, '');
  const rgbArray = strippedRgb.replace(/[^\d,]/g, '').split(',');
  return rgbArray.map(value => parseInt(value, 10));
}

function rgbToHex(rgb) {
  if (!(validate.validateRgb(rgb))) {
    throw new Error('rgbToHex must be passed a valid RGB value');
  }

  const rgbArray = rgbToArray(rgb);

  return `#${[rgbArray[0], rgbArray[1], rgbArray[2]].map((x) => {
    const hex = x.toString(16);
    return hex.length === 1 ? `0${ hex}` : hex;
  }).join('')}`;
}

/* Public function : Converts RGB to hex
 * @param [String] rgb : rgb value
 * @return [String] : random rgb value
 */
function rgbToAccent(rgb) {
  if (!(validate.validateRgb(rgb))) {
    throw new Error('rgbToAccent must be passed a valid RGB value');
  }

  const rgbArray = rgbToArray(rgb);
    // Get HSL value as array
  const hsl = rgbToHsl(rgbArray[0], rgbArray[1], rgbArray[2]);
  let h = hsl[0] + 0.5;

  if (h > 1) { h -= 1; }
  const shiftedRgbArray = hslToRgb(h, hsl[1], hsl[2]);
  return `rgb(${shiftedRgbArray[0]}, ${shiftedRgbArray[1]}, ${shiftedRgbArray[2]})`;
}

/* Public function : Converts RGB to gray
 * @param [String] rgb : rgb value
 * @param [String] shade : dark outputs dark color
 * @return [String] : random rgb value
 */
function rgbToGray(rgb, shade) {
  if (!(validate.validateRgb(rgb))) {
    throw new Error('rgbToGray must be passed a valid RGB value');
  }

  const rgbArray = rgbToArray(rgb);
    // Get HSL value as array
  const hsl = rgbToHsl(rgbArray[1], rgbArray[2], rgbArray[3]);
  const h = hsl[0];
  const s = 0;
  const l = shade === 'dark' ? 0.1 : 0.85;
  const shiftedRgbArray = hslToRgb(h, s, l);
  return `rgb(${shiftedRgbArray[0]}, ${shiftedRgbArray[1]}, ${shiftedRgbArray[2]})`;
}

/* Public function : Returns black or white hex depending on rgb tone
 * @param [String] rgb : rgb value
 * @param [String] shade : light outputs light color
 * @return [String] : random rgb value
 */
function rgbToTone(rgb, gray) {
  if (!(validate.validateRgb(rgb))) {
    throw new Error('rgbToTone must be passed a valid RGB value');
  }

    // Split rgb
  const rgbArray = rgbToArray(rgb);

  let brightness;
  brightness = (rgbArray[1] * 299) + (rgbArray[2] * 587) + (rgbArray[3] * 114);
  brightness /= 255000;

    // values range from 0 to 1
    // anything greater than 0.5 should be bright enough for dark text
  if (brightness >= 0.5) {
    return gray;
  }

  return '#fff';
}

/* Public function : Converts hex to rgb value
 * @param [String] hex : hex value
 * @return [String] : rgb value
 */
function hexToRgb(hex) {
  const hexArray = hex.replace('#', '');
  return `rgb(${(hexArray)
        .match(new RegExp(`(.{${hexArray.length / 3}})`, 'g'))
        .map(l => parseInt(hexArray.length % 2 ? l + l : l, 16))
        .join(',')})`;
}


module.exports = {
  hexToRgb,
  rgbToAccent,
  rgbToGray,
  rgbToHex,
  rgbToTone,
};
