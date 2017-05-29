import sinon from 'sinon';
import paletteModule from '@/store/modules/palette';

describe('palette', () => {
  describe('actions', () => {
    describe('generateRandomPalette', () => {
      it('calls commit with updatePalette with result of generatePalette', () => {
        const generatePaletteReturn = { hex: { primary: '123' } };
        const commit = sinon.stub();
        paletteModule.__Rewire__('generatePalette', sinon.stub().returns(generatePaletteReturn));
        paletteModule.actions.generateRandomPalette({ commit });
        expect(commit.calledWith('updatePalette', generatePaletteReturn)).to.equal(true);
        paletteModule.__ResetDependency__('generatePalette');
      });

      it('calls commit with addPaletteToHistory with result of generatePalette', () => {
        const generatePaletteReturn = { hex: { primary: '123' } };
        const commit = sinon.stub();
        paletteModule.__Rewire__('generatePalette', sinon.stub().returns(generatePaletteReturn));
        paletteModule.actions.generateRandomPalette({ commit });
        expect(commit.calledWith('addPaletteToHistory', generatePaletteReturn)).to.equal(true);
        paletteModule.__ResetDependency__('generatePalette');
      });

      it('updates url with primary hex value', () => {
        const hex = '666666';
        paletteModule.__Rewire__('generatePalette', () => ({ hex: { primary: `#${hex}` } }));
        paletteModule.actions.generateRandomPalette({ commit: () => {} });
        expect(window.location.href).to.equal(`${location.origin}/${hex}`);
        paletteModule.__ResetDependency__('generatePalette');
      });
    });

    describe('generatePalette', () => {
      it('calls commit with updatePalette with result of generatePalette', () => {
        const rgb = 'rgb(0,0,0)';
        const generatePaletteReturn = { hex: {
          primary: 'primary',
        } };
        const commit = sinon.stub();
        paletteModule.__Rewire__('generatePalette', sinon.stub().withArgs(rgb).returns(generatePaletteReturn));
        paletteModule.actions.generatePalette({ commit }, { rgb });
        expect(commit.calledWith('updatePalette', generatePaletteReturn)).to.equal(true);
        paletteModule.__ResetDependency__('generatePalette');
      });

      it('calls commit with addPaletteToHistory with result of generatePalette', () => {
        const rgb = 'rgb(0,0,0)';
        const generatePaletteReturn = { hex: {
          primary: 'primary',
        } };
        const commit = sinon.stub();
        paletteModule.__Rewire__('generatePalette', sinon.stub().withArgs(rgb).returns(generatePaletteReturn));
        paletteModule.actions.generatePalette({ commit }, { rgb });
        expect(commit.calledWith('addPaletteToHistory', generatePaletteReturn)).to.equal(true);
        paletteModule.__ResetDependency__('generatePalette');
      });

      it('updates url with primary hex value', () => {
        const hex = '666686';
        const rgb = 'rgb(0,0,0)';
        const palette = {
          hex: {
            primary: `#${hex}`,
          },
        };
        paletteModule.__Rewire__('generatePalette', sinon.stub().withArgs(rgb).returns(palette));
        paletteModule.actions.generatePalette({ commit: () => {} }, { rgb });
        expect(window.location.href).to.equal(`${location.origin}/${hex}`);
        paletteModule.__ResetDependency__('generatePalette');
      });
    });

    describe('updatePalette', () => {
      it('calls commit with updatePalette with palette', () => {
        const palette = {
          hex: {
            primary: 'primary',
          },
        };
        const commit = sinon.stub();
        paletteModule.actions.updatePalette({ commit }, { palette });
        expect(commit.calledWith('updatePalette', palette)).to.equal(true);
      });

      it('calls commit with addPaletteToHistory with result of generatePalette', () => {
        const palette = {
          hex: {
            primary: 'primary',
          },
        };
        const commit = sinon.stub();
        paletteModule.actions.updatePalette({ commit }, { palette });
        expect(commit.calledWith('addPaletteToHistory', palette)).to.equal(true);
      });

      it('updates url with primary hex value', () => {
        const hex = 555555;
        const palette = {
          hex: {
            primary: `#${hex}`,
          },
        };
        paletteModule.actions.updatePalette({ commit: () => {} }, { palette });
        expect(window.location.href).to.equal(`${location.origin}/${hex}`);
      });
    });

    describe('changeFormat', () => {
      it('calls commit with format', () => {
        const commit = sinon.stub();
        const format = 'a format';
        paletteModule.actions.changeFormat({ commit }, format);
        expect(commit.calledWith('changeFormat', format)).to.equal(true);
      });
    });
  });

  describe('getters', () => {
    describe('format', () => {
      it('returns state.format', () => {
        const state = {
          format: 'format',
        };
        expect(paletteModule.getters.format(state)).to.equal(state.format);
      });
    });

    describe('palette', () => {
      it('returns state.palette', () => {
        const state = {
          palette: { palette: true },
        };
        expect(paletteModule.getters.palette(state)).to.equal(state.palette);
      });
    });

    describe('history', () => {
      it('returns state.history', () => {
        const state = {
          history: [{ palette: true }],
        };
        expect(paletteModule.getters.history(state)).to.equal(state.history);
      });
    });
  });
  describe('mutations', () => {
    describe('updatePalette', () => {
      it('adds palette to state.palette', () => {
        const state = {};
        const palette = { palette: true };
        paletteModule.mutations.updatePalette(state, palette);
        expect(state.palette).to.equal(palette);
      });
    });

    describe('changeFormat', () => {
      it('adds format to state.format', () => {
        const state = {};
        const format = 'hsl';
        paletteModule.mutations.changeFormat(state, format);
        expect(state.format).to.equal(format);
      });
    });

    describe('addPaletteToHistory', () => {
      it('adds palette to state.history array', () => {
        const state = {
          history: [{}],
        };
        const palette = { palette: true };
        paletteModule.mutations.addPaletteToHistory(state, palette);
        expect(state.history[0]).to.equal(palette);
      });

      it('removes last item from state.history if length is 5 and adds palette to beginning', () => {
        const secondLastPalette = { secondLastPalette: true };
        const lastPalette = { lastPalette: true };
        const state = {
          history: [{}, {}, {}, secondLastPalette, lastPalette],
        };
        const palette = { palette: true };
        paletteModule.mutations.addPaletteToHistory(state, palette);
        expect(state.history[4]).to.equal(secondLastPalette);
        expect(state.history[0]).to.equal(palette);
      });
    });
  });
});
