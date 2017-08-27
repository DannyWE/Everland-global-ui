import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Details from './Details';
import Attributes from './../Attributes/Attributes';
import styles from './Details.scss';
import { getClassNameFromComposed } from './../../../../../test/utils';

describe('Details', () => {
  const props = {
    detailsClasses: '.someDetailsClasses',
    attributesClasses: '.someAttributesClasses',
    price: 'some price',
    streetAddress: 'some street',
    suburbAddress: 'some suburb',
    floorOrLandArea: 'some floor',
    carSpaces: 10,
    propertyTypes: ['some property'],
  };

  it('should render Attributes component', () => {
    const wrapper = shallow(<Details {...props} />);

    expect(wrapper.find(Attributes).length).to.equal(1);
  });

  it('should compose a className when passed as prop', () => {
    const wrapper = shallow(<Details {...props} />);
    const container = getClassNameFromComposed(styles, 'container');

    expect(wrapper.find(`.${container}`).prop('className')).to.contain('.someDetailsClasses');
    expect(wrapper.find(Attributes).prop('attributesClasses')).to.equal('.someAttributesClasses');
  });

  it('should render passed props', () => {
    const priceClassName = getClassNameFromComposed(styles, 'price');
    const streetClassName = getClassNameFromComposed(styles, 'street');
    const suburbClassName = getClassNameFromComposed(styles, 'suburb');
    const wrapper = shallow(<Details {...props} />);

    expect(wrapper.find(`.${priceClassName}`).text()).to.equal('some price');
    expect(wrapper.find(`.${streetClassName}`).text()).to.equal('some street');
    expect(wrapper.find(`.${suburbClassName}`).text()).to.equal('some suburb');
  });
});
