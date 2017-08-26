import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import Slider from 'react-slick';
import styles from './ImageCarousel.scss';
import Highlight from '../../highlight/Highlight';
import Highlight1 from '../../highlight/Highlight1';
import Highlight2 from '../../highlight/Highlight2';
import Highlight3 from '../../highlight/Highlight3';
import arrowUp from '../assets/arrow-up.png';
import arrowDown from '../assets/arrow-down.png';

const projectDetails = [
  {
    title: "Sydney",
    details: "the great view"
  },
  {
    title: "Melbourne",
    details: "the city view"
  },
  {
    title: "Sydney",
    details: "investment choice"
  }
];

const NextArrow = (props) => {
  return (
    <div>
      <div {...props} className={styles.nextArrow}>
        <img className={styles.arrowDown} src={arrowDown} alt=""/>
      </div>

    </div>
  )
};

const PrevArrow = (props) => {

  return (
    <div>
      <div {...props} className={styles.prevArrow}>
        <img className={styles.arrowUp} src={arrowUp} alt=""/>
      </div>
    </div>
  )
};

let _this;
export default class ImageCarousel extends Component {
  constructor() {
    super();
    this.orientationChangeHandler = this.orientationChangeHandler.bind(this);
    this.state = {
      title: projectDetails[0].title,
      details: projectDetails[0].details,
    };
    _this = this;
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
  updateHighLight(index) {
    console.log(index);
    const {title, details} = projectDetails[index];
    console.log(title);
    _this.setState({
      title: title,
      details: details,
    });
  }

  render() {
    const { photos } = this.props;
    const slideItems = _.map(photos, (url, index) => (
      <div key={index} className={styles.imageSlide}>
        <img src={url} className={styles.image} />
      </div>
    ));
    const slideItemsWithVideos = [...slideItems];

    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      afterChange: this.updateHighLight
    };

    let Component;
    if (
      this.state.title === projectDetails[0].title
      && this.state.details === projectDetails[0].details
    ) {
      Component = Highlight1;
    } else if (
      this.state.title === projectDetails[1].title
      && this.state.details === projectDetails[1].details
    ) {
      Component = Highlight2;
    } else if (
      this.state.title === projectDetails[2].title
      && this.state.details === projectDetails[2].details
    ) {
      Component = Highlight3;
    } else {
      Component = Highlight;
    }

    return (
      <div className={styles.imageCarousel}>
        <Slider
          {... settings}
          prevArrow={<PrevArrow />}
          nextArrow={<NextArrow />}
        >
          {slideItemsWithVideos}
        </Slider>
        <Component
          title={this.state.title}
          details={this.state.details}
        />
      </div>
    );
  }
}
