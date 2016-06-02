var expect = require('chai').expect;
var validate = require('./../src/js/modules/validate.js');
var random = require('./../src/js/modules/random.js');

describe('random RGB', function() {
	
  it('validate.rgb(random.rgb()) should evaluate as true', function(){
  	expect(validate.rgb(random.rgb())).to.be.true;
  });

});