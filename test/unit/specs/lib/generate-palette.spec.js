import { expect } from 'chai';
import generatePalette from '@/lib/generate-palette';

describe('generatePalette', () => {
  it('returns an object with the correct color properties when passed an rgb value', () => {
    const expectedOutput = {
      hex: {
        accent: '#00FFFF',
        grayDark: '#290000',
        grayLight: '#FFF5F5',
        primary: '#FF0000',
      },
      rgb: {
        accent: 'rgb(0, 255, 255)',
        grayDark: 'rgb(41, 0, 0)',
        grayLight: 'rgb(255, 245, 245)',
        primary: 'rgb(255, 0, 0)',
      },
      tone: {
        accent: 'rgb(41, 0, 0)',
        grayDark: 'rgb(255, 245, 245)',
        grayLight: 'rgb(41, 0, 0)',
        primary: 'rgb(255, 245, 245)',
      },
    };
    expect(generatePalette('rgb(255, 0, 0)')).to.deep.equal(expectedOutput);
  });
});
