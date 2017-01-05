import { expect } from 'chai';
import * as validators from '../../../src/lib/validators';

describe('validators', () => {
  describe('isValidRgb', () => {
    it('returns true if passed valid rgb with no whitespace', () => {
      expect(validators.isValidRgb('rgb(0,0,0)')).to.be.true;
    });

    it('returns true if passed valid rgb with whitespace', () => {
      expect(validators.isValidRgb('rgb(20 , 20, 20)')).to.be.true;
    });

    it('returns false if passed invalid rgb', () => {
      expect(validators.isValidRgb('rgb( 277, 30, 230)')).to.be.false;
    });

    it('returns false if passed incorrectly formated rgb', () => {
      expect(validators.isValidRgb('rgb(f,,3)')).to.be.false;
    });

    it('returns false if passed incorrectly formated rgb', () => {
      expect(validators.isValidRgb('rgb(f,,3)')).to.be.false;
    });

    it('returns false if passed a type that is not string', () => {
      [1, null, NaN, false, {}, [], new Date()].forEach((invalidInput) => {
        expect(validators.isValidRgb(invalidInput)).to.be.false;
      });
    });
  });

  describe('isValidHex', () => {
    it('returns true if passed valid shorthand hex', () => {
      expect(validators.isValidHex('#555')).to.be.true;
    });

    it('returns true if passed valid hex in lowercase', () => {
      expect(validators.isValidHex('#ffffff')).to.be.true;
    });

    it('returns true if passed valid hex in uppercase', () => {
      expect(validators.isValidHex('#21759B')).to.be.true;
    });

    it('returns true if passed valid hex in mixed case', () => {
      expect(validators.isValidHex('#02cFd8')).to.be.true;
    });

    it('returns false if passed invalid hex', () => {
      expect(validators.isValidHex('#5544')).to.be.false;
    });

    it('returns false if passed a type that is not string', () => {
      [1, null, NaN, false, {}, [], new Date()].forEach((invalidInput) => {
        expect(validators.isValidHex(invalidInput)).to.be.false;
      });
    });
  });
});
