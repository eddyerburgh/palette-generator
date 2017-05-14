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
      generatePalette: sinon.stub(),
      generateRandomPalette: sinon.stub(),
    };
    store = new Vuex.Store({
      actions,
    });
  });

  it.skip('calls store action generateRandomPalette when random-palette is clicked', () => {
    const wrapper = mount(GeneratePaletteForm, { store });
    const rgb = 'rgb(0,0,0)';
    wrapper.find('input')[0].element.value = rgb;
    wrapper.find('input')[0].simulate('change');
    wrapper.find('form')[0].simulate('submit');
    expect(actions.generatePalette.calledOnce).to.equal(true);
    expect(actions.generatePalette.calledWith({ rgb })).to.equal(true);
  });

  it('calls store action generateRandomPalette when random-palette is clicked', () => {
    const wrapper = mount(GeneratePaletteForm, { store });
    wrapper.find('#random-generate')[0].simulate('click');
    expect(actions.generateRandomPalette.calledOnce).to.equal(true);
  });
});
