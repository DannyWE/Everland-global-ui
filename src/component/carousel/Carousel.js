import React, { Component } from 'react';
import style from './Carousel.scss';
import ImageCarousel from './ImageCarousel/ImageCarousel';
import image1Url1 from './assets/melbourne-3.png';
import image1Url2 from './assets/sydney-2.png';
import image1Url3 from './assets/sydney-3.png';

const PHOTOS = [
  image1Url2,
  image1Url1,
  image1Url3
];

export default class Carousel extends Component {
  state = {
    imageCarousel: null,
  }
  componentDidMount() {
    this.setState({
      imageCarousel: <ImageCarousel photos={PHOTOS} />
    })
  }
  render() {
    return (
      <div className={style.carousel}>
        { this.state.imageCarousel }
      </div>
    );
  }
}
