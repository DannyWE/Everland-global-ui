import React from 'react';

import styles from './Links.scss';

const Links = ({ links }) => (
  <ul className={styles.links}>
    { links.map((link, index) => (
      <li className={styles.link} key={index}>
        <a className={styles.text} href={link.href} title={link.title}>
          {link.text}
        </a>
      </li>
    ))}
  </ul>
);

export default Links;
