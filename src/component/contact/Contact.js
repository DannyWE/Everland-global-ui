import React, { Component } from 'react';
import styles from './Contact.scss';
import SocialLinks from './../socialLink/SocialLinks';
import scriptService from './scriptService';
import contactInfoFunc from './DataProvider';

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    scriptService.inject({
      src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBKWuJkE0_jXI4fW_X9hDVF6Pu4YNdCSlg&callback=myMap',
      prop: '',
    })
      .then(() => {
      }, () => {});
  }

  render() {
    const contactInfo = contactInfoFunc();

    return (
      <div className={styles.container}>

        <div className={styles.leftContainer}>
          <p className={styles.subHeading}>{contactInfo.subHeading}</p>
          <p className={styles.company}>{contactInfo.company}</p>
          <p className={styles.location}><em>{contactInfo.location}</em></p>
          <p className={styles.basic}>Level 40, 525 Collins Street, Melbourne VIC 3000, Australia</p>
          <p className={styles.basic}><a className={styles.anchorStyles} href="tel:0431550063">P : +61 431 550 063</a></p>
          <p className={styles.basic}>E : info@everlandglobal.com</p>
        </div>
        <div id="googleMap" className={styles.rightContainer}>
        </div>
        <SocialLinks />
      </div>
    );
  }
}

export default Contact;
