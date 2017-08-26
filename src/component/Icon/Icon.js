import React from 'react';
import icons from './icons';

import styles from './Icon.scss';

const composeClassNames = (name, overrideClass) => (
  `${styles.icon} ${styles[name] || ''} ${overrideClass || ''}`
);

const Icon = ({ name, alt, overrideClass, ...rest }) => (
  <span {...rest} className={composeClassNames(name, overrideClass)}>
    { name &&
    <img
      className={styles.image}
      alt={alt}
      src={icons(name)}
    />
    }
  </span>
);

Icon.defaultProps = {
  alt: '',
  name: 'placeholder',
};

export default Icon;
