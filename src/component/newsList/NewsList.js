import React from 'react';
import styles from './NewsList.scss';
import MainNews from './MainNews';

export default () => (
  <div className={styles.container}>
    <a name="news" > </a>
    <h2 className={styles.title} >Latest Insight & News</h2>
    <MainNews/>
  </div>
)
