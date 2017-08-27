import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getIOSVersion, isTouchDevice, isIOS } from './browserFeatures';
import Mask from './Mask';

import styles from './Overlay.scss';

class Overlay extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
    if (!this.props.allowScroll) {
      this.toggleScroll(true);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
    this.toggleScroll(false);
  }

  getScrollOffset = () => (document.body.scrollTop || document.documentElement.scrollTop)

  getTouchDeviceStyles = () => ({
    ...(isTouchDevice() && isIOS()) && {
      top: `${(getIOSVersion() === 9) ? this.getScrollOffset() : 0}px`,
      transform: 'translate(-50%)',
      marginTop: '70px',
    },
  })

  handleKeyPress = (event) => {
    const key = event.which || event.keyCode;
    if (key === 27) { // Escape
      this.props.closeFn();
    }
  }

  toggleScroll = (isToggled) => { // eslint-disable-line
    const html = document.getElementsByTagName('html')[0];

    if (isToggled) {
      document.body.style.top = `${this.getScrollOffset()}px`;
    }

    return isToggled
      ? html.classList.add(styles.noScroll)
      : html.classList.remove(styles.noScroll);
  }

  render() {
    const {
      id,
      isOpen,
      children,
      closeFn,
      overlayClasses,
      closeButtonClasses,
      hideCloseButton,
    } = this.props;

    const overlayClassNames = [overlayClasses, styles.overlay].join(' ');
    const closeButtonClassNames = [closeButtonClasses, styles.closeButton].join(' ');
    const visibilityClassName = isOpen ? styles.show : styles.hide;

    return (
      <div id={id} className={visibilityClassName} onKeyDown={this.handleKeyPress}>
        <div className={overlayClassNames} style={this.getTouchDeviceStyles()}>
          {!hideCloseButton &&
          <button className={closeButtonClassNames} onClick={closeFn}>
            <i className={'RCAIconFontCancel'} />
          </button>
          }
          {children}
        </div>
        <Mask onClick={closeFn} />
      </div>
    );
  }
}

Overlay.propTypes = {
  id: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string,
  ]),
  isOpen: PropTypes.bool.isRequired,
  closeFn: PropTypes.func,
  overlayClasses: PropTypes.string,
  closeButtonClasses: PropTypes.string,
  hideCloseButton: PropTypes.bool,
  allowScroll: PropTypes.bool,
};

Overlay.defaultPropTypes = {
  id: '',
};

export default Overlay;
