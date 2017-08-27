import React from 'react';
import { spy, stub } from 'sinon';
import { mount } from 'enzyme';
import { expect } from 'chai';

import Overlay from './Overlay';
import Mask from './Mask';
import * as browserFeatures from './../../services/browserFeatures';

import styles from './Overlay.scss';

const CHILD = () => <div>Blah</div>;
const CLOSE_FN = spy();

function setup(props = {
  isOpen: true,
  closeFn: CLOSE_FN,
}) {
  const wrapper = mount(
    <Overlay {...props}>
      <CHILD />
    </Overlay>,
  );
  return {
    wrapper,
  };
}

let wrapper;

describe('Overlay', () => {
  beforeEach(() => {
    wrapper = setup().wrapper;
  });

  it('should render children and mask', () => {
    expect(wrapper.find(CHILD)).to.have.length(1);
    expect(wrapper.find(Mask)).to.have.length(1);
  });

  it('should close when props are changed', () => {
    expect(wrapper.find(`.${styles.show}`)).to.have.length(1);

    wrapper = setup({
      isOpen: false,
      closeFn: CLOSE_FN,
    }).wrapper;

    expect(wrapper.find(`.${styles.hide}`)).to.have.length(1);
  });

  it('should call closeFn when the ESC key is pressed', () => {
    expect(wrapper.find(`.${styles.show}`)).to.have.length(1);

    wrapper.simulate('keydown', {
      keyCode: 27,
    });

    expect(CLOSE_FN.called).to.equal(true);
  });

  it('should apply noScroll class to html tag when open', () => {
    const html = document.getElementsByTagName('html')[0];

    expect(html.classList.contains(styles.noScroll)).to.eql(true);
  });

  it('should remove noScroll class to html when closed', () => {
    const html = document.getElementsByTagName('html')[0];

    wrapper.unmount();

    expect(html.classList.contains(styles.noScroll)).to.eql(false);
  });

  it('should call closeFn when the mask is clicked', () => {
    expect(wrapper.find(`.${styles.show}`)).to.have.length(1);

    wrapper.find(Mask).simulate('click');

    expect(CLOSE_FN.called).to.equal(true);
  });

  it('should render a close button by default', () => {
    wrapper = setup({
      isOpen: false,
    }).wrapper;

    expect(wrapper.find('button')).to.have.length(1);
  });

  it('should not render a close button when not needed', () => {
    wrapper = setup({
      isOpen: false,
      hideCloseButton: true,
    }).wrapper;

    expect(wrapper.find('button')).to.have.length(0);
  });

  it('should not apply the noScroll class to html when allowScroll is true ', () => {
    wrapper.unmount();
    wrapper = setup({
      isOpen: true,
      allowScroll: true,
    }).wrapper;

    const html = document.getElementsByTagName('html')[0];

    expect(html.classList.contains(styles.noScroll)).to.eql(false);
  });

  describe('Testing IOS devices', () => {
    let getIOSVersionStub;
    let isTouchDeviceStub;
    let isIOSStub;

    beforeEach(() => {
      getIOSVersionStub = stub(browserFeatures, 'getIOSVersion');
      isTouchDeviceStub = stub(browserFeatures, 'isTouchDevice').returns(true);
      isIOSStub = stub(browserFeatures, 'isIOS').returns(true);

      wrapper = setup({ isOpen: false }).wrapper;
    });

    afterEach(() => {
      getIOSVersionStub.restore();
      isTouchDeviceStub.restore();
      isIOSStub.restore();
    });

    describe('When IOS version is 9', () => {
      beforeEach(() => {
        getIOSVersionStub.returns(9);
      });

      it('should apply inline styles to the overlay', () => {
        document.body.scrollTop = 0;
        wrapper.setState({ isOpen: true });

        expect(wrapper.find(`.${styles.overlay}`).props().style).to.eql({
          top: '0px',
          transform: 'translate(-50%)',
          marginTop: '70px',
        });
      });

      it('should pass the scroll top from the document to the modal when open', () => {
        document.body.scrollTop = 1000;
        wrapper.setState({ isOpen: true });

        expect(wrapper.find(`.${styles.overlay}`).props().style.top).to.equal('1000px');
      });
    });

    describe('When IOS version is > 9', () => {
      beforeEach(() => {
        getIOSVersionStub.returns(10);
      });

      it('should apply inline styles to the overlay', () => {
        document.body.scrollTop = 0;
        wrapper.setState({ isOpen: true });

        expect(wrapper.find(`.${styles.overlay}`).props().style).to.eql({
          top: '0px',
          transform: 'translate(-50%)',
          marginTop: '70px',
        });
      });

      it('should pass the scroll top from the document to the modal when open', () => {
        document.body.scrollTop = 1000;
        wrapper.setState({ isOpen: true });

        expect(wrapper.find(`.${styles.overlay}`).props().style.top).to.equal('0px');
      });
    });
  });
});
