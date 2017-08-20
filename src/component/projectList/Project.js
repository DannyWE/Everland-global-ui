import React from 'react';
import styles from './Project.scss';
import imgUrl from './assets/project.png';

export default () => (
  <div className={styles.container}>
    <div className={styles.leftContainer}>
      <img className={styles.image}
           src={imgUrl}
           alt="" />
      <div className={styles.imageTitleContainer}>
        <h3 className={styles.imageTitle}>Glenferrie Area</h3>
      </div>
    </div>
    <div className={styles.highlightsContainer}>
        <div className={`${styles.highlightLeftPanel} ${styles.highlightBottom}`}>
          <h4 className={styles.highlightTitle}>$37.1m</h4>
          Fully Lease Income
        </div>
        <div className={`${styles.highlightRightPanel} ${styles.highlightBottom}`}>
          <h4 className={styles.highlightTitle}>90%</h4>
          Occupancy Rate
        </div>
        <div className={styles.highlightLeftPanel}>
          <h4 className={styles.highlightTitle}>$3,000 sqm</h4>
          Total Site Area
        </div>
        <div className={styles.highlightRightPanel}>
          <h4 className={styles.highlightTitle}>15</h4>
          Total Assets
        </div>
    </div>
  </div>
)
