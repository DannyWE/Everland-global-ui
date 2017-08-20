import React from 'react';
import styles from './Navigation.scss';

export default () => (
  <div className={styles.container}>
    <span><a href="#news">Insight & News</a></span>
    <span><a href="#project">Popular Projects</a></span>
    <span><a href="#about">About Us</a></span>
  </div>
)
