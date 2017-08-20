import React from 'react';
import styles from './PeopleList.scss';
import CompanyInfo from './CompanyInfo';
import Photo from './Photo';

export default () => (
  <div className={styles.container}>
    <a name="about" > </a>
    <h2 className={styles.title} >About Us</h2>
    <div className={styles.details}>
      <div className={styles.leftContainer}>
        <CompanyInfo />
      </div>
      <div className={styles.rightContainer}>
        <Photo />
      </div>
    </div>
  </div>
)
