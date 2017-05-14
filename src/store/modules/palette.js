import { randomRgb } from '../../lib/random';
import generatePalette from '../../lib/generate-palette';

const initialState = {
  palette: {
    rgb: null,
    hex: null,
    tone: null,
  },
  history: [],
};

// getters
const getters = {
  palette: state => state.palette,
  history: state => state.history,
};

// actions
const actions = {
  generateRandomPalette({ commit }) {
    const rgb = randomRgb();
    const palette = generatePalette(rgb);
    commit('updatePalette', palette);
    commit('addPaletteToHistory', palette);
    const hexWithoutHash = palette.hex.primary.substr(1);
    window.history.pushState({ hex: hexWithoutHash }, document.title, `${location.origin}/${hexWithoutHash}`);
  },
  generatePalette({ commit }, { rgb }) {
    const palette = generatePalette(rgb);
    commit('updatePalette', palette);
    commit('addPaletteToHistory', palette);
    const hexWithoutHash = palette.hex.primary.substr(1);
    window.history.pushState({ hex: hexWithoutHash }, document.title, `${location.origin}/${hexWithoutHash}`);
  },
};

// mutations
const mutations = {
  updatePalette(state, palette) {
    state.palette = palette; // eslint-disable-line no-param-reassign
  },
  addPaletteToHistory(state, palette) {
    if (state.history.length > 4) {
      state.history.shift();
    }
    state.history.push(palette); // eslint-disable-line no-param-reassign
  },
};

export default {
  state: initialState,
  getters,
  actions,
  mutations,
};
