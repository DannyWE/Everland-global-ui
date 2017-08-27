import React, { Component } from 'react';

import Navigation from './Navigation/Navigation';
import Logo from './Logo/Logo';
import styles from './Header.scss';
import ContactUs from '../contactUs/ContactUs';

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
    href: '/news',
    title: '',
    text: 'News',
  },
  {
    href: '/contact',
    title: 'contactUs',
    text: 'Contact',
  }
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
  //
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.toggleNotesOverlay();
  //   }, 1000);
  // }

  render() {
    return (
      <div className={styles.container}>
        <Logo />
        <Navigation links={links} contactUs={this.toggleNotesOverlay} />

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
