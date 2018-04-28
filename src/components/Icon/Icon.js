/**
*
* Icon
*
*/

import React from 'react';
import PropTypes from 'prop-types';

/** Name. */
const Icon = ({
  className,
  ...rest,
}) => {
  return (
    <i className={className} {...rest} />
  )
}

Icon.propTypes = {
  className: PropTypes.string,
};

Icon.defaultProps = {
  className: '',
};

export default Icon
