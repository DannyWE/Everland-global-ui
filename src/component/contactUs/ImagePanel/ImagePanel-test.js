import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ImagePanel from './ImagePanel';
import ChannelBadge from './ChannelBadge/ChannelBadge';
import { LazyImage } from './../../../../common';
import CameraImage from './img/camera.svg';

import styles from './ImagePanel.scss';

describe('Image Panel', () => {
  const props = {
    imagePanelClasses: '.someClass',
    images: [
      { alt: 'some alt', url: 'some url' },
      { alt: 'another alt', url: 'another url' },
    ],
    channel: 'Buy',
  };

  it('should render a LazyImage component with loading image', () => {
    const wrapper = shallow(<ImagePanel {...props} />);
    const image = wrapper.find(LazyImage);
    const imageProps = image.props();

    expect(imageProps.className).to.contain(styles.image);
    expect(imageProps.src).to.equal('some url');
    expect(imageProps.alt).to.equal('some alt');
    expect(imageProps.loadingImage()).to.eql(CameraImage());
  });

  it('should render Channel Badge', () => {
    const wrapper = shallow(<ImagePanel {...props} />);

    expect(wrapper.find(ChannelBadge).length).to.equal(1);
  });

  it('should accept passed style', () => {
    const wrapper = shallow(<ImagePanel {...props} />);

    expect(wrapper.find('div').prop('className')).to.contain('.someClass');
  });

  it('should not render the image if it is not provided', () => {
    expect(shallow(<ImagePanel channel="Buy" />).find(`.${styles.image}`).length).to.equal(0);
    expect(shallow(<ImagePanel images={[]} channel="Buy" />).find(`.${styles.image}`).length).to.equal(0);
    expect(shallow(<ImagePanel images={null} channel="Buy" />).find(`.${styles.image}`).length).to.equal(0);
  });
});
