import { randomRgb } from '../../lib/random';
import generatePalette from '../../lib/generate-palette';

const initialState = {
  palette: {
    rgb: null,
    hex: null,
    tone: null,
  },
  history: [],
  format: 'hex',
};

// getters
const getters = {
  palette: state => state.palette,
  history: state => state.history,
  format: state => state.format,
};

// actions
const actions = {
  changeFormat({ commit }, format) {
    commit('changeFormat', format);
  },

  generateRandomPalette({ commit }) {
    const rgb = randomRgb();
    const palette = generatePalette(rgb);
    commit('updatePalette', palette);
    commit('addPaletteToHistory', palette);
    const hexWithoutHash = palette.hex.primary.substr(1);
    window.history.pushState({ hex: hexWithoutHash }, document.title, `${location.origin}/${hexWithoutHash}`);
  },

  generatePalette({ commit }, color) {
    const palette = generatePalette(color);
    commit('updatePalette', palette);
    commit('addPaletteToHistory', palette);
    const hexWithoutHash = palette.hex.primary.substr(1);
    window.history.pushState({ hex: hexWithoutHash }, document.title, `${location.origin}/${hexWithoutHash}`);
  },

  updatePalette({ commit }, { palette }) {
    commit('updatePalette', palette);
    commit('addPaletteToHistory', palette);
    const hexWithoutHash = palette.hex.primary.substr(1);
    window.history.pushState({ hex: hexWithoutHash }, document.title, `${location.origin}/${hexWithoutHash}`);
  },
};

// mutations
const mutations = {
  changeFormat(state, format) {
    state.format = format; // eslint-disable-line no-param-reassign
  },

  updatePalette(state, palette) {
    state.palette = palette; // eslint-disable-line no-param-reassign
  },

  addPaletteToHistory(state, palette) {
    if (state.history.length > 4) {
      state.history.pop();
    }
    state.history.unshift(palette); // eslint-disable-line no-param-reassign
  },
};

export default {
  state: initialState,
  getters,
  actions,
  mutations,
};
