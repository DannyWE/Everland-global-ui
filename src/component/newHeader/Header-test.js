import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Header from './Header';
import Navigation from './Navigation/Navigation';
import MyAccount from './MyAccount/MyAccount';
import Logo from './Logo/Logo';

describe('Header', () => {
  it('should render Logo, Navigation and MyAccount component', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find(Logo).length).to.equal(1);
    expect(wrapper.find(Navigation).length).to.equal(1);
    expect(wrapper.find(MyAccount).length).to.equal(1);
  });
});
