var Palette = require('./modules/palette.js');
var random = require('./modules/random.js');
var convert = require('./modules/convert.js');
var validate = require('./modules/validate.js');
var $ = require('jQuery');

(function(){
	// 	Cache Dom
	var $main = $("main");
	// 	Palettes
		$primary = $main.find("#primary"),
		$accent = $main.find("#accent"),
		$grayLight = $main.find("#gray-light"),
	//var $tone = $main.find("tone");
		$grayDark = $main.find("#gray-dark"),
	// 	Buttons
		$randomPalette = $("#random-palette"),
		$exampleToggle = $(".example-toggle"),
	// 	Example Page
		$example = $("#example-page"),
		$bgPrimary = $example.find(".bg-primary"),
		$bgAccent = $example.find(".bg-accent"),
		$bgGrayLight = $example.find(".bg-gray-light"),

		$colorAccent = $example.find(".color-accent"),
		$colorGrayDark = $example.find(".color-gray-dark"),
		//$color = $example.find(".bg-accent"),

		// Used to add important to CSS declarations
		imp = "!important";

	// Create palette
	var palette = new Palette("rgb(14, 72, 224)");

	// Set colors on init
	setColors();

	function setColors() {
		var primary = palette.primary + imp;
		console.log(primary)
		// Set palette Colors
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

		$bgPrimary.css("background-color", primary);
		$bgAccent.css("background", palette.primary + imp);
		$bgGrayLight.css("background", palette.grayLight + imp);

		$colorAccent.css("color", palette.accent + imp);
		$colorGrayDark.css("color", palette.grayDark + imp);

	}

	// randomPalette Bind events
	$randomPalette.click(function(){
		palette = new Palette(random.rgb());
		setColors();
	});

	// Show example site on click
	$exampleToggle.click(function(){
		$example.fadeToggle();
	});

})()
