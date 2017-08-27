import React, { Component } from 'react';

import styles from './LazyImage.scss';

class LazyImage extends Component {
  constructor() {
    super();
    this.state = { isVisible: false };
  }

  getComposedClassName = () => {
    const { isVisible } = this.state;
    const { className = '' } = this.props;

    return (
      `${isVisible ? styles.visible : styles.hidden} ${className}`
    );
  }

  handleImageLoad = () => {
    const { onLoad = () => {} } = this.props;
    this.setState({ isVisible: true }, onLoad);
  }

  render() {
    const { src, alt, loadingImage: LoadingImage } = this.props;
    const { isVisible } = this.state;

    return (
      <div className={styles.container}>
        <img
          src={src}
          alt={alt}
          className={this.getComposedClassName()}
          onLoad={this.handleImageLoad}
        />
        { !isVisible &&
        <LoadingImage className={styles.loading} />
        }
      </div>
    );
  }
}

export default LazyImage;
