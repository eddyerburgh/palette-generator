import { randomRgb } from '../../lib/random';
import generatePalette from '../../lib/generate-palette';

// initial state
const state = {
  palette: {
    primary: null,
    secondary: null,
    grayLight: null,
    grayDark: null,
  },
  checkoutStatus: null,
};

// getters
const getters = {};

// actions
const actions = {
  generateRandomPalette({ commit }) {
    const rgb = randomRgb();
    const palette = generatePalette(rgb);
    commit('updatePalette', palette);
  },
};

// mutations
const mutations = {
  updatePalette(palette) {
    state.palette = palette;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
