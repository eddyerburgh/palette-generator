/* Test whether string is valid hex
 * @params [String] : hex value to test
 * @return [Boolean] : true if is valid hex
 */
export function isValidHex(hex) {
  const hexReg = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;

  return hexReg.test(hex);
}

/* Test whether string is valid rgb
 * @params [String] : rgb value to test
 * @return [Boolean] : true if is valid rgb
 */
export function isValidRgb(rgb) {
  const rgbReg = /([R][G][B][A]?[(]\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])(\s*,\s*((0\.[0-9]{1})|(1\.0)|(1)))?[)])/i; // eslint-disable-line max-len

  return rgbReg.test(rgb);
}
