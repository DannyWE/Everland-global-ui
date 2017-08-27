import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { getClassNameFromComposed } from '../../../../../test/utils';
import Attributes from './Attributes';

import styles from './Attributes.scss';

describe('Attributes', () => {
  it('should compose a className when passed as prop', () => {
    const props = { attributesClasses: '.someClass' };
    const wrapper = shallow(<Attributes {...props} />);
    const container = getClassNameFromComposed(styles, 'container');

    expect(wrapper.find(`.${container}`).prop('className')).to.contain('.someClass');
  });

  describe('floorOrLandArea', () => {
    it('should render floorOrLandArea when passed as prop', () => {
      const props = { floorOrLandArea: '123m²' };
      const wrapper = shallow(<Attributes {...props} />);
      const floorOrLandArea = getClassNameFromComposed(styles, 'floorOrLandArea');

      expect(wrapper.find(`.${floorOrLandArea}`)).to.have.length(1);
    });

    it('should not be rendered when floorOrLandArea is null', () => {
      const props = {};
      const wrapper = shallow(<Attributes {...props} />);
      const floorOrLandArea = getClassNameFromComposed(styles, 'floorOrLandArea');

      expect(wrapper.find(`.${floorOrLandArea}`)).to.have.length(0);
    });
  });

  describe('carSpaces', () => {
    it('should render carSpaces when passed as prop', () => {
      const props = { carSpaces: 50 };
      const wrapper = shallow(<Attributes {...props} />);
      const carSpaces = getClassNameFromComposed(styles, 'carSpaces');

      expect(wrapper.find(`.${carSpaces}`)).to.have.length(1);
    });

    it('should not be rendered when carSpaces are null', () => {
      const props = {};
      const wrapper = shallow(<Attributes {...props} />);
      const carSpaces = getClassNameFromComposed(styles, 'carSpaces');

      expect(wrapper.find(`.${carSpaces}`)).to.have.length(0);
    });
  });

  describe('propertyTypes', () => {
    it('should render propertyTypes when passed as prop', () => {
      const props = { propertyTypes: ['foo', 'bar'] };
      const wrapper = shallow(<Attributes {...props} />);
      const propertyTypes = getClassNameFromComposed(styles, 'propertyTypes');

      expect(wrapper.find(`.${propertyTypes}`)).to.have.length(1);
    });

    it('should render the correct text output', () => {
      const tests = [
        {
          propertyTypes: ['foo', 'bar', 'wee', 'yo'],
          result: 'foo•bar•wee•yo',
        },
        {
          propertyTypes: ['foo'],
          result: 'foo',
        },
        {
          propertyTypes: ['foo', 'bar'],
          result: 'foo•bar',
        },
      ];

      tests.forEach(({ propertyTypes, result }) => {
        const wrapper = shallow(<Attributes propertyTypes={propertyTypes} />);

        expect(wrapper.text()).to.equal(result);
      });
    });

    it('should not be rendered when propertyTypes are empty', () => {
      const props = { propertyTypes: [] };
      const wrapper = shallow(<Attributes {...props} />);
      const propertyTypes = getClassNameFromComposed(styles, 'propertyTypes');

      expect(wrapper.find(`.${propertyTypes}`)).to.have.length(0);
    });

    it('should not be rendered when propertyTypes are null', () => {
      const props = {};
      const wrapper = shallow(<Attributes {...props} />);
      const propertyTypes = getClassNameFromComposed(styles, 'propertyTypes');

      expect(wrapper.find(`.${propertyTypes}`)).to.have.length(0);
    });
  });
});
