import React from 'react';
import PropTypes from 'prop-types';

/** Display Icon Image. */
const EyeIcon = ({
  className,
  src,
  alt,
  ...rest,
}) => {
  return (
    <img alt={alt} src={src} {...rest} />
  )
}

EyeIcon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default EyeIcon
