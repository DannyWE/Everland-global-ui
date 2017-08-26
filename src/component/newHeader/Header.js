import React from 'react';

import Navigation from './Navigation/Navigation';
import Logo from './Logo/Logo';
import styles from './Header.scss';

const links = [
  {
    href: '/news',
    title: '',
    text: 'Insight & News',
  },
  {
    href: '/project',
    title: '',
    text: 'Projects',
  },
  {
    href: '/people',
    title: '',
    text: 'People',
  },
  {
    href: '/contact',
    title: '',
    text: 'Contact us',
  }
];

const Header = () => (
  <div className={styles.container}>
    <Logo />
    <Navigation links={links} />
  </div>
);

export default Header;
