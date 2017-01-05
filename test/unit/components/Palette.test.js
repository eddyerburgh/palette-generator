import { expect } from 'chai';
import 'babel-polyfill';
import Palette from '../../../src/components/Palette';

describe('Palette', () => {
  it('has a created hook', () => {
    expect(typeof Palette.computed).to.equal('object');
  });
});
