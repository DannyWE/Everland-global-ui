import React from 'react';

import Icon from '../Icon/Icon';

import styles from './Attributes.scss';

const Attributes = ({
  attributesClasses,
  floorOrLandArea,
  carSpaces,
  propertyTypes,
}) => {
  const attributesClassNames = [attributesClasses, styles.container].join(' ');

  return (
    <div className={attributesClassNames}>
      {floorOrLandArea &&
      <span className={styles.floorOrLandArea}>
        <span className={styles.floorOrLandAreaAttributeValue}>
          <Icon overrideClass={styles.attributeIcon} name="floorOrLandArea" />
          {floorOrLandArea}
        </span>
      </span>
      }

      {carSpaces &&
      <span className={styles.carSpaces}>
        <span className={styles.carSpacesAttributeValue}>
          <Icon overrideClass={styles.attributeIcon} name="carSpaces" />
          {carSpaces}
        </span>
      </span>
      }

      {propertyTypes && propertyTypes.length > 0 &&
      <span className={styles.propertyTypes}>
        {propertyTypes.map((propertyType, index) => (
          <span key={index}>
            {propertyType}
            {index < (propertyTypes.length - 1) &&
            <span className={styles.separator}>&bull;</span>
            }
          </span>
        ))}
      </span>
      }
    </div>
  );
};

export default Attributes;
