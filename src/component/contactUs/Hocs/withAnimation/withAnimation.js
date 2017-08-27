import React from 'react';
import styled from 'styled-components';

import keyframeAnimations from './utils/keyframeAnimations';

const Animated = styled.span`
  ${({
    type = 'fadeIn',
    duration = '300ms',
    direction = 'forwards',
    easing = 'ease-in',
    styles = '',
  }) => (`
    animation: ${keyframeAnimations[type]} ${duration} ${direction} ${easing};
    ${styles}
  `)}
`;

const withAnimation = WrappedComponent => ({
  animation,
  styles,
}) => props => (
  <Animated {...animation} styles={styles}>
    <WrappedComponent {...props} />
  </Animated>
);

export default withAnimation;
