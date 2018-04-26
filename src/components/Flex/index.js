/**
*
* Flex
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cssSet from 'classnames'
import {
  flex,
  space,
  width,
  flexDirection,
  flexBasis,
  justifySelf,
  alignSelf,
  flexWrap,
  justifyContent,
  alignContent,
  alignItems,
  position,
  propTypes,
} from 'styled-system'

const Flex = ({
  className,
  children,
}) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

Flex.propTypes = {
  className: PropTypes.string,
};

Flex.defaultProps = {
  className: '',
};

export default styled(Flex)`
  display: flex;
  ${position} ${flex} ${space} ${width} ${flexDirection} ${flexBasis} ${justifySelf} ${alignSelf} ${flexWrap} ${justifyContent} ${alignContent} ${alignItems}
`
