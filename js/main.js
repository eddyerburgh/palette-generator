(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Palette = require('./modules/palette.js');
var random = require('./modules/random.js');
var convert = require('./modules/convert.js');
var validate = require('./modules/validate.js');

console.log(Palette);
var rgb = random.rgb();
var hex = convert.rgbToHex(rgb);
var compl = convert.rgbToComplimentary(rgb);
var dgray = convert.rgbToGray(rgb, "dark");
var lgray = convert.rgbToGray(rgb, "light");
var pal = new Palette(hex, compl, gray);

var prim = document.getElementById("primary");
prim.style.background = rgb;

var complim = document.getElementById("complimentary");
complim.style.background = compl;

var grayB = document.getElementById("gray");
grayB.style.background = lgray;

var graydB = document.getElementById("gray-dark");
graydB.style.background = dgray;
},{"./modules/convert.js":2,"./modules/palette.js":3,"./modules/random.js":4,"./modules/validate.js":5}],2:[function(require,module,exports){
var validate = require('./validate.js');

module.exports = (function() {

	/* Public function : Converts RGB to hex
	 * @return [String] : random rgb value
	 */
	function rgbToHex(rgb) {
		if( !( validate.rgb( rgb )) ) {
			return false;
		}

		rgb = rgbToArray(rgb);
	
		return ( rgb && rgb.length === 4 ) ? "#" +
		( "0" + parseInt( rgb[ 1 ], 10 ).toString( 16 )).slice( -2 ) +
		( "0" + parseInt( rgb[ 2 ], 10 ).toString( 16 )).slice( -2 ) +
		( "0" + parseInt( rgb[ 3 ], 10 ).toString( 16 )).slice( -2 ) : '';
	
	}

	/* Public function : Converts RGB to hex
	 * @param [String] rgb : rgb value	
	 * @return [String] : random rgb value
	 */
	function rgbToComplimentary( rgb ) {

		if( !( validate.rgb( rgb )) ) {
			return false;
		}

		rgb = rgbToArray( rgb );
		// Get HSL value as array
		var hsl = rgbToHsl( rgb[1], rgb[2], rgb[3] );
		var h = hsl[0];
		h = h + 0.5;

		if ( h > 1 ) { h -= 1 };
		rgb = hslToRgb(h, hsl[1], hsl[2]);
		return "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
	}

	/* Public function : Converts RGB to gray
	 * @param [String] rgb : rgb value	 
	 * @param [String] shade : light outputs light color
	 * @return [String] : random rgb value
	 */
	function rgbToGray( rgb, shade ) {
		
		if( !( validate.rgb( rgb )) ) {
			return false;
		}

		rgb = rgbToArray( rgb );
		// Get HSL value as array
		var hsl = rgbToHsl( rgb[1], rgb[2], rgb[3] );
		var l = hsl[2];
		l = shade === "light" ? 0.975 : 0.075;
		rgb = hslToRgb(hsl[0], hsl[1], l);
		return "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
	}

	/* Private function : convert rgb to array with each value
	 * @param [String] : rgb value
	 * @return [Array] : array [orignal value, r, g, b]
	 */	
	function rgbToArray(rgb){
		return rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
	}

	/* Private function : Converts r,g and b values to HSL
	 * @param   [Number]  r       The red color value
	 * @param   [Number]  g       The green color value
	 * @param   [Number]  b       The blue color value
	 * @return  [Array]           The HSL representation
	 */
	function rgbToHsl(r, g, b){
	    r /= 255, g /= 255, b /= 255;
	    var max = Math.max(r, g, b), min = Math.min(r, g, b);
	    var h, s, l = (max + min) / 2;

	    if(max == min){
	        h = s = 0; // achromatic
	    }else{
	        var d = max - min;
	        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
	        switch(max){
	            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
	            case g: h = (b - r) / d + 2; break;
	            case b: h = (r - g) / d + 4; break;
	        }
	        h /= 6;
	    }

	    return [h, s, l];
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
	function hslToRgb(h, s, l){
	    var r, g, b;

	    if(s == 0){
	        r = g = b = l; // achromatic
	    }else{
	        var hue2rgb = function hue2rgb(p, q, t){
	            if(t < 0) t += 1;
	            if(t > 1) t -= 1;
	            if(t < 1/6) return p + (q - p) * 6 * t;
	            if(t < 1/2) return q;
	            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
	            return p;
	        }

	        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
	        var p = 2 * l - q;
	        r = hue2rgb(p, q, h + 1/3);
	        g = hue2rgb(p, q, h);
	        b = hue2rgb(p, q, h - 1/3);
	    }

	    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
	}

	return {
		rgbToGray: rgbToGray,
		rgbToHex : rgbToHex,
		rgbToComplimentary: rgbToComplimentary
	}

})();
},{"./validate.js":5}],3:[function(require,module,exports){
module.exports = function(hex, compl, gray) {

	this.hex = hex;
	this.compl = compl;
	this.gray = gray;
};
},{}],4:[function(require,module,exports){
module.exports = (function() {

	/* Private function : returns random number between min and max
	 * @params [Number] : min, minimum value; [Number] : max, maximum value
	 * @return [Number] : random number between min and max
	 */
	function rand(min, max) {
	  return Math.floor(Math.random() * (max - min)) + min;
	}

	/* Public function : Returns random RGB value
	 * @return [String] : random rgb value
	 */
	function randRgb() {
		var r = rand(0, 255);
		var g = rand(0, 255);
		var b = rand(0, 255);

		return "rgb(" + r + "," + g + "," + b + ")"
	}	

	return {
		rgb : randRgb
	}

})();
},{}],5:[function(require,module,exports){
module.exports = (function() {

	/* Public function : test whether string is valid hex
	 * @params [String] : hex value to test
	 * @return [Boolean] : true if is valid hex
	 */
	function validateHex(hex) {

	var hexReg = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;

	if ( hexReg.test( hex ) ) {
	      return true;
		} else {
	    	return false;
	    }
	}

	/* Public function : test whether string is valid rgb
	 * @params [String] : rgb value to test
	 * @return [Boolean] : true if is valid rgb
	 */
	function validateRgb(rgb) {

	var rgbReg = /([R][G][B][A]?[(]\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])(\s*,\s*((0\.[0-9]{1})|(1\.0)|(1)))?[)])/i;
	
	if ( rgbReg.test( rgb ) ) {
	      return true;
	    } else {
	    	return false;
	    }
	}

	return {
		rgb: validateRgb,
		hex: validateHex
	}
	
})();
},{}]},{},[1]);
