import React from 'react';
import PropTypes from 'prop-types';

import CameraImage from './img/camera.svg';
import LazyImage from '../LazyImage/LazyImage';

import styles from './ImagePanel.scss';

const ImagePanel = ({ imagePanelClasses, images, channel }) => {
  const imagePanelClassNames = [imagePanelClasses, styles.container].join(' ');

  return (
    <div className={imagePanelClassNames}>
      {
      images && images.length
        ? <LazyImage
          className={styles.image}
          src={images[0].url}
          alt={images[0].alt}
          loadingImage={CameraImage}
        />
        : null
      }
    </div>
  );
};


export default ImagePanel;
