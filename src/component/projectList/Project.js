import React from 'react';
import styles from './Project.scss';

export default () => (
  <div className={styles.container}>
    <div className={styles.leftContainer}>
      <img className={styles.image}
           src="http://i2.au.reastatic.net/raw/536f98b2fda329ddd014917e05aad0f5b6c1ea367e5c91fe2e70b341e2debba6/main.jpg"
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
