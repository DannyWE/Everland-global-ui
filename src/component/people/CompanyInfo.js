import React from 'react';
import styles from './CompanyInfo.scss';
import Photo from './Photo';

export default () => (
  <div className={styles.container}>
    <div>
      <h3 className={styles.title}>Everland Global</h3>
      <p className={styles.description}>
        Everland global, is a real estate company, and leisure/entertainment sectors, and coordinates…
      </p>
      <p className={styles.description}>
        Everland global, is a real estate company. Its experience planning a wide range of properties in the retail and leisure/entertainment sectors, and coordinates…
      </p>

      <p className={styles.contactUs}>
        Contact Us
      </p>
    </div>
  </div>
)
