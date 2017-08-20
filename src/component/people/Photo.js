import React from 'react';
import styles from './Photo.scss';
import Slider from 'react-slick';

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div><img className={styles.image}
                src="http://urbis.com.au/app/uploads/2014/07/Anna-Barclay-Enviro-1024x768.jpeg" alt=""/></div>
      <div><img className={styles.image}
                src="http://urbis.com.au/app/uploads/2011/11/Paul-Riga-Enviro-1024x683.jpg" alt=""/></div>
      <div><img className={styles.image}
                src="http://urbis.com.au/app/uploads/2013/02/Phil-Gleeson-Enviro-1024x825.jpg" alt=""/></div>
    </Slider>
  );
}

export default SimpleSlider;
