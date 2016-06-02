var convert = require('./convert.js');

module.exports = function(rgb) {

	this.rgb = rgb;
	this.hex = convert.rgbToHex(rgb);

	this.primary = this.rgb;
	this.accent = convert.rgbToAccent(rgb);
	this.grayLight = convert.rgbToGray(rgb, "light");
	this.grayDark = convert.rgbToGray(rgb, "dark");

	this.primaryColor = convert.rgbToTone(this.primary);
	this.accentColor = convert.rgbToTone(this.accent);
	this.grayLightColor = convert.rgbToTone(this.grayLight);
	this.grayDarkColor = convert.rgbToTone(this.grayDark);

};