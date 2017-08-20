import React from 'react';
import styles from './Header.scss';
import logo from './assets/logo.png';

export default () => (
  <div className={styles.header}>
    {/*<ul className={styles.container}>*/}
      {/*<li className={styles.linkList}>*/}
        {/*<a className={styles.link}*/}
           {/*href="#news"*/}
           {/*title="Leased Commercial Property - realcommercial.com.au">*/}
          {/*Insight & News*/}
        {/*</a>*/}
      {/*</li>*/}
      {/*<li className={styles.linkList}>*/}
        {/*<a className={styles.link}*/}
           {/*href="#project"*/}
           {/*title="Commercial property agents">*/}
          {/*Our Projects*/}
        {/*</a>*/}
      {/*</li>*/}
      {/*<li className={styles.linkList}>*/}
        {/*<a className={styles.link}*/}
           {/*href="#about"*/}
           {/*title="Read the latest commercial property news">*/}
          {/*About*/}
        {/*</a>*/}
      {/*</li>*/}
    {/*</ul>*/}
    <img className={styles.logo} src={logo} alt=""/>
  </div>
)
