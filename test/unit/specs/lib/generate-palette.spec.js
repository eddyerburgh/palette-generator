import { expect } from 'chai';
import generatePalette from '@/lib/generate-palette';

describe('generatePalette', () => {
  it('returns an object with the correct color properties when passed an rgb value', () => {
    const expectedOutput = {
      rgb: {
        primary: 'rgb(255, 0, 0)',
        accent: 'rgb(0, 255, 255)',
        grayLight: 'rgb(244, 240, 240)',
        grayDark: 'rgb(44, 33, 33)',
      },
      tone: {
        primary: 'rgb(255, 255, 255)',
        accent: 'rgb(44, 33, 33)',
        grayLight: 'rgb(44, 33, 33)',
        grayDark: 'rgb(255, 255, 255)',
      },
      hex: {
        accent: '#00ffff',
        grayDark: '#2c2121',
        grayLight: '#f4f0f0',
        primary: '#ff0000',
      },
    };
    expect(generatePalette('rgb(255, 0, 0)')).to.deep.equal(expectedOutput);
  });
});
