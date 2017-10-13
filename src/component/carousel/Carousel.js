import React, { Component } from 'react';
import style from './Carousel.scss';
import ImageCarousel from './ImageCarousel/ImageCarousel';


export default class Carousel extends Component {
  state = {
    imageCarousel: null,
  }
  componentDidMount() {
    console.log(this.props);
    this.setState({
      imageCarousel: <ImageCarousel photos={this.props.photos} />
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
