import Color from 'color';

export default class Swatch {
  constructor(color) {
    const primary = Color(color);
    const accent = Color(color).rotate(180);
    const grayLight = Color(color).lightness(98);
    const grayDark = Color(color).lightness(8);

    this.rgb = {
      primary: primary.rgb().string(),
      accent: accent.rgb().string(),
      grayLight: grayLight.rgb().string(),
      grayDark: grayDark.rgb().string(),
    };

    this.hex = {
      primary: primary.hex(),
      accent: accent.hex(),
      grayLight: grayLight.hex(),
      grayDark: grayDark.hex(),
    };

    this.tone = {
      primary: primary.dark() ? this.rgb.grayLight : this.rgb.grayDark,
      accent: accent.dark() ? this.rgb.grayLight : this.rgb.grayDark,
      grayLight: this.rgb.grayDark,
      grayDark: this.rgb.grayLight,
    };
  }
}
