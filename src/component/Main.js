import React from 'react';
import styles from './Main.scss';
import Header from './newHeader/Header';
import Carousel from './carousel/Carousel';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import NewsList from './newsList/NewsList';
import ProjectList from './projectList/ProjectList';
const Main = () => (
  <BrowserRouter>
    <div className={styles.container}>
      <Header />
      <Route exact path="/news" component={NewsList}/>
      <Route exact path="/" component={Carousel} />
      <Route exact path="/project" component={ProjectList}/>
      <Route exact path="/people" component={PeopleList}/>
    </div>
  </BrowserRouter>
);

import PeopleList from './people/PeopleList';
export default Main;
