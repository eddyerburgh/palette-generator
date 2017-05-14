import { mount } from 'avoriaz';
import sinon from 'sinon';
import { expect } from 'chai';
import Vue from 'vue';
import Vuex from 'vuex';
import PaletteGenerator from '@/components/PaletteGenerator';
import Palette from '@/components/Palette';

Vue.use(Vuex);

describe('PaletteGenerator.vue', () => {
  const palette = { palette: true };
  let getters;
  let store;

  beforeEach(() => {
    getters = {
      palette: () => palette,
    };

    store = new Vuex.Store({
      getters,
    });
  });

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

  it('renders Palette with props of state.palette', () => {
    const $store = { dispatch: () => {} };
    const wrapper = mount(PaletteGenerator, { store, globals: { $store } });
    expect(wrapper.find(Palette)[0].vm.palette).to.equal(palette);
  });

  it('calls copyToClipboard with color value', () => {
    const copyToClipboard = sinon.stub();
    const color = 'red';
    PaletteGenerator.__Rewire__('copyToClipboard', copyToClipboard);
    const wrapper = mount(PaletteGenerator);
    wrapper.vm.copyColor(color);
    expect(copyToClipboard.calledWith(color)).to.equal(true);
    PaletteGenerator.__ResetDependency__('copyToClipboard');
  });
});
