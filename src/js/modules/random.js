var random = (function() {

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
		var r = rand(0, 250);
		var g = rand(0, 250);
		var b = rand(0, 250);

		return "rgb(" + r + "," + g + "," + b + ")"
	}	

	return {
		rgb : randRgb
	}

})();

module.exports = random;    
