import React, { Component } from 'react';

import ImagePanel from './ImagePanel/ImagePanel';
import Details from './Details/Details';
import Overlay from './Overlay/Overlay';
import { withAnimation } from './Hocs';

import styles from './ContactUs.scss';
import img from './assets/contact-us.png';

export class NotesOverlay extends Component {
  constructor(props) {
    super(props);
    this.state = { note: this.props.note };
  }

  updateNote = event => (
    this.setState({ note: event.target.value })
  )

  saveNote = () => {
    const prevNote = this.props.note;
    const newNote = this.state.note;
    const { saveFn, closeFn } = this.props;

    return (prevNote !== newNote)
      ? saveFn(newNote)
      : closeFn();
  }

  render() {
    const {
      closeFn,
      images,
      channel,
      price,
      streetAddress,
      suburbAddress,
      floorOrLandArea,
      carSpaces,
      propertyTypes,
      note,
    } = this.props;

    return (
      <Overlay
        isOpen
        overlayClasses={styles.overlay}
        closeButtonClasses={styles.close}
        closeFn={closeFn}
      >
        <div className={styles.title}>Contact Us</div>
        <div className={styles.property}>
          <ImagePanel
            imagePanelClasses={styles.imagePanel}
            images={[
              {
                url: img,
                alt: "Michael Xie"
              }
            ]}
          />
          <Details
            detailsClasses={styles.details}
            price={"price"}
            streetAddress={"street address"}
            suburbAddress={"street address"}
            floorOrLandArea={"street address"}
            carSpaces={"street address"}
            propertyTypes={["street address"]}
          />
        </div>
        {/*<textarea*/}
          {/*className={styles.textarea}*/}
          {/*placeholder="Add your property notes here"*/}
          {/*defaultValue={note}*/}
          {/*onChange={this.updateNote}*/}
          {/*autoFocus*/}
          {/*maxLength={455}*/}
        {/*/>*/}
        <div className={styles.buttons}>
          {/*<RCUIButton*/}
            {/*type="primary"*/}
            {/*classNames={styles.saveButton}*/}
            {/*onClickHandler={this.saveNote}*/}
          {/*>*/}
            {/*Save*/}
          {/*</RCUIButton>*/}
          {/*<RCUIButton*/}
            {/*type="defaultBlue"*/}
            {/*classNames={styles.cancelButton}*/}
            {/*onClickHandler={closeFn}*/}
          {/*>*/}
            {/*Cancel*/}
          {/*</RCUIButton>*/}
        </div>
      </Overlay>
    );
  }
}


export default withAnimation(NotesOverlay)({
  animation: {
    type: 'fadeIn',
    duration: '200ms',
  },
  styles: 'position: fixed; z-index: 5;',
});
