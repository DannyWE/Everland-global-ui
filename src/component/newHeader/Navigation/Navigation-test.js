import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import Navigation from './Navigation';
import Links from './Links/Links';
import { BUY, LEASE, INVEST, SOLD, LEASED, FIND_AGENTS, NEWS } from './../../../constants/links';
import { Icon } from './../../../common';

import styles from './Navigation.scss';

describe('Navigation', () => {
  it('should render Links component with passed props', () => {
    const links = [{
      href: 'some url',
      title: 'some title',
      text: 'some text',
    }];
    const wrapper = shallow(<Navigation links={links} />);

    expect(wrapper.find(Icon).length).to.equal(1);
    expect(wrapper.find(Links).length).to.equal(1);
    expect(wrapper.find(Links).props().links).to.eql([{
      href: 'some url',
      title: 'some title',
      text: 'some text',
    }]);
  });

  it('should render Links component with default props if no passed props', () => {
    const wrapper = shallow(<Navigation />);

    expect(wrapper.find(Links).length).to.equal(1);
    expect(wrapper.find(Links).props().links).to.eql(
      [BUY, LEASE, INVEST, SOLD, LEASED, FIND_AGENTS, NEWS],
    );
  });

  describe('When mounted', () => {
    let wrapper;
    let html;

    beforeEach(() => {
      wrapper = mount(<Navigation />);
      html = document.getElementsByTagName('html')[0];
    });

    afterEach(() => {
      html.classList = '';
    });

    it('should add the mobileNavigationReady className to the html when mounted', () => {
      expect(html.classList.contains(styles.mobileNavigationReady)).to.equal(true);
    });

    it('should toggle the mobileNavigationIsOpen className when the icon is clicked', () => {
      const hamburgerIcon = wrapper.find(Icon);

      expect(html.classList.contains(styles.mobileNavigationIsOpen)).to.equal(false);
      hamburgerIcon.props().onClick();
      expect(html.classList.contains(styles.mobileNavigationIsOpen)).to.equal(true);
    });
  });
});
