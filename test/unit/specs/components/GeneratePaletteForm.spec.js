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

  it('gives #generate-palette a class of is-success if data.isValid is true', () => {
    const wrapper = mount(GeneratePaletteForm, { store });
    wrapper.setData({ isValid: true });
    expect(wrapper.find('#generate-palette')[0].hasClass('is-success')).to.equal(true);
  });

  it('gives #generate-palette a class of is-error if data.isInvalid is true', () => {
    const wrapper = mount(GeneratePaletteForm, { store });
    wrapper.setData({ isInvalid: true });
    expect(wrapper.find('#generate-palette')[0].hasClass('is-danger')).to.equal(true);
  });

  it('when change is called, sets isValid true and isInvalid false when isValidRgb returns true', () => {
    GeneratePaletteForm.__Rewire__('isValidRgb', () => true);
    const wrapper = mount(GeneratePaletteForm);
    expect(wrapper.vm.isValid).to.equal(false);
    const generatePalette = wrapper.find('#generate-palette')[0];
    generatePalette.element.value = 'rgb(0,0,0)';
    generatePalette.simulate('input');
    expect(wrapper.vm.isValid).to.equal(true);
    GeneratePaletteForm.__ResetDependency__('isValidRgb');
  });

  it('when change is called, sets isValid true and isInvalid false when isValidHex returns true', () => {
    GeneratePaletteForm.__Rewire__('isValidHex', () => true);
    GeneratePaletteForm.__Rewire__('isValidRgb', () => false);
    const wrapper = mount(GeneratePaletteForm);
    wrapper.setData({ isInvalid: true, isValid: false });
    const generatePalette = wrapper.find('#generate-palette')[0];
    generatePalette.element.value = 'rgb(0,0,0)';
    generatePalette.simulate('input');
    expect(wrapper.vm.isValid).to.equal(true);
    expect(wrapper.vm.isInvalid).to.equal(false);
    GeneratePaletteForm.__ResetDependency__('isValidHex');
    GeneratePaletteForm.__ResetDependency__('isValidRgb');
  });

  it('when change is called, sets isValid false and isInvalid true when isValidHex and isValidRgb returns false', () => {
    GeneratePaletteForm.__Rewire__('isValidHex', () => false);
    GeneratePaletteForm.__Rewire__('isValidRgb', () => false);
    const wrapper = mount(GeneratePaletteForm);
    wrapper.setData({ isValid: true, isInvalid: false });
    const generatePalette = wrapper.find('#generate-palette')[0];
    generatePalette.element.value = 'rgb(0,0,0)';
    generatePalette.simulate('input');
    expect(wrapper.vm.isValid).to.equal(false);
    expect(wrapper.vm.isInvalid).to.equal(true);
    GeneratePaletteForm.__ResetDependency__('isValidHex');
    GeneratePaletteForm.__ResetDependency__('isValidRgb');
  });
});
