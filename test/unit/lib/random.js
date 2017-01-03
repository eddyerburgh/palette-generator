var expect = require('chai').expect;
var validate = require('../../../src/lib/validate.js');
var random = require('../../../src/lib/random.js');

describe('random RGB', function() {
	
  it('validate.validateRgb(random.randRgb()) should evaluate as true', function(){
  	expect(validate.validateRgb(random.randRgb())).to.be.true;
  });

});