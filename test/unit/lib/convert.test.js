const expect = require('chai').expect;
const convert = require('../../../src/lib/convert.js');

describe('convert', () => {
  describe('rgbToHex', () => {
    it('returns the hex code when passed a valid RGB value', () => {
      expect(convert.rgbToHex('rgb(67, 82, 143)')).to.equal('#43528f');
      expect(convert.rgbToHex('rgb(0,  0,0)')).to.equal('#000000');
      expect(convert.rgbToHex('rgb(132 , 255 , 0)')).to.equal('#84ff00');
    });
    it('throws an error if passed invalid RGB value', () => {
      expect(() => convert.rgbToHex('r)')).to.throw(/rgbToHex must be passed a valid RGB value/);
    });
  });
  describe('hslToRgb', () => {
    it('returns the correct RGB of HSL values in range 0-1', () => {
      expect(convert.hslToRgb(0.736, 0.544, 0.527)).to.deep.equal([123, 69, 200]);
    });
  });
  describe('RGB to Accent', () => {
    it('returns RGB of accent color when passed RGB input', () => {
      expect(convert.rgbToAccent('rgb(123,69,200)')).to.equal('rgb(146, 200, 69)');
      expect(convert.rgbToAccent('rgb(255, 255, 0)')).to.equal('rgb(0, 0, 255)');
    });
    it('throws an error if input is not a valid RGB value', () => {
      expect(() => convert.rgbToAccent('r)')).to.throw(/rgbToAccent must be passed a valid RGB value/);
    });
  });

  describe('RGB to Gray', () => {
    it('returns RGB of RGB input with saturation 0 and lightness 10% if shade is set to dark', () => {
      expect(convert.rgbToGray('rgb(255, 255, 0)', 'dark')).to.equal('rgb(26, 26, 26)');
    });
    it('returns RGB of RGB input with saturation 0 and lightness 85% if shade is not set', () => {
      expect(convert.rgbToGray('rgb(255, 255, 0)')).to.equal('rgb(217, 217, 217)');
    });
    it('throws an error if input is not a valid RGB value', () => {
      expect(() => convert.rgbToGray('r)')).to.throw(/rgbToGray must be passed a valid RGB value/);
    });
  });

  describe('RGB to Tone', () => {
    it('returns rgb(255, 255, 255) when passed color with lightness < 0.5', () => {
      expect(convert.rgbToToneRgb('rgb(0,0,0)')).to.equal('rgb(255, 255, 255)');
    });
    it('returns rgb(0, 0, 0) when passed color with lightness > 0.5 ', () => {
      expect(convert.rgbToToneRgb('rgb(255,255,0)')).to.equal('rgb(0, 0, 0)');
    });
    it('returns args.darkColor when passed color with lightness > 0.5 ', () => {
      const darkColor = 'rgb(244, 244, 244)';
      expect(convert.rgbToToneRgb('rgb(255,255,0)', { darkColor })).to.equal(darkColor);
    });
    it('returns an error if first argument is not valid rgb', () => {
      expect(() => convert.rgbToToneRgb('r)')).to.throw(/rgbToToneRgb must be passed a valid RGB value/);
    });
  });

  describe('Hex to RGB', () => {
    it('returns an RGB value when passed a hex code', () => {
      expect(convert.hexToRgb('#ffff00')).to.equal('rgb(255,255,0)');
    });
    it('returns an RGB value when passed a 3 lettter shorthand hex code', () => {
      expect(convert.hexToRgb('#fff')).to.equal('rgb(255,255,255)');
    });
  });
});
