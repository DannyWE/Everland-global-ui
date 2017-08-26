import React from 'react';

import logoUrl from '../assets/logo.png';
import styles from './Logo.scss';

const Logo = () => (
  <a className={styles.container} href="/">
    <div className={styles.logo}>
      <img className={styles.svg} src={logoUrl} alt=""/>
    </div>
  </a>
);

export default Logo;
