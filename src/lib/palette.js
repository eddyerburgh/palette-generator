/*
const convert = require('./convert.js');
const validate = require('./validate.js');

module.exports = function (color) {
  if (validate.validateHex(color)) {
    this.hex = color;
    this.rgb = convert.hexToRgb(color);
  } else {
    this.rgb = color;
    this.hex = convert.rgbToHex(color);
  }

  this.primary = this.rgb;
  this.accent = convert.rgbToAccent(this.rgb);
  this.grayLight = convert.rgbToGray(this.rgb, 'light');
  this.grayDark = convert.rgbToGray(this.rgb, 'dark');

  this.primaryTone = convert.rgbToTone(this.primary, this.grayDark);
  this.accentTone = convert.rgbToTone(this.accent, this.grayDark);
  this.grayLightTone = convert.rgbToTone(this.grayLight, this.grayDark);
  this.grayDarkTone = convert.rgbToTone(this.grayDark, this.grayDark);

  this.primaryHex = convert.rgbToHex(this.primary);
  this.accentHex = convert.rgbToHex(this.accent);
  this.grayLightHex = convert.rgbToHex(this.grayLight);
  this.grayDarkHex = convert.rgbToHex(this.grayDark);
};
*/
