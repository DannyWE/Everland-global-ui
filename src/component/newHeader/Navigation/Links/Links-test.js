import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Links from './Links';
import styles from './Links.scss';

describe('Links', () => {
  it('should render the passed props', () => {
    const link = {
      href: 'some url',
      title: 'some title',
      text: 'some text',
    };
    const linkData = [link, link, link];
    const wrapper = shallow(<Links links={linkData} />);

    expect(wrapper.find('a').at(0).prop('href')).to.equal('some url');
    expect(wrapper.find('a').at(1).prop('title')).to.equal('some title');
    expect(wrapper.find('a').at(2).text()).to.equal('some text');
    expect(wrapper.find(`.${styles.text}`).length).to.equal(3);
  });
});
