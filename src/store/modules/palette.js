import { randomRgb } from '../../lib/random';
import generatePalette from '../../lib/generate-palette';

const initialState = {
  palette: {
    rgb: null,
    hex: null,
    tone: null,
  },
};

// getters
const getters = {
  palette: state => state.palette,
};

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
  updatePalette(state, palette) {
    state.palette = palette; // eslint-disable-line no-param-reassign
  },
};

export default {
  state: initialState,
  getters,
  actions,
  mutations,
};
