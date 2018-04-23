import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ButtonStyled = styled.div`
  border: 1px solid ${props => props.theme.button.borderColor};
`

const Text = styled.label`
  color: red;
`

const Button = ({
  children,
}) => (
  <ButtonStyled>
    <Text>
      { children }
    </Text>
  </ButtonStyled>
)

Button.propTypes = {
  children: PropTypes.oneOf([PropTypes.node, PropTypes.string]),
};

Button.defaultProps = {
  children: 'Button Text',
};

export default Button;
