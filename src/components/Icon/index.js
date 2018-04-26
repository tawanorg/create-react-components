/**
*
* Icon
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cssSet from 'classnames'
import Box from '../Box'

const BoxI = Box.withComponent('i')

const Icon = ({
  className,
  ...rest,
}) => {
  return (
    <BoxI className={className} {...rest} />
  )
}

Icon.propTypes = {
  className: PropTypes.string,
};

Icon.defaultProps = {
  className: '',
};

export default Icon
