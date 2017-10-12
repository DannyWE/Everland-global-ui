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
    }, this.animation);
  }

  animation = () => {
    setTimeout(() => {
      if (this.state.showMenu) {
        document.getElementById('dropDownMenu').style.visibility = 'visible';
        document.getElementById('dropDownMenu').style['transition-delay'] = '0s';
        document.getElementById('dropDownMenu').style.opacity = 1;
      } else {
        document.getElementById('dropDownMenu').style.visibility = 'hidden';
        document.getElementById('dropDownMenu').style.opacity = 0;
        document.getElementById('dropDownMenu').style.transition = 'visibility 0s linear 0.33s, opacity 0.33s linear';
      }
    }, 100);
  }

  render() {
    return (
      <div className={styles.container} onClick={this.toggleMenu}>
        <div className={styles.menuAndArrow} >
          Menu
          {this.state.showMenu ? (
            <Icon overrideClass={styles.arrowUpIcon} name="arrow" />
          ) : (<Icon overrideClass={styles.arrowDownIcon} name="arrow" />)}
        </div>
        <div id="dropDownMenu" className={`${styles.dropDownContainer}`}>
          <span className={styles.menuItem}>
            <a href="/about" className={styles.menuItemStyle} >About US</a>
          </span>
          <span className={styles.menuItem}>
            <a href="/contact" className={styles.menuItemStyle} >Contact US</a>
          </span>
          <span className={styles.menuItem}>
            <a href="/chinese" className={styles.menuItemStyle} >中文</a>
          </span>
        </div>
      </div>
    );
  }
}

export default Menu;
