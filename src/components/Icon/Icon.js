/**
*
* Icon
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import {
  fontSize,
  position,
  top,
  right,
  left,
  bottom,
  propTypes
} from 'styled-system'

const I = styled.i`
  ${fontSize}
  ${position}
  ${top}
  ${right}
  ${left}
  ${bottom}
`

/** Name. */
const Icon = ({
  className,
  ...rest,
}) => {
  return (
    <I className={className} {...rest} />
  )
}

Icon.propTypes = {
  className: PropTypes.string,
  ...propTypes.fontSize,
  ...propTypes.position,
  ...propTypes.top,
  ...propTypes.right,
  ...propTypes.left,
  ...propTypes.bottom,
};

Icon.defaultProps = {
  className: '',
};

export default Icon
