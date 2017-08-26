import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../../common/Icon/Icon';
import styles from './MyAccountLink.scss';

const MyAccountLink = ({ text, name, href, onClick, active = false }) => (
  <a className={styles.link} href={active ? null : href} onClick={onClick}>
    <div className={active ? styles.active : styles.container}>
      <Icon overrideClass={styles.icon} name={name} /> {text}
    </div>
  </a>
);

MyAccountLink.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool,
};

export default MyAccountLink;
