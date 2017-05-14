import { mount } from 'avoriaz';
import Palette from '@/components/Palette';
import Swatch from '@/components/Swatch';

describe('Palette.vue', () => {
  let palette;

  beforeEach(() => {
    palette = {
      rgb: {
        primary: 'rgb(0,0,0)',
        accent: 'rgb(0,0,1)',
        grayLight: 'rgb(255,0,0)',
        grayDark: 'rgb(0,255,0)',
      },
      tone: {
        primary: 'rgb(0,0,10)',
        accent: 'rgb(10,0,1)',
        grayLight: 'rgb(255,10,0)',
        grayDark: 'rgb(0,255,10)',
      },
    };
  });

  it('renders swatch using props.palette with color and tone', () => {
    const wrapper = mount(Palette, {
      propsData: {
        palette,
      },
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

  it('renders div with class props.className', () => {
    const wrapper = mount(Palette, {
      propsData: {
        className: 'class-name',
        palette,
      },
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
    });
    expect(wrapper.find(Swatch)[0].vm.handleClick).to.equal(swatchOnClick);
  });
});
