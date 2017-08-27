import React from 'react';

import styles from './Links.scss';

const Links = ({ links, contactUs, toggleNavigation, isOpen }) => (
  <ul className={styles.links}>
    { links.map((link, index) => {
      if (link.title === 'contactUs') {
        return (
          <li className={styles.link} key={index}>
            <div className={styles.text} onClick={ () => {
              {
                isOpen && toggleNavigation();
              }
              setTimeout(() => {
                contactUs();
              }, 300);
            }}>
              {link.text}
            </div>
          </li>
        )
      }
      return (
        <li className={styles.link} key={index}>
          <a className={styles.text} href={link.href} title={link.title}>
            {link.text}
          </a>
        </li>
      )
    })}
  </ul>
);

export default Links;
