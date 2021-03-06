import React from 'react';
import styles from './SocialLinks.scss';

export default () => (
  <div className={styles.container}>
    <div className={styles.socialAndLegal}>
      <div className={styles.social}>
        <ul>
          <li>
            <a
              target="_blank"
              href="https://www.facebook.com/everlandglobal"
              title="everlandglobal.com Facebook"
              className={styles.link}
            >
              <i className={`${styles.icon} ${styles.facebook}`}/>
            </a>
          </li>
          <li><
            a target="_blank"
                 href="http://www.linkedin.com/company/everlandglobal"
                 title="everlandglobal.com LinkedIn"
                 className={styles.link}>
            <i className={`${styles.icon} ${styles.linkedin}`}/>
            </a>
          </li>
          <li>
            <a target="_blank"
               href="https://plus.google.com/s/everlandglobal"
               title="everlandglobal.com Google+"
               className={styles.link}>
              <i className={`${styles.icon} ${styles.googleplus}`}/>
            </a>
          </li>
          <li>
            <a target="_blank"
               href="#"
               title="everlandglobal.com WeChat"
               className={styles.link}>
              <i className={`${styles.icon} ${styles.wechat}`}/>
            </a>
          </li>
          <li>
            <a target="_blank"
               href="#"
               title="everlandglobal.com instagram"
               className={styles.link}>
              <i className={`${styles.icon} ${styles.instagram}`}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
    {/*<div className={styles.copyright}><p>everlandglobal.com is owned and operated by Everland Global Ltd.</p></div>*/}
  </div>
)
