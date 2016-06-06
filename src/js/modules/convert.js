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
	function rgbToAccent( rgb ) {

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
		var h = hsl[0], s = hsl[1], l = hsl[2];
		l = shade === "dark" ? 0.1 : 0.935;
		if ( shade === "dark") { 
			s -= s / 1.5; 
		};
		rgb = hslToRgb(h, s, l);
		return "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
	}

	/* Public function : Returns black or white hex depending on rgb tone
	 * @param [String] rgb : rgb value	 
	 * @param [String] shade : light outputs light color
	 * @return [String] : random rgb value
	 */
	 function rgbToTone( rgb, gray ) {

		if( !( validate.rgb( rgb )) ) {
			return false;
		}

	 	// Split rgb 
		rgb = rgbToArray(rgb);

		var brightness;
		brightness = ( rgb[1] * 299 ) + ( rgb[2] * 587 ) + ( rgb[3] * 114 );
		brightness = brightness / 255000;

		// values range from 0 to 1
		// anything greater than 0.5 should be bright enough for dark text
		if ( brightness >= 0.5 ) {
		return gray;
		} else {
		return "#fff";
		}

	};

	/* Public function : Converts hex to rgb value
	 * @param [String] hex : hex value	 
	 * @return [String] : rgb value
	 */
	function hexToRgb(hex) {
    return 'rgb(' + (hex = hex.replace('#', ''))
    		.match(new RegExp('(.{' + hex.length/3 + '})', 'g'))
    		.map(function(l) { 
    			return parseInt(hex.length%2 ? l+l : l, 16); 
    		})
    		.join(',') + ')';
	};

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
		hexToRgb: hexToRgb,
		rgbToAccent: rgbToAccent,		
		rgbToGray: rgbToGray,
		rgbToHex: rgbToHex,
		rgbToTone: rgbToTone

	}

})();