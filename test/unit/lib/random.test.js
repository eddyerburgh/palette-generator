const expect = require('chai').expect;
const validate = require('../../../src/lib/validate.js');
const random = require('../../../src/lib/random.js');

describe('random RGB', () => {
  it('validate.validateRgb(random.randomRgb()) should evaluate as true', () => {
    expect(validate.validateRgb(random.randomRgb())).to.be.true;
  });
});
