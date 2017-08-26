import React, { Component } from 'react';

import Icon from '../../Icon/Icon';
import styles from './MyAccount.scss';

class MyAccount extends Component {
  constructor() {
    super();
    this.state = { showMenu: false };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  componentWillUpdate(props, state) {
    if (state.showMenu) {
      document.addEventListener('click', this.hideMenu);
    } else {
      document.removeEventListener('click', this.hideMenu);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.hideMenu);
  }

  toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  hideMenu() {
    this.setState({ showMenu: false });
  }

  render() {

    return (
      <div className={styles.container} onClick={this.toggleMenu}>
        <Icon overrideClass={styles.userIcon} name="accountAvatar" />
      </div>
    );
  }
}

export default MyAccount;
