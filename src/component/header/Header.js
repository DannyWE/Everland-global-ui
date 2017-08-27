import React from 'react';
import styles from './Header.scss';
import logo from './assets/logo.png';
import Icon from '../Icon/Icon';
import Links from './Links/Links';

const links = [
  {
    href: '/about',
    title: '',
    text: 'About',
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
  }
];


export default () => (
  <div className={styles.header}>
    <div className={styles.container}>
      <Icon
        onClick={() => {
        }}
        overrideClass={styles.hamburgerIcon}
        name="hamburger"
      />
      <nav className={styles.navigation}>
        <Links links={links}/>
      </nav>
      }
    </div>
    <img className={styles.logo} src={logo} alt=""/>
  </div>
)
