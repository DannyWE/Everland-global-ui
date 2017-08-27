import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ChannelBadge from './ChannelBadge';
import styles from './ChannelBadge.scss';

let wrapper;

describe('ChannelBadge', () => {
  const tests = [
    { channel: 'buy', result: styles.buy },
    { channel: 'BUY', result: styles.buy },
    { channel: 'sold', result: styles.sold },
    { channel: 'Buy or Lease', result: styles.buyOrLease },
    { channel: 'lease', result: styles.lease },
    { channel: 'Leased', result: styles.leased },
  ];

  before(() => {
    wrapper = shallow(<ChannelBadge channel="" />);
  });

  tests.forEach(({ channel, result }) => {
    it(`should set className when "${channel}" is passed as prop`, () => {
      wrapper.setProps({ channel });
      expect(wrapper.props().className).to.equal(result);
    });
  });
});
