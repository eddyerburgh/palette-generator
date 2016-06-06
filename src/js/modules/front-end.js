var Palette = require('./palette.js');
var random = require('./random.js');
var convert = require('./convert.js');
var validate = require('./validate.js');
var $ = require('jQuery');

(function(){
	// 	Cache Dom
	var $main = $("main");
	// 	Palettes
		$primary = $main.find("#primary"),
		$accent = $main.find("#accent"),
		$grayLight = $main.find("#gray-light"),
		$grayDark = $main.find("#gray-dark"),
		$primaryHex = $main.find("#primary__hex"),
		$accentHex = $main.find("#accent__hex"),
		$grayLightHex = $main.find("#gray-light__hex"),
		$grayDarkHex = $main.find("#gray-dark__hex"),		
	// 	Buttons
		$randomPalette = $(".random-palette"),
		$exampleToggle = $(".example-toggle"),
	// 	Example Page
		$example = $("#example-page"),
	//	Background classes
		$bgPrimary = $example.find(".background-primary"),
		$bgAccent = $example.find(".background-accent"),
	//	Color classes
		$colorAccent = $example.find(".color-accent"),
		$colorGrayDark = $example.find(".color-gray-dark"),
	//	Color Tone classes
		$colorPrimaryTone = $example.find(".color-primary-tone"),
		$colorAccentTone = $example.find(".color-accent-tone"),
	//	Button classes
		$buttonAccent = $example.find(".button-accent");
		//$color = $example.find(".bg-accent"),


	// Create palette
	var palette = new Palette("rgb(14, 72, 224)");

	// Set colors on init
	setColors();
	setText();

	function setColors() {
		// Set palette CSS
		$primary.css("background", palette.primary);
		$accent.css("background", palette.accent);
		$grayLight.css("background", palette.grayLight);
		$grayDark.css("background", palette.grayDark);

		$primary.css("color", palette.primaryTone);
		$accent.css("color", palette.accentTone);
		$grayLight.css("color", palette.grayLightTone);
		$grayDark.css("color", palette.grayDarkTone);

		// Set example page CSS
		$bgPrimary.css("background", palette.primary);
		$bgAccent.css("background", palette.accent);
		$example.css("background", palette.grayLight);

		$colorAccent.css("color", palette.accent);
		$colorGrayDark.css("color", palette.grayDark);

		$buttonAccent.css("background", palette.accent);
		$buttonAccent.css("border-color", palette.accent);

		$colorPrimaryTone.css("color", palette.primaryTone);
		$colorAccentTone.css("color", palette.accentTone);
	}

	function setText() {
		$primaryHex.text(palette.primaryHex);
		$accentHex.text(palette.accentHex);
		$grayLightHex.text(palette.grayLightHex);
		$grayDarkHex.text(palette.grayDarkHex);
	}

	// randomPalette Bind events
	$randomPalette.click(function(){
		palette = new Palette(random.rgb());
		setColors();
		setText();
	});

	// Show example site on click
	$exampleToggle.click(function(){
		$example.fadeToggle("fast");
	});

})()
