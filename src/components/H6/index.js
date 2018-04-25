/**
*
* H6
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const H6 = ({
  className,
  children,
}) => (
  <h6 className={className}>
    {children}
  </h6>
  );

H6.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
};

H6.defaultProps = {
  className: '',
  children: 'H6 Text',
};

export default styled(H6)`
  color: ${props => props.theme.colors.darkblue}
`;
