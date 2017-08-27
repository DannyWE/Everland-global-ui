import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';

import LazyImage from './LazyImage';
import styles from './LazyImage.scss';

const onLoadSpy = spy();

describe('LazyImage', () => {
  let props;
  let wrapper;
  let image;
  let imageProps;
  const LoadingImage = () => (<img alt="test" />);

  beforeEach(() => {
    props = {
      src: 'some/foo',
      alt: 'image',
      onLoad: onLoadSpy,
      loadingImage: LoadingImage,
    };

    wrapper = shallow(<LazyImage {...props} />);
    image = wrapper.find('img');
    imageProps = image.props();
  });

  afterEach(() => {
    onLoadSpy.reset();
  });

  it('should render an <img /> with props', () => {
    expect(image.length).to.equal(1);
    expect(imageProps.src).to.equal('some/foo');
    expect(imageProps.alt).to.equal('image');
    expect(imageProps.className).to.contain(styles.hidden);
  });

  it('should call the onLoad callback when image has loaded', () => {
    imageProps.onLoad();
    expect(props.onLoad.called).to.equal(true);
  });

  it('should compose a className when provided as prop', () => {
    wrapper.setProps({ className: 'myClassName' });

    expect(wrapper.find('img').props().className).to.contain('myClassName');
  });

  it('should display a loading image when loading, and hidden when not', () => {
    expect(wrapper.find(LoadingImage).length).to.equal(1);

    wrapper.instance().handleImageLoad();

    expect(wrapper.find(LoadingImage).length).to.equal(0);
  });
});
