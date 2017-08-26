import React, { Component } from 'react';

import Links from './Links/Links';
import styles from './Navigation.scss';
import Icon  from './../../Icon/Icon';

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


class Navigation extends Component {
  constructor() {
    super();

    this.state = { isOpen: false };
    this.html = document.getElementsByTagName('html')[0];
  }

  componentDidMount() {
    this.html.classList.add(styles.mobileNavigationReady);
  }

  toggleNavigation = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });

    return !isOpen
      ? this.html.classList.add(styles.mobileNavigationIsOpen)
      : this.html.classList.remove(styles.mobileNavigationIsOpen);
  }

  render() {
    const { links } = this.props;
    const { isOpen } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.fixedContainer}>
          <Icon
            onClick={this.toggleNavigation}
            overrideClass={styles.hamburgerIcon}
            name="hamburger"
          />
        </div>

        <nav className={styles.navigation}>
          <Links links={links} />
        </nav>
        {isOpen &&
        <div onClick={this.toggleNavigation} className={styles.overlay} />
        }
      </div>
    );
  }
}

export default Navigation;
