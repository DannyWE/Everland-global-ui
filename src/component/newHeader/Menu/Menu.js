import React, { Component } from 'react';
import Icon from './../../Icon/Icon';
import styles from './Menu.scss';
import setPreference from './../../service/setPreference';

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
      setPreference();
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
    const { headerList } = this.props;

    return (
      <div className={styles.container} onClick={this.toggleMenu}>
        <div className={styles.menuAndArrow} >
          {headerList.title.text}
          {this.state.showMenu ? (
            <Icon overrideClass={styles.arrowUpIcon} name="arrow" />
          ) : (<Icon overrideClass={styles.arrowDownIcon} name="arrow" />)}
        </div>
        <div id="dropDownMenu" className={`${styles.dropDownContainer}`}>
          <span className={styles.menuItem}>
            <a href={headerList.about.href} className={styles.menuItemStyle} >{headerList.about.text}</a>
          </span>
          <span className={styles.menuItem}>
            <a href={headerList.contact.href} className={styles.menuItemStyle} >{headerList.contact.text}</a>
          </span>
          <span className={styles.menuItem}>
            <a href={headerList.project.href} className={styles.menuItemStyle} >{headerList.project.text}</a>
          </span>
          <span className={styles.menuItem}>
            <a href={headerList.news.href} className={styles.menuItemStyle} >{headerList.news.text}</a>
          </span>
          <span className={styles.menuItem}>
            <a onClick={this.setPreference} className={styles.menuItemStyle} >{headerList.language.text}</a>
          </span>
        </div>
      </div>
    );
  }
}

export default Menu;
