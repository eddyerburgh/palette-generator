import { mount } from 'avoriaz';
import sinon from 'sinon';
import Vuex from 'vuex';
import Vue from 'vue';
import { expect } from 'chai';
import FormatOptions from '@/components/input/FormatOptions';

Vue.use(Vuex);

describe('FormatOptions.vue', () => {
  it('calls changeFormat with input value when input is clicked', () => {
    const actions = {
      changeFormat: sinon.stub(),
    };
    const store = new Vuex.Store({
      actions,
    });

    const wrapper = mount(FormatOptions, {
      store,
    });
    wrapper.find('[value="hex"]')[0].simulate('click');
    expect(actions.changeFormat.args[0][1]).to.equal('hex');
    wrapper.find('[value="rgb"]')[0].simulate('click');
    expect(actions.changeFormat.args[1][1]).to.equal('rgb');
  });
});
