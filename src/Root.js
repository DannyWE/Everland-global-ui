import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import styles from './Root.scss';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import NewsList from './component/newsList/NewsList';
import ProjectList from './component/projectList/ProjectList';
import Carousel from './component/carousel/Carousel';
import PeopleList from './component/people/PeopleList';
import Contact from './component/contact/Contact';
import Header from './component/newHeader/Header';

import image1Url1 from './component/assets/1.png';
import image1Url2 from './component/assets/2.png';
import image1Url3 from './component/assets/3.png';
import image1Url4 from './component/assets/4.png';

const photos = [
  image1Url1,
  image1Url2,
];

ReactDOM.render(
  <BrowserRouter>
    <div className={styles.container}>
      <Header />
      <Switch>
        <Route exact path="/" render={(props) => (<Carousel photos={photos} /> )} />
        <Route exact path="/en" render={(props) => (<Carousel photos={photos} /> )} />
        <Route path="/news" component={NewsList}/>
        <Route path="/project" component={ProjectList}/>
        <Route path="/about" render={(props) => (<Carousel photos={photos} /> )}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root'),
);
