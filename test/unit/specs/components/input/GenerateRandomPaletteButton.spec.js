import { mount } from 'avoriaz';
import Vue from 'vue';
import sinon from 'sinon';
import { expect } from 'chai';
import Vuex from 'vuex';
import GenerateRandomPaletteButton from '@/components/input/GenerateRandomPaletteButton';

Vue.use(Vuex);

describe('GenerateRandomPaletteButton.vue', () => {
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      generateRandomPalette: sinon.stub(),
    };
    store = new Vuex.Store({
      actions,
    });
  });

  it('calls store action generateRandomPalette when random-palette is clicked', () => {
    const wrapper = mount(GenerateRandomPaletteButton, { store });
    wrapper.find('#random-generate')[0].simulate('click');
    expect(actions.generateRandomPalette.calledOnce).to.equal(true);
  });
});
