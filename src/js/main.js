var Palette = require('./modules/palette.js');
var random = require('./modules/random.js');
var convert = require('./modules/convert.js');
var validate = require('./modules/validate.js');
var $ = require('jQuery');

(function(){
	// Cache Dom
	var $main = $("main");
	// Palettes
	var $primary = $main.find("#primary");
	var $accent = $main.find("#accent");
	var $grayLight = $main.find("#gray-light");
	//var $tone = $main.find("tone");
	var $grayDark = $main.find("#gray-dark");
	// Buttons
	var $randomPalette = $("#random-palette");

	// Create palette
	var palette = new Palette(random.rgb());

	// Set colors on init
	setColors();

	function setColors() {
		$primary.css("background", palette.primary);
		$accent.css("background", palette.accent);
		$grayLight.css("background", palette.grayLight);
		//$tone.css("background", palette.)		
		$grayDark.css("background", palette.grayDark);

		$primary.css("color", palette.primaryColor);
		$accent.css("color", palette.accentColor);
		$grayLight.css("color", palette.grayLightColor);
		//$tone.css("background", palette.)		
		$grayDark.css("color", palette.grayDarkColor);													
	}

	// randomPalette Bind events
	$randomPalette.click(function(){
		palette = new Palette(random.rgb());
		setColors();
	});

})()
