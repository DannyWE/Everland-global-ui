import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import styles from './Root.scss';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import NewsList from './component/newsList/NewsList';
import ProjectList from './component/projectList/ProjectList';
import Carousel from './component/carousel/Carousel';
import PeopleList from './component/people/PeopleList';
import Header from './component/newHeader/Header';

ReactDOM.render(
  <BrowserRouter>
    <div className={styles.container}>
      <Header />
      <Switch>
        <Route exact path="/" component={Carousel} />
        <Route path="/news" component={NewsList}/>
        <Route path="/project" component={ProjectList}/>
        <Route path="/people" component={PeopleList}/>
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root'),
);
