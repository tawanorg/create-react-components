/**
*
* Avatar
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cssSet from 'classnames'

const AvatarWrapper = styled.div`
  line-height: 0;
  display: flex;
  background-color: ${props => props.theme.colors.pinkross};
  border-radius: 50%;
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 300;

  img {
	   border-radius: 50%;
  }

  &:hover {

  }
`

const Avatar = ({
  className,
  name,
  size,
}) => {
  return (
    <AvatarWrapper size={size}>
      {name}
    </AvatarWrapper>
  )
}

Avatar.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Avatar.defaultProps = {
  className: '',
  name: 'A',
  size: 38,
};

export default Avatar
