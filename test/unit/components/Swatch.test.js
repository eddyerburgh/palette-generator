import { expect } from 'chai';
import { mount } from 'avoriaz';
import 'babel-polyfill';
import Swatch from '../../../src/components/Swatch';


describe('Swatch', () => {
  it('renders propsData.color as text in .swatch-info', () => {
    const color = 'rgb(0, 0, 0)';
    const wrapper = mount(Swatch, { propsData: { color, tone: 'tone' } });
    const swatchInfo = wrapper.find('.swatch-info')[0];
    expect(swatchInfo.text()).to.equal(color);
  });

  it('renders .swatch background style to propsData.color', () => {
    const color = 'rgb(0, 0, 0)';
    const wrapper = mount(Swatch, { propsData: { color, tone: 'tone' } });
    expect(wrapper.hasStyle('background-color', color)).to.equal(true);
  });
  it('renders .swatch-info color style to propsData.tone', () => {
    const tone = 'rgb(0, 0, 0)';
    const wrapper = mount(Swatch, { propsData: { color: 'red', tone } });
    const swatchInfo = wrapper.find('.swatch-info')[0];
    expect(swatchInfo.hasStyle('color', tone)).to.equal(true);
  });
});
