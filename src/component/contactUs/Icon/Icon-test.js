import React from 'react';
import { stub } from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Icon from './Icon';
import styles from './Icon.scss';
import * as icons from './icons/index';

let requireIconByNameStub;

describe('Icon', () => {
  before(() => {
    requireIconByNameStub = stub(icons, 'default');
  });

  after(() => {
    requireIconByNameStub.restore();
  });

  it('should render an svg icon by name when passed as prop', () => {
    requireIconByNameStub.returns('floorOrLandArea.svg');
    const wrapper = shallow(<Icon alt="alt text" name="floorOrLandArea" />);
    const iconImage = wrapper.find('img');

    expect(requireIconByNameStub.calledWith('floorOrLandArea')).to.equal(true);
    expect(wrapper.props().className).to.contain(styles.icon);
    expect(iconImage.props().src).to.equal('floorOrLandArea.svg');
    expect(iconImage.props().alt).to.equal('alt text');
  });

  it('should contain the placeholder className when name prop is missing', () => {
    const wrapper = shallow(<Icon />);

    expect(wrapper.props().className).to.contain(styles.placeholder);
  });

  it('should compose an external className when passed as prop', () => {
    const wrapper = shallow(<Icon overrideClass="myFooClass" />);

    expect(wrapper.props().className).to.contain('myFooClass');
  });

  it('should pass any additional props to the component', () => {
    const wrapper = shallow(<Icon some="foo" />);

    expect(wrapper.props().some).to.equal('foo');
  });
});
