import { expect } from 'chai';
import generatePalette from '../../../src/lib/generate-palette';

describe('generatePalette', () => {
  it('returns an object with the correct color properties when passed an rgb value', () => {
    const expectedOutput = {
      rgb: {
        primary: 'rgb(255, 0, 0)',
        accent: 'rgb(0, 255, 255)',
        grayLight: 'rgb(231, 228, 228)',
        grayDark: 'rgb(40, 36, 36)',
      },
      tone: {
        primary: 'rgb(255, 255, 255)',
        accent: 'rgb(40, 36, 36)',
        grayLight: 'rgb(40, 36, 36)',
        grayDark: 'rgb(255, 255, 255)',
      },
      hex: {
        accent: '#00ffff',
        grayDark: '#282424',
        grayLight: '#e7e4e4',
        primary: '#ff0000',
      },
    };
    expect(generatePalette('rgb(255, 0, 0)')).to.deep.equal(expectedOutput);
  });
});
