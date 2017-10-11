import React, { Component } from 'react';
import Icon from './../../Icon/Icon';
import styles from './Menu.scss';

class Menu extends Component {
  constructor() {
    super();
    this.state = { showMenu: false };
  }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    });
  }

  render() {
    return (
      <div className={styles.container} onClick={this.toggleMenu}>
        Menu
        {this.state.showMenu ? (
          <Icon overrideClass={styles.arrowUpIcon} name="arrow" />
        ) : (<Icon overrideClass={styles.arrowDownIcon} name="arrow" />)}

        { this.state.showMenu ? (
          <div className={styles.dropDownContainer}>

          </div>
        ) : null
        }
      </div>
    );
  }
}

export default Menu;
