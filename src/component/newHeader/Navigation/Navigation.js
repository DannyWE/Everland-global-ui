import React, { Component } from 'react';

import Links from './Links/Links';
import styles from './Navigation.scss';
import Icon  from './../../Icon/Icon';

class Navigation extends Component {
  constructor() {
    super();

    this.state = { isOpen: false };
    this.html = document.getElementsByTagName('html')[0];
    this.toggleNavigation = this.toggleNavigation.bind(this);
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
    const { links, contactUs } = this.props;
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
          <Links links={links} toggleNavigation={this.toggleNavigation} isOpen={this.state.isOpen} />
        </nav>

        {isOpen &&
        <div onClick={this.toggleNavigation} className={styles.overlay} />
        }
      </div>
    );
  }
}

export default Navigation;
