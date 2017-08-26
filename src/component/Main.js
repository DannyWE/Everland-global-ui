import React from 'react';
import styles from './Main.scss';
import Header from './newHeader/Header';
import Carousel from './carousel/Carousel';

const Main = () => (
  <div className={styles.container}>
    <Header />
    <Carousel />
  </div>
);
export default Main;
