import React from 'react';
import PropTypes from 'prop-types';
import camelCase from 'lodash/camelCase';

import styles from './ChannelBadge.scss';

const normalizeChannel = channel => camelCase(channel);

const ChannelBadge = ({ channel }) => (
  <span className={styles[normalizeChannel(channel)]}>
    {channel}
  </span>
);

ChannelBadge.propTypes = {
  channel: PropTypes.string.isRequired,
};

export default ChannelBadge;
