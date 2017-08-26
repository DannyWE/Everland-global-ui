import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { stub } from 'sinon';

import MyAccount from './MyAccount';
import MyAccountLink from './MyAccountLink';
import config from '../../../services/config';

let configStub;

describe('MyAccount', () => {
  beforeEach(() => {
    configStub = stub(config, 'srpUrl');
  });

  afterEach(() => {
    configStub.restore();
  });

  it('should render icons with name accountAvatar and arrow', () => {
    const wrapper = shallow(<MyAccount />);

    expect(wrapper.find('Icon[name="accountAvatar"]')).to.have.length(1);
    expect(wrapper.find('Icon[name="arrow"]')).to.have.length(1);
  });

  it('should pass down correct props to MyAccountLink', () => {
    configStub.returns('http://baseUrl');
    const wrapper = shallow(<MyAccount />);

    wrapper.simulate('click');

    const myAccountLinkProps = wrapper.find(MyAccountLink).get(0).props;
    expect(myAccountLinkProps.text).to.equal('My Account Settings');
    expect(myAccountLinkProps.name).to.equal('accountShape');
    expect(myAccountLinkProps.href).to.equal('http://baseUrl/my-commercial/account');

    const savedPropertiesLinkProps = wrapper.find(MyAccountLink).get(1).props;
    expect(savedPropertiesLinkProps.text).to.equal('My Saved Properties');
    expect(savedPropertiesLinkProps.name).to.equal('properties');
    expect(savedPropertiesLinkProps.href).to.equal(undefined);

    const emailAlertLinkProps = wrapper.find(MyAccountLink).get(2).props;
    expect(emailAlertLinkProps.text).to.equal('My Saved Searches & Alerts');
    expect(emailAlertLinkProps.name).to.equal('alerts');
    expect(emailAlertLinkProps.href).to.equal('http://baseUrl/my-commercial/saved-searches-and-email-alerts');

    const logOutLinkProps = wrapper.find(MyAccountLink).get(3).props;
    expect(logOutLinkProps.text).to.equal('Log out');
    expect(logOutLinkProps.name).to.equal('lock');
    expect(logOutLinkProps.href).to.equal('#');
  });

  it('should toggle display MyAccountLinks after click', () => {
    const wrapper = shallow(<MyAccount />);

    expect(wrapper.find(MyAccountLink).length).to.equal(0);

    wrapper.simulate('click');

    expect(wrapper.find(MyAccountLink).length).to.equal(4);

    wrapper.simulate('click');

    expect(wrapper.find(MyAccountLink).length).to.equal(0);
  });

  it('should remove cookie when logout link is clicked', () => {
    global.window = {
      location: {
        href: 'http://some-href',
        hostname: 'http://some-href',
      },
    };
    const wrapper = shallow(<MyAccount />);
    document.cookie = 'lmdstok=someToken';

    wrapper.simulate('click');

    wrapper.find('[text="Log out"]').simulate('click');

    expect(window.location.href).to.equal('/sign-in');
  });
});
