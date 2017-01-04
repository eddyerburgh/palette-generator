import convert from './convert';
import validate from './validate';

export default function generatePalette(color) {
  const palette = {
    rgb: {},
    hex: {},
    tone: {},
  };

  if (validate.validateHex(color)) {
    palette.hex.primary = color;
    palette.rgb.primary = convert.hexToRgb(color);
  } else {
    palette.rgb.primary = color;
    palette.hex.primary = convert.rgbToHex(color);
  }

  palette.rgb.accent = convert.rgbToAccent(palette.rgb.primary);
  palette.rgb.grayLight = convert.rgbToGray(palette.rgb.primary, 'light');
  palette.rgb.grayDark = convert.rgbToGray(palette.rgb.primary, 'dark');

  palette.hex.accent = convert.rgbToHex(palette.rgb.accent);
  palette.hex.grayLight = convert.rgbToHex(palette.rgb.grayLight);
  palette.hex.grayDark = convert.rgbToHex(palette.rgb.grayDark);

  const darkColor = palette.rgb.grayDark;
  palette.tone.primary = convert.rgbToToneRgb(palette.rgb.primary, { darkColor });
  palette.tone.accent = convert.rgbToToneRgb(palette.rgb.accent, { darkColor });
  palette.tone.grayLight = convert.rgbToToneRgb(palette.rgb.grayLight, { darkColor });
  palette.tone.grayDark = convert.rgbToToneRgb(palette.rgb.grayDark, { darkColor });

  return palette;
}
