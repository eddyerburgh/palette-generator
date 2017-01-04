import { expect } from 'chai';
import generatePalette from '../../../src/lib/generate-palette';

describe('generatePalette', () => {
  it('returns an object with the correct color properties when passed an rgb value', () => {
    const expectedOutput = {
      rgb: {
        primary: 'rgb(255, 0, 0)',
        accent: 'rgb(0, 255, 255)',
        grayLight: 'rgb(217, 217, 217)',
        grayDark: 'rgb(26, 26, 26)',
      },
      tone: {
        primary: 'rgb(255, 255, 255)',
        accent: 'rgb(26, 26, 26)',
        grayLight: 'rgb(26, 26, 26)',
        grayDark: 'rgb(255, 255, 255)',
      },
      hex: {
        accent: '#00ffff',
        grayDark: '#1a1a1a',
        grayLight: '#d9d9d9',
        primary: '#ff0000',
      },
    };
    expect(generatePalette('rgb(255, 0, 0)')).to.deep.equal(expectedOutput);
  });
});
