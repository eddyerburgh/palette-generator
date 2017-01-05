import { expect } from 'chai';
import { isValidRgb } from '../../../src/lib/validators';
import * as random from '../../../src/lib/random';

describe('random RGB', () => {
  it('generates a random RGB', () => {
    expect(isValidRgb(random.randomRgb())).to.be.true;
  });
});
