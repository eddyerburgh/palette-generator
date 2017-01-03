const expect = require('chai').expect;
const validate = require('../../../src/lib/validate.js');
const convert = require('../../../src/lib/convert.js');

describe('rgbToHex', () => {
  it('returns the hex code when passed a valid RGB value', () => {
    expect(convert.rgbToHex('rgb(67, 82, 143)')).to.equal('#43528f');
    expect(convert.rgbToHex('rgb(0,  0,0)')).to.equal('#000000');
    expect(convert.rgbToHex('rgb(132 , 255 , 0)')).to.equal('#84ff00');
  });
  it('throws an error if passed invalid RGB value', () => {
    expect(() => convert.rgbToHex('r)')).to.throw(Error);
  });
});

describe('RGB to Accent', () => {
  it('returns RGB of accent color when passed RGB input', () => {
    expect(convert.rgbToAccent('rgb(255,255,0)')).to.equal('rgb(0,0,255)');
  });
  it('throws an error if input is not a valid RGB value', () => {
    expect(() => convert.rgbToAccent('r)').message).to.equal('rgbToHex must be passed a valid RGB value');
    expect(() => convert.rgbToAccent('r)')).to.throw(Error);
  });
});

describe('RGB to Gray', () => {
  it('returns RGB of RGB input with saturation 0 and lightness 10% if shade is set to dark', () => {
    expect(convert.rgbToGray('rgb(255, 255, 0)', 'dark')).to.equal('rgb(26,26,26)');
  });
  it('returns RGB of RGB input with saturation 0 and lightness 85% if shade is not set', () => {
    expect(convert.rgbToGray('rgb(255, 255, 0)')).to.equal('rgb(217,217,217)');
  });
  it('throws an error if input is not a valid RGB value', () => {
    expect(() => convert.rgbToGray('r)')).to.throw(Error);
  });
});

describe('RGB to Tone', () => {
  it('convert.rgbToTone("rgb(0,0,0)") should equal "#fff"', () => {
    expect(convert.rgbToTone('rgb(0,0,0)')).to.equal('#fff');
  });
  it('validate.validateRgb(convert.rgbToTone("rgb(255,255,255)", "rgb(0,0,0)")) should be true', () => {
    expect(validate.validateRgb(convert.rgbToTone('rgb(255,255,255)', 'rgb(0,0,0)'))).to.be.true;
  });
  it('r) should be false', () => {
    expect(convert.rgbToTone('r)')).to.be.false;
  });
});

describe('Hex to RGB', () => {
  it('convert.hexToRgb("#fff") should equal "rgb(255,255,255)"', () => {
    expect(convert.hexToRgb('#fff')).to.equal('rgb(255,255,255)');
  });
});
