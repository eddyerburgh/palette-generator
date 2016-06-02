var expect = require('chai').expect;
var validate = require('./../src/js/modules/validate.js');

console.log(validate);

describe('Validate RGB', function() {
  it('rgb(0,0,0) should evaluate as true', function(){
  	expect(validate.rgb("rgb(0,0,0)")).to.be.true;
  });
  it('rgb(20 , 20, 20) should evaluate as true', function(){
  	expect(validate.rgb("rgb(20 , 20, 20)")).to.be.true;
  });
  it('rgb( 40, 30, 230) should evaluate as true', function(){
  	expect(validate.rgb("rgb( 40, 30, 230)")).to.be.true;
  });
  it('rgb(f,3,3) should evaluate as false', function(){
  	expect(validate.rgb("rgb(f,3,3)")).to.be.false;
  });      
});

describe('Validate Hex', function() {
  it('#555 should evaluate as true', function(){
  	expect(validate.hex("#555")).to.be.true;
  });
  it('#21759b should evaluate as true', function(){
  	expect(validate.hex("#21759B")).to.be.true;
  });
  it('#02cFd8 should evaluate as true', function(){
  	expect(validate.hex("#02cFd8")).to.be.true;
  });
  it('#5544 should evaluate as false', function(){
  	expect(validate.hex("#5544")).to.be.false;
  });      
});