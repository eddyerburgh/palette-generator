import { expect } from 'chai';
import { mount } from 'avoriaz';
import Swatch from '@/components/palette/Swatch';


describe('Swatch', () => {
  it('renders propsData.color as text in .swatch-info', () => {
    const color = 'rgb(0, 0, 0)';
    const wrapper = mount(Swatch, { propsData: { color, tone: 'tone', displayColor: true } });
    const swatchInfo = wrapper.find('.swatch-info')[0];
    expect(swatchInfo.text()).to.equal(color);
  });

  it('renders .swatch background style to propsData.color', () => {
    const color = 'rgb(0, 0, 0)';
    const wrapper = mount(Swatch, { propsData: { color, tone: 'tone' } });
    expect(wrapper.hasStyle('background-color', color)).to.equal(true);
  });

  it('renders .swatch-info color style to propsData.tone if props.displayColor is true', () => {
    const tone = 'rgb(0, 0, 0)';
    const wrapper = mount(Swatch, { propsData: { color: 'red', tone, displayColor: true } });
    const swatchInfo = wrapper.find('.swatch-info')[0];
    expect(swatchInfo.hasStyle('color', tone)).to.equal(true);
  });

  it('does not .swatch-info color style to propsData.tone if props.displayColor is false', () => {
    const wrapper = mount(Swatch);
    expect(wrapper.contains('.swatch-info')).to.equal(false);
  });

  it('calls props.swatchOnClick with props.color if handleClick is passed', () => {
    const handleClick = sinon.stub();
    const color = 'rgb(0,0,0)';
    const wrapper = mount(Swatch, {
      propsData: { color, handleClick },
    });
    wrapper.find('div')[0].simulate('click');
    expect(handleClick.calledOnce).to.equal(true);
    expect(handleClick.calledWith(color)).to.equal(true);
  });
});
