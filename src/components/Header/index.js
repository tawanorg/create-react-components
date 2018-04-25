/**
*
* Header
*
*/

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.section`
  background: ${(props) => props.theme.header.background};
`;

const Header = () => (
  <Wrapper>
      Header
    </Wrapper>
  );

Header.propTypes = {

};

Header.defaultProps = {

};

export default Header;
