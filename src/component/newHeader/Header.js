import React, { Component } from 'react';

import Navigation from './Navigation/Navigation';
import Logo from './Logo/Logo';
import styles from './Header.scss';
import ContactUs from '../contactUs/ContactUs';

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
    title: 'contactUs',
    text: 'Contact us',
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
