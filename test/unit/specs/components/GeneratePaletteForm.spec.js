import { mount } from 'avoriaz';
import Vue from 'vue';
import sinon from 'sinon';
import { expect } from 'chai';
import Vuex from 'vuex';
import GeneratePaletteForm from '@/components/GeneratePaletteForm';

Vue.use(Vuex);

describe('GeneratePaletteForm.vue', () => {
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
    const rgb = 'rgb(0,0,0)';
    const $store = { dispatch: sinon.stub() };
    const wrapper = mount(GeneratePaletteForm, { globals: { $store } });
    wrapper.find('#generate-palette')[0].element.value = rgb;
    wrapper.find('#generate-palette')[0].simulate('input');
    wrapper.find('form')[0].simulate('submit');
    expect($store.dispatch.calledOnce).to.equal(true);
    expect($store.dispatch.calledWith('generatePalette', { rgb })).to.equal(true);
  });

  it('calls store action generateRandomPalette when random-palette is clicked', () => {
    const wrapper = mount(GeneratePaletteForm, { store });
    wrapper.find('#random-generate')[0].simulate('click');
    expect(actions.generateRandomPalette.calledOnce).to.equal(true);
  });
});
