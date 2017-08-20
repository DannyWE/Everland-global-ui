import React from 'react';
import styles from './Images.scss';
import image3 from './assets/gallery-3.png';

export default () => (
  <div className={styles.container}>
    <img src={image3} className={styles.image} />
  </div>
)
