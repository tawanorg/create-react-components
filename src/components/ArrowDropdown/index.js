/**
*
* ArrowDropdown
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cssSet from 'classnames'
import Box from '../Box'

const ArrowDropdownWrapper = Box.extend`
  position: absolute;
  border: 1px solid ${props => props.theme.colors.grey};
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 2px 4px 0 rgba(0,0,0, 0.3);
`

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
