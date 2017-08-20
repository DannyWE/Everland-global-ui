import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import Slider from 'react-slick';
import styles from './ImageCarousel.scss';

const NextArrow = (props) => (
  <div {...props} className={styles.nextArrow}>
    &rsaquo;
  </div>
);

const PrevArrow = (props) => (
  <div {...props} className={styles.prevArrow}>
    &lsaquo;
  </div>
);

export default class ImageCarousel extends Component {
  constructor() {
    super();
    this.orientationChangeHandler = this.orientationChangeHandler.bind(this);
  }
  componentDidMount() {
    window.addEventListener('orientationchange', this.orientationChangeHandler);
  }
  componentWillUnmount() {
    window.removeEventListener('orientationchange', this.orientationChangeHandler);
  }
  orientationChangeHandler() {
    this.forceUpdate();
  }
  render() {
    const { photos } = this.props;
    const slideItems = _.map(photos, (url, index) => (
      <div key={index} className={styles.imageSlide}>
        <img src={url} className={styles.image} />
      </div>
    ));
    const slideItemsWithVideos = [...slideItems];

    return (
      <div className={styles.imageCarousel}>
        <Slider
          arrows={photos.length > 1}
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
          slidesToShow={1}
          slidesToScroll={1}
          infinite
        >
          {slideItemsWithVideos}
        </Slider>
      </div>
    );
  }
}
