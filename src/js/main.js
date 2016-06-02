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