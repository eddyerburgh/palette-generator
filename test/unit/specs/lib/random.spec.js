import { expect } from 'chai';
import { isValidRgb } from '@/lib/validators';
import * as random from '@/lib/random';

describe('random RGB', () => {
  it('generates a random RGB', () => {
    expect(isValidRgb(random.randomRgb())).to.be.true;
  });
});
