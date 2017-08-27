import React from 'react';
import { expect } from 'chai';
import { spy } from 'sinon';
import { shallow } from 'enzyme';

import { NotesOverlay } from './ContactUs';
import styles from './ContactUs.scss';
import { Overlay, RCUIButton } from './../../../../common';

describe('NotesOverlay', () => {
  const passedProps = {
    saveFn: spy(),
    closeFn: spy(),
    images: [
      { alt: 'some alt', url: 'some url' },
      { alt: 'another alt', url: 'another url' },
    ],
    channel: 'some channel',
    price: 'some price',
    streetAddress: 'some street',
    suburbAddress: 'some suburb',
    floorOrLandArea: 'some floor',
    carSpaces: 10,
    propertyTypes: ['some property'],
    note: 'some note',
  };

  let props;
  let wrapper;

  beforeEach(() => {
    props = { ...passedProps, isOpen: true };
    wrapper = shallow(<NotesOverlay {...props} />);
  });

  afterEach(() => {
    props.closeFn.reset();
    props.saveFn.reset();
  });

  describe('When rendered', () => {
    it('should display initial note value when passed as prop', () => {
      const textarea = wrapper.find(`.${styles.textarea}`);
      expect(textarea.props().defaultValue).to.equal('some note');
    });
  });

  describe('Closing the overlay', () => {
    it('should call onClose prop when Overlay closeFn is called', () => {
      wrapper.find(Overlay).props().closeFn();

      expect(props.closeFn.called).to.equal(true);
    });

    it('should call onClose when "Cancel" button is clicked', () => {
      const cancelButton = wrapper.find(RCUIButton).get(1);
      cancelButton.props.onClickHandler();

      expect(props.closeFn.called).to.equal(true);
    });
  });

  describe('Saving the overlay', () => {
    let saveButton;
    const updateTextarea = value =>
      (wrapper.find(`.${styles.textarea}`).simulate('change', { target: { value } })
    );

    beforeEach(() => {
      saveButton = wrapper.find(RCUIButton).get(0);
    });

    it('should save note when content is different to initial content', () => {
      updateTextarea('updated note');
      saveButton.props.onClickHandler();

      expect(props.saveFn.getCall(0).args[0]).to.equal('updated note');
    });

    it('should not save note when content is same as initial content', () => {
      updateTextarea('some note');
      saveButton.props.onClickHandler();

      expect(props.closeFn.called).to.equal(true);
    });
  });
});
