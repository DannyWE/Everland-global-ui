import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import Logo from './Logo';
import styles from './Logo.scss';

describe('Logo', () => {
  it('should render logo background image', () => {
    const wrapper = mount(<Logo />);

    expect(wrapper.find(`.${styles.container}`).length).to.equal(1);
    expect(wrapper.find(`.${styles.logo}`).length).to.equal(1);
    expect(wrapper.find(`.${styles.svg}`).length).to.equal(1);
    expect(wrapper.find('svg').length).to.equal(1);
  });
});
