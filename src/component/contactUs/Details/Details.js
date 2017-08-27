import React from 'react';

import styles from './Details.scss';
import call from '../assets/call.png';
import email from '../assets/email.png';

const Details = ({
  detailsClasses,
}) => {
  const detailsClassNames = [detailsClasses, styles.container].join(' ');

  return (
    <div className={detailsClassNames}>
      <div className={styles.name}>
        Michael Xie
      </div>
      <a className={styles.phone} href="tel:0431550063">
        <div className={styles.contactTitle}>
          Phone
        </div>
        <div className={styles.phoneText}>
          0431550063
        </div>
        <img className={styles.phoneImg} src={call} alt=""/>
      </a>
      <a className={styles.email} href="mailto:mxie@everlandglobal.com.au">
        <div className={styles.emailTitle}>
          Email
        </div>
        <div className={styles.emailText}>
          mxie@everlandglobal.com.au
        </div>
        <img className={styles.emailImg} src={email} alt=""/>
      </a>
    </div>
  );
};

export default Details;
