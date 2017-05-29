import { mount } from 'avoriaz';
import Vue from 'vue';
import Vuex from 'vuex';
import Palette from '@/components/palette/Palette';
import Swatch from '@/components/palette/Swatch';

Vue.use(Vuex);

describe('Palette.vue', () => {
  let palette;
  let getters;
  let store;

  beforeEach(() => {
    palette = {
      rgb: {
        primary: 'rgb(0,0,0)',
        accent: 'rgb(0,0,1)',
        grayLight: 'rgb(255,0,0)',
        grayDark: 'rgb(0,255,0)',
      },
      hex: {
        primary: '#000',
      },
      tone: {
        primary: 'rgb(0,0,10)',
        accent: 'rgb(10,0,1)',
        grayLight: 'rgb(255,10,0)',
        grayDark: 'rgb(0,255,10)',
      },
    };
    getters = {
      format: () => 'rgb',
    };

    store = new Vuex.Store({
      getters,
    });
  });

  it('renders swatch using props.palette with color and tone', () => {
    const wrapper = mount(Palette, {
      propsData: {
        palette,
      },
      store,
    });

    expect(wrapper.find(Swatch)[0].vm.color).to.equal(palette.rgb.primary);
    expect(wrapper.find(Swatch)[0].vm.tone).to.equal(palette.tone.primary);
    expect(wrapper.find(Swatch)[1].vm.color).to.equal(palette.rgb.accent);
    expect(wrapper.find(Swatch)[1].vm.tone).to.equal(palette.tone.accent);
    expect(wrapper.find(Swatch)[2].vm.color).to.equal(palette.rgb.grayLight);
    expect(wrapper.find(Swatch)[2].vm.tone).to.equal(palette.tone.grayLight);
    expect(wrapper.find(Swatch)[3].vm.color).to.equal(palette.rgb.grayDark);
    expect(wrapper.find(Swatch)[3].vm.tone).to.equal(palette.tone.grayDark);
  });

  it('renders swatch with hex color if format getter returns hex', () => {
    store = new Vuex.Store({
      getters: {
        format: () => 'hex',
      },
    });
    const wrapper = mount(Palette, {
      propsData: {
        palette,
      },
      store,
    });

    expect(wrapper.find(Swatch)[0].vm.color).to.equal(palette.hex.primary);
  });

  it('renders div with class props.className', () => {
    const wrapper = mount(Palette, {
      propsData: {
        className: 'class-name',
        palette,
      },
      store,
    });
    expect(wrapper.find('.class-name').length).to.equal(1);
  });

  it('passes props.displayColor to Swatch', () => {
    const displayColor = true;
    const wrapper = mount(Palette, {
      propsData: {
        displayColor,
        palette,
      },
      store,
    });
    expect(wrapper.find(Swatch)[0].vm.displayColor).to.equal(displayColor);
  });

  it('passes props.onSwatchClick to Swatch', () => {
    const swatchOnClick = () => {};
    const wrapper = mount(Palette, {
      propsData: {
        palette,
        swatchOnClick,
      },
      store,
    });
    expect(wrapper.find(Swatch)[0].vm.handleClick).to.equal(swatchOnClick);
  });

  it('calls props.handleClick when root div is clicked', () => {
    const handleClick = sinon.stub();
    const wrapper = mount(Palette, {
      propsData: {
        palette,
        handleClick,
      },
      store,
    });
    wrapper.find('div')[0].simulate('click');
    expect(handleClick.calledOnce).to.equal(true);
    expect(handleClick.calledWith({ palette })).to.equal(true);
  });
});
