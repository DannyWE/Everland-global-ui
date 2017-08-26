import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import MyAccountLink from './MyAccountLink';
import styles from './MyAccountLink.scss';

describe('MyAccountLink', () => {
  it('should render icon with provided name', () => {
    const wrapper = shallow(<MyAccountLink text="someText" name="lock" />);

    expect(wrapper.find('Icon[name="lock"]')).to.have.length(1);
  });

  it('should add href to anchor', () => {
    const wrapper = shallow(<MyAccountLink text="someText" name="arrow" href="someUrl" />);

    expect(wrapper.find('a').prop('href')).to.equal('someUrl');
    expect(wrapper.find('div').at(0).prop('className')).to.equal(styles.container);
  });

  it('should remove href and add style if active', () => {
    const wrapper = shallow(<MyAccountLink text="someText" name="arrow" href="notAdded" active />);

    expect(wrapper.find('a').prop('href')).to.equal(null);
    expect(wrapper.find('div').at(0).prop('className')).to.contain(styles.active);
  });

  it('should have onclick attribute', () => {
    const FN = sinon.spy();
    const wrapper = shallow(<MyAccountLink text="someText" name="arrow" onClick={FN} />);

    wrapper.simulate('click');

    expect(FN.called).to.equal(true);
  });
});
