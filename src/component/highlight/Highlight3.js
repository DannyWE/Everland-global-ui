import React, { Component } from 'react';
import styles from './Highlight.scss';
import ReactRevealText from 'react-reveal-text';

class HighLight extends Component {

  constructor() {
    super();
    this.setInitialState();
  }

  setInitialState() {
    this.state = {
      show1: false,
      show2: false,
      show3: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show1: true });
    }, 100);
    setTimeout(() => {
      this.setState({ show2: true });
    }, 100);
    setTimeout(() => {
      this.setState({ show3: true });
    }, 100);
  }

  render() {
    const { title, details} = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <p>
            {/*<ReactRevealText show={this.state.show1} text={title} />*/}
          </p>
          <p><ReactRevealText show={this.state.show2} text={title} /></p>
        </div>
        <div className={styles.link}>
          <a className={styles.linkAnchor} href="/project">
            <ReactRevealText show={this.state.show3} text={details} />
          </a>
        </div>
      </div>
    );
  }
}

export default HighLight;
