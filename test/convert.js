var expect = require('chai').expect;
var validate = require('./../src/js/modules/validate.js');
var random = require('./../src/js/modules/random.js');
var convert = require('./../src/js/modules/convert.js');

describe('RGB to Hex', function() {

  it('convert.rgbToHex("rgb(0,0,0)") should equal "#00000"', function(){
  	expect(convert.rgbToHex("rgb(0,0,0)")).to.equal("#000000");
  });
  it('convert.rgbToHex("rgb(67, 82, 143)") should equal "#43528f"', function(){
  	expect(convert.rgbToHex("rgb(67, 82, 143)")).to.equal("#43528f");
  });
  it('convert.rgbToHex("rgb(132, 255, 0)") should equal "#84ff00"', function(){
  	expect(convert.rgbToHex("rgb(132, 255, 0)")).to.equal("#84ff00");
  });    
  it('validate.hex(convert.rgbToHex(random.rgb())) should be true ', function(){
  	expect(validate.hex(convert.rgbToHex(random.rgb()))).to.be.true;
  });      
  it('r) should be false', function(){
  	expect(convert.rgbToHex("r)")).to.be.false;
  });  

});

describe('RGB to Accent', function() {

  it('convert.rgbToAccent("rgb(25, 69, 32)") should equal "rgb(69,25,62)"', function(){
    expect(convert.rgbToAccent("rgb(25, 69, 32)")).to.equal("rgb(69,25,62)");
  });
  it('convert.rgbToAccent("rgb(217, 157, 54)") should equal "rgb(54,114,217)"', function(){
    expect(convert.rgbToAccent("rgb(217, 157, 54)")).to.equal("rgb(54,114,217)");
  });
  it('convert.rgbToAccent("rgb(177, 150, 214)") should equal "rgb(187,214,150)"', function(){
    expect(convert.rgbToAccent("rgb(177, 150, 214)")).to.equal("rgb(187,214,150)");
  });    
  it('r) should be false', function(){
    expect(convert.rgbToAccent("r)")).to.be.false;
  });  

});

describe('RGB to Gray', function() {

  it('convert.rgbToGray("rgb(158, 86, 183)", "dark") should equal "rgb(23, 11, 27)"', function(){
    expect(convert.rgbToGray("rgb(158, 86, 183)", "dark")).to.equal("rgb(23,11,27)");
  });
  it('convert.rgbToGray("rgb(158, 86, 183)", "light") should equal "rgb(250,246,251)"', function(){
    expect(convert.rgbToGray("rgb(158, 86, 183)", "light")).to.equal("rgb(250,246,251)");
  }) 
  it('r) should be false', function(){
    expect(convert.rgbToGray("r)")).to.be.false;
  });  

});

describe('RGB to Tone', function() {

  it('convert.rgbToTone("rgb(0,0,0)") should equal "#fff"', function(){
    expect(convert.rgbToTone("rgb(0,0,0)")).to.equal("#fff");
  });
  it('convert.rgbToTone("rgb(255,255,255)") should equal "#222"', function(){
    expect(convert.rgbToTone("rgb(255,255,255)")).to.equal("#222");
  }) 
  it('r) should be false', function(){
    expect(convert.rgbToTone("r)")).to.be.false;
  });  

});

