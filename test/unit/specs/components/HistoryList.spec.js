import { mount } from 'avoriaz';
import Vue from 'vue';
import { expect } from 'chai';
import Vuex from 'vuex';
import HistoryList from '@/components/HistoryList';
import Palette from '@/components/palette/Palette';

Vue.use(Vuex);

describe('HistoryList.vue', () => {
  let getters;
  let store;
  let history;

  beforeEach(() => {
    history = [{}, {}, {}];
    getters = {
      history: () => history,
    };

    store = new Vuex.Store({
      getters,
    });
  });

  it('renders a palette for each object in state.history, passing state.history[i] as palette', () => {
    const wrapper = mount(HistoryList, { store });
    expect(wrapper.find(Palette).length).to.equal(history.length);
    expect(wrapper.find(Palette)[0].vm.palette).to.equal(history[0]);
  });
});
