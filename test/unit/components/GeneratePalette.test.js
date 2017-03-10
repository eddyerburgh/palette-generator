import avoriaz, { mount } from 'avoriaz';
import sinon from 'sinon';
import { expect } from 'chai';
import Vuex from 'vuex';
import GeneratePalette from '../../../src/components/GeneratePalette';


describe('GeneratePalette.vue', () => {
  it('calls store action generateRandomPalette when random-palette is clicked', () => {
    avoriaz.use(Vuex);
    const actions = {
      generateRandomPalette: sinon.stub(),
      generatePalette: sinon.stub(),
    };
    const store = new Vuex.Store({
      modules: {
        palette: {
          state: {},
          actions,
        },
      },
    });
    const wrapper = mount(GeneratePalette, { store });
    const input = wrapper.find('#generate-palette')[0];
    input.element.value = '#666';
    input.simulate('input');
    expect(actions.generatePalette.calledOnce).to.equal(true);
  });

  it('calls store action generateRandomPalette when random-palette is clicked', () => {
    avoriaz.use(Vuex);
    const actions = {
      generateRandomPalette: sinon.stub(),
      generatePalette: sinon.stub(),
    };
    const store = new Vuex.Store({
      modules: {
        palette: {
          state: {},
          actions,
        },
      },
    });
    const wrapper = mount(GeneratePalette, { store });
    wrapper.find('#random-palette')[0].simulate('click');
    expect(actions.generateRandomPalette.calledOnce).to.equal(true);
  });
});
