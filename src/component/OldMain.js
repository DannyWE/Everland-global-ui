import React from 'react';
import styles from './OldMain.scss';
import Header from './header/Header';
import Banner from './banner/Banner';
import Images from './images/Carousel';
import Navigation from './navigation/Navigation';
import NewsList from './newsList/NewsList';
import ProjectList from './projectList/ProjectList';
import PeopleList from './people/PeopleList';
import Footer from './footer/Footer';

const Main = () => (
  <div className={styles.container}>
    <Header />
    <Images />
    <Navigation />
    <NewsList />
    <ProjectList />
    <PeopleList />
    <Footer />
  </div>
);
export default Main;
