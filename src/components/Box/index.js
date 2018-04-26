/**
*
* Box
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
  top,
  right,
  bottom,
  left,
  fontSize,
} from 'styled-system'

const Box = ({
  className,
  children,
}) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

Box.propTypes = {
  className: PropTypes.string,
};

Box.defaultProps = {
  className: '',
};

export default styled(Box)`
  ${position}
  ${flex}
  ${space}
  ${width}
  ${flexDirection}
  ${flexBasis}
  ${justifySelf}
  ${alignSelf}
  ${flexWrap}
  ${justifyContent}
  ${alignContent}
  ${alignItems}
  ${top}
  ${right}
  ${bottom}
  ${left}
  ${fontSize}
`
