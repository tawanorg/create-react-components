import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { themeProp } from '../theme'

const AvatarWrapper = styled.div`
  line-height: 0;
  display: flex;
  background-color: ${themeProp('colors.pinkross')};
  border-radius: 50%;
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 300;
  color: white;

  img {
	   border-radius: 50%;
  }

  &:hover {

  }
`
/** Avatar showing the picture of user with first letter of username. */
const Avatar = ({
  className,
  name,
  size,
  ...rest,
}) => {
  return (
    <AvatarWrapper
      {...rest}
      size={size}
    >
      {name.substr(0, 1)}
    </AvatarWrapper>
  )
}

Avatar.propTypes = {
  /** Custom CSS Classname */
  className: PropTypes.string,
  /** Size of avatar picture */
  size: PropTypes.number,
  /** Username */
  name: PropTypes.string,
};

Avatar.defaultProps = {
  className: '',
  name: 'Name',
  size: 38,
};

export default Avatar
