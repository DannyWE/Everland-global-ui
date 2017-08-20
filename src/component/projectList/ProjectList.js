import React from 'react';
import styles from './ProjectList.scss';
import Project from './Project';

export default () => (
  <div className={styles.container}>
    <a name="project" > </a>
    <h2 className={styles.title} >Popular Projects</h2>
    <Project />
  </div>
)
