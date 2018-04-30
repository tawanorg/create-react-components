/**
*
* ArrowDropdown
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Box from '../Box'

import { themeProp } from '../theme'

const ArrowDropdownWrapper = Box.extend`
  position: absolute;
  border: 1px solid ${themeProp('colors.grey')};
  background-color: ${themeProp('colors.white')};
  box-shadow: 0 2px 4px 0 rgba(0,0,0, 0.3);
  z-index: 3000;
`
/** Arrow Dropdown. */
const ArrowDropdown = ({
  className,
  children,
  ...rest,
}) => {
  return (
    <ArrowDropdownWrapper
      className={className}
      {...rest}
    >
      {children}
    </ArrowDropdownWrapper>
  )
}

ArrowDropdown.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

ArrowDropdown.defaultProps = {
  className: '',
  children: null,
};

export default ArrowDropdown
