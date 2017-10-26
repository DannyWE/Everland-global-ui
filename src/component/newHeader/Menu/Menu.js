import React, { Component } from 'react';
import Icon from './../../Icon/Icon';
import styles from './Menu.scss';
import headerTextListFunc from './../DataProvider'

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

  setPreference = () => {
    this.setState({
      showMenu: true
    }, () => {
      if (window && window.localStorage) {
        if (window.localStorage.getItem('everlandGlobalLan') === null || window.localStorage.getItem('everlandGlobalLan') === 'english') {
          window.localStorage.setItem('everlandGlobalLan', 'chinese');
        } else {
          window.localStorage.setItem('everlandGlobalLan', 'english');
        }
      }
      window.location='/';
    });
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
    const headerTextList = headerTextListFunc();
    return (
      <div className={styles.container} onClick={this.toggleMenu}>
        <div className={styles.menuAndArrow} >
          {headerTextList.title}
          {this.state.showMenu ? (
            <Icon overrideClass={styles.arrowUpIcon} name="arrow" />
          ) : (<Icon overrideClass={styles.arrowDownIcon} name="arrow" />)}
        </div>
        <div id="dropDownMenu" className={`${styles.dropDownContainer}`}>
          <span className={styles.menuItem}>
            <a href="/about" className={styles.menuItemStyle} >{headerTextList.aboutUs}</a>
          </span>
          <span className={styles.menuItem}>
            <a href="/contact" className={styles.menuItemStyle} >{headerTextList.contactUs}</a>
          </span>
          <span className={styles.menuItem}>
            <a onClick={this.setPreference} >{headerTextList.language}</a>
          </span>
        </div>
      </div>
    );
  }
}

export default Menu;
