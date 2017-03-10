import avoriaz, { mount } from 'avoriaz';
import sinon from 'sinon';
import { expect } from 'chai';
import Vuex from 'vuex';
import GeneratePalette from '../../../src/components/GeneratePalette';

avoriaz.use(Vuex);

describe('GeneratePalette.vue', () => {
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      generatePalette: sinon.stub(),
      generateRandomPalette: sinon.stub(),
    };
    store = new Vuex.Store({
      state: {},
      actions,
    });
  });

  it('calls store action generateRandomPalette when random-palette is clicked', () => {
    const wrapper = mount(GeneratePalette, { store });
    const input = wrapper.find('#generate-palette')[0];
    input.element.value = '#666';
    input.simulate('input');
    expect(actions.generatePalette.calledOnce).to.equal(true);
  });

  it('calls store action generateRandomPalette when random-palette is clicked', () => {
    const wrapper = mount(GeneratePalette, { store });
    wrapper.find('#random-palette')[0].simulate('click');
    expect(actions.generateRandomPalette.calledOnce).to.equal(true);
  });
});
