import React from 'react';

import styles from './Links.scss';
import setPreference from './../../../service/setPreference';

const languageAction = () => {
  setPreference();
  window.location='/';
};

const Links = ({ links, contactUs, toggleNavigation, isOpen }) => (
  <ul className={styles.links}>
    <li className={styles.link}>
      <a className={styles.text} href={links.about.href} title={links.about.title}>
        {links.about.text}
      </a>
      <a className={styles.text} href={links.contact.href} title={links.contact.title}>
        {links.contact.text}
      </a>
      <a className={styles.text} onClick={languageAction} title={links.language.title}>
        {links.language.text}
      </a>
    </li>
  </ul>
);

export default Links;
