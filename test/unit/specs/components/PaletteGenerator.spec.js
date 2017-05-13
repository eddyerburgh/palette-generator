import { mount } from 'avoriaz';
import sinon from 'sinon';
import { expect } from 'chai';
import PaletteGenerator from '@/components/PaletteGenerator';

describe('PaletteGenerator.vue', () => {
  it('calls this.$store.dispatch with props.hex if it exists', () => {
    const dispatch = sinon.stub();
    const hex = '666';
    const rgb = 'rgb(1,1,1)';
    PaletteGenerator.__Rewire__('hexToRgb', sinon.stub().withArgs(hex).returns(rgb));

    mount(PaletteGenerator, {
      globals: {
        $store: { dispatch },
      },
      propsData: { hex },
    });
    expect(dispatch.called).to.equal(true);
    expect(dispatch.calledWith('generatePalette', { rgb })).to.equal(true);
    PaletteGenerator.__ResetDependency__('hexToRgb');
  });
});
