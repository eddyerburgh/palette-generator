import { mount } from 'avoriaz';
import sinon from 'sinon';
import { expect } from 'chai';
import GeneratePaletteForm from '@/components/input/GeneratePaletteForm';

describe('GeneratePaletteForm.vue', () => {
  it('calls store action generatePalette when form is submitted with valid css color', () => {
    const rgb = 'rgb(0,0,0)';
    GeneratePaletteForm.__Rewire__('isColor', () => true);
    const $store = { dispatch: sinon.stub() };
    const wrapper = mount(GeneratePaletteForm, { globals: { $store } });
    wrapper.find('#generate-palette')[0].element.value = rgb;
    wrapper.find('#generate-palette')[0].simulate('input');
    wrapper.find('form')[0].simulate('submit');
    expect($store.dispatch.calledOnce).to.equal(true);
    expect($store.dispatch.calledWith('generatePalette', rgb)).to.equal(true);
    GeneratePaletteForm.__ResetDependency__('isColor');
  });

  it('gives #generate-palette a class of is-success if data.isValid is true and isDirty is true', () => {
    const wrapper = mount(GeneratePaletteForm);
    wrapper.setData({ isValid: true, isDirty: true });
    expect(wrapper.find('#generate-palette')[0].hasClass('is-success')).to.equal(true);
  });

  it('gives #generate-palette a class of is-error if data.isInvalid is true and isDirty is true', () => {
    const wrapper = mount(GeneratePaletteForm);
    wrapper.setData({ isInvalid: true, isDirty: true });
    expect(wrapper.find('#generate-palette')[0].hasClass('is-danger')).to.equal(true);
  });

  it('gives .fa a class fa-check when isValid is true and isDirty is true', () => {
    const wrapper = mount(GeneratePaletteForm);
    wrapper.setData({ isValid: true, isDirty: true });
    expect(wrapper.find('i')[0].hasClass('fa-check')).to.equal(true);
  });

  it('gives .fa a class fa-warning when isValid is true and isDirty is true', () => {
    const wrapper = mount(GeneratePaletteForm);
    wrapper.setData({ isInvalid: true, isDirty: true });
    expect(wrapper.find('i')[0].hasClass('fa-warning')).to.equal(true);
  });

  it('when change is called, sets isValid true and isInvalid false when isColor returns true', () => {
    GeneratePaletteForm.__Rewire__('isColor', () => true);
    const wrapper = mount(GeneratePaletteForm);
    expect(wrapper.vm.isValid).to.equal(false);
    const generatePalette = wrapper.find('#generate-palette')[0];
    generatePalette.element.value = 'rgb(0,0,0)';
    generatePalette.simulate('input');
    expect(wrapper.vm.isValid).to.equal(true);
    GeneratePaletteForm.__ResetDependency__('isColor');
  });

  it('when change is called, sets isValid false and isInvalid true when isColor returns false', () => {
    GeneratePaletteForm.__Rewire__('isColor', () => false);
    const wrapper = mount(GeneratePaletteForm);
    wrapper.setData({ isValid: true, isInvalid: false });
    const generatePalette = wrapper.find('#generate-palette')[0];
    generatePalette.element.value = 'rgb(0,0,0)';
    generatePalette.simulate('input');
    expect(wrapper.vm.isValid).to.equal(false);
    expect(wrapper.vm.isInvalid).to.equal(true);
    GeneratePaletteForm.__ResetDependency__('isColor');
  });
});
