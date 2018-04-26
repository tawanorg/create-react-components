/**
*
* Logo
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cssSet from 'classnames'
import Box from '../Box'

import logo from '../../img/STG.png'

const Logo = ({
  className,
  ...rest,
}) => {
  return (
    <img src={logo} />
  )
}

Logo.propTypes = {
  className: PropTypes.string,
};

Logo.defaultProps = {
  className: '',
};

export default styled(Logo)`
  position: absolute;
`
