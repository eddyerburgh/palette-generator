import { hexToRgb, rgbToHex, rgbToAccent, rgbToGray, rgbToToneRgb } from './convert';
import { isValidHex } from './validators';

export default function generatePalette(color) {
  const palette = {
    rgb: {},
    hex: {},
    tone: {},
  };

  if (isValidHex(color)) {
    palette.hex.primary = color;
    palette.rgb.primary = hexToRgb(color);
  } else {
    palette.rgb.primary = color;
    palette.hex.primary = rgbToHex(color);
  }

  palette.rgb.accent = rgbToAccent(palette.rgb.primary);
  palette.rgb.grayLight = rgbToGray(palette.rgb.primary, { lightness: 0.95 });
  palette.rgb.grayDark = rgbToGray(palette.rgb.primary, { lightness: 0.15 });

  palette.hex.accent = rgbToHex(palette.rgb.accent);
  palette.hex.grayLight = rgbToHex(palette.rgb.grayLight);
  palette.hex.grayDark = rgbToHex(palette.rgb.grayDark);

  const darkColor = palette.rgb.grayDark;
  palette.tone.primary = rgbToToneRgb(palette.rgb.primary, { darkColor });
  palette.tone.accent = rgbToToneRgb(palette.rgb.accent, { darkColor });
  palette.tone.grayLight = rgbToToneRgb(palette.rgb.grayLight, { darkColor });
  palette.tone.grayDark = rgbToToneRgb(palette.rgb.grayDark, { darkColor });

  return palette;
}
