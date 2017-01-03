const expect = require('chai').expect;
const validate = require('../../../src/lib/validate.js');

describe('Validate RGB', () => {
  it('validate.validateRgb(rgb(0,0,0)) should be true', () => {
    expect(validate.validateRgb('rgb(0,0,0)')).to.be.true;
  });
  it('validate.validateRgb(rgb(20 , 20, 20)) should be true', () => {
    expect(validate.validateRgb('rgb(20 , 20, 20)')).to.be.true;
  });
  it('validate.validateRgb(rgb( 40, 30, 230)) should be true', () => {
    expect(validate.validateRgb('rgb( 40, 30, 230)')).to.be.true;
  });
  it('validate.validateRgb(rgb(f,3,3)) should be false', () => {
    expect(validate.validateRgb('rgb(f,3,3)')).to.be.false;
  });
});

describe('Validate Hex', () => {
  it('#555 should evaluate as true', () => {
    expect(validate.validateHex('#555')).to.be.true;
  });
  it('#21759b should evaluate as true', () => {
    expect(validate.validateHex('#21759B')).to.be.true;
  });
  it('#02cFd8 should evaluate as true', () => {
    expect(validate.validateHex('#02cFd8')).to.be.true;
  });
  it('#5544 should evaluate as false', () => {
    expect(validate.validateHex('#5544')).to.be.false;
  });
});
