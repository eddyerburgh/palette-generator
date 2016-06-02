(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var validate = require('./modules/validate.js');

console.log(validate.rgb("rgb(0,0,0)"));

validate.rgb("rgb(0,00,0)")
},{"./modules/validate.js":2}],2:[function(require,module,exports){
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