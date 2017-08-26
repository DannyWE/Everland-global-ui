import React from 'react';
import styles from './MainNews.scss';

export default () => (
  <div className={styles.container}>
    <div className={styles.imageContainer}>
      <img className={styles.image}
           src="http://i2.au.reastatic.net/raw/06900f168eddb8058b2d0d5a697d3c27cd31ea27b28b04fb3160cff821983b33/main.jpg"
           alt="" />
    </div>
    <div className={styles.contentContainer}>
      <h3 className={styles.contentTitle} >Boutique winery selling for just $670,000</h3>
      <div className={styles.detailsContainer}>
        <div className={styles.labelContainer}>
          <label className={styles.latestNews}>LATEST NEWS</label><span>30 July 2017</span>
        </div>
        <div className={styles.contentDescription}>
          Could this be Australia’s cheapest winery? A small&nbsp;vineyard and winemaking facility at Wagga Wagga in regional New South Wales is on the market, with a price tag of only $670,000. The Wagga Wagga Winery, 15km …
        </div>
        <div className={styles.linkContainer}>
          <a className={styles.contentLink}
             href="#">
            Read more
          </a>
        </div>
      </div>
    </div>
  </div>
)
