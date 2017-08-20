import React, { Component } from 'react';
import style from './Carousel.scss';
import ImageCarousel from './ImageCarousel';
import image1 from '../assets/gallery-1.png';
import image2 from '../assets/gallery-2.png';
import image3 from '../assets/gallery-3.png';


const PHOTOS = [
  image1, image2, image3
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
