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