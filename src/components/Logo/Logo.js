/**
*
* Logo
*
*/

import React from 'react';
import PropTypes from 'prop-types';

/** Name. */
const Logo = ({
  className,
  src,
  ...rest,
}) => {
  if (!src) {
    return null
  }

  return (
    <img alt="logo text" src={src} {...rest} />
  )
}

Logo.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
};

Logo.defaultProps = {
  className: '',
  src: null,
};

export default Logo
