import React, { Component } from 'react';

import Navigation from './Navigation/Navigation';
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import styles from './Header.scss';
import ContactUs from '../contactUs/ContactUs';
import headerListFunc from './DataProvider';

const links = [
  {
    href: '/about',
    title: '',
    text: 'About us',
  },
  // {
  //   href: '/project',
  //   title: '',
  //   text: 'Our Projects',
  // },
  // {
  //   href: '/news',
  //   title: '',
  //   text: 'News and Media',
  // },
  // {
  //   href: '/contact',
  //   title: 'contactUs',
  //   text: 'Contact Us',
  // }
];

class Header extends Component {
  constructor() {
    super();
    this.state = { notesOpen: false };
    this.toggleNotesOverlay = this.toggleNotesOverlay.bind(this);
  }

  toggleNotesOverlay = () => {
    const { notesOpen } = this.state;
    this.setState({ notesOpen: !notesOpen });
  }

  render() {
    const headerList = headerListFunc();

    return (
      <div id="headerContainer" className={styles.container}>
        <Logo />
        <Menu headerList={headerList} />
        <Navigation links={headerList} contactUs={this.toggleNotesOverlay} />

        {this.state.notesOpen &&
          <ContactUs
            className={styles.notesOverlay}
            closeFn={this.toggleNotesOverlay}
            saveFn={() => {}}
          />
        }
      </div>
    );
  }
}

export default Header;
