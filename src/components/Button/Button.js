import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { width, propTypes } from 'styled-system'

const ButtonStyled = styled.div`
  border: 1px solid ${props => props.theme.button.borderColor};
  ${width};
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
  ...propTypes.width,
};

export default Button;
