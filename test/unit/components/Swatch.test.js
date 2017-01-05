import Vue from 'vue';
import { expect } from 'chai';
import Swatch from '../../../src/components/Swatch';

function getRenderedText(Component, propsData, el) {
  const Ctor = Vue.extend(Component);
  const vm = new Ctor({ propsData }).$mount();
  return vm.$el.querySelector(el).textContent;
}

function getRenderedStyle(Component, propsData, el) {
  const Ctor = Vue.extend(Component);
  const vm = new Ctor({ propsData }).$mount();
  if (el) {
    return vm.$el.querySelector(el).style;
  }
  return vm.$el.style;
}

describe('Swatch', () => {
  it('renders propsData.color as text in .swatch-info', () => {
    const color = 'rgb(0, 0, 0)';
    expect(getRenderedText(Swatch, { color }, '.swatch-info')).to.equal(color);
  });

  it('renders .swatch background style to propsData.color', () => {
    const color = 'rgb(0, 0, 0)';
    expect(getRenderedStyle(Swatch, { color }).backgroundColor).to.equal(color);
  });

  it('renders .swatch-info color style to propsData.tone', () => {
    const tone = 'rgb(0, 0, 0)';
    expect(getRenderedStyle(Swatch, { tone }, '.swatch-info').color).to.equal(tone);
  });
});
