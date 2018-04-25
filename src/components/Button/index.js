/**
*
* Button
*
*/

import { createElement } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cssSet from 'classnames'

const DEFAULT_BUTTON = 'default';
const ALL_BUTTONS = [
  'primary',
  'secondary',
  'dark',
  'danger',
];

const getValidButtonTypes = (type) => {
  const btnType = Object.keys(type).reduce((d) => d);
  const isValidBtn = ALL_BUTTONS.includes(btnType);
  if (isValidBtn) {
    return btnType;
  }

  return DEFAULT_BUTTON;
};

const Button = ({
  children,
  className,
  onClick: handleOnClick,
  disabled,
  autofocus,
  ...rest
}) => {
  const buttonTypes = Object.keys(rest).length === 0 ? DEFAULT_BUTTON : getValidButtonTypes(rest);
  return createElement('button', {
    className: cssSet(`btn btn-${buttonTypes}`, className, {
      'disabled': disabled,
    }),
    onClick: !disabled && handleOnClick,
    autofocus,
  }, children);
};

Button.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  autofocus: PropTypes.bool,
};

Button.defaultProps = {
  children: 'Button Text',
  className: '',
  onClick: null,
  disabled: false,
  autofocus: false,
};

export default styled(Button)`
  min-width: 120px;

  &.btn-default {
    border: 1px solid ${props => props.theme.colors.grey};
    background-color: ${props => props.theme.colors.secondary};
  }

  &.btn-primary {
    background-color: ${props => props.theme.colors.blue};
    border-color: ${props => props.theme.colors.blue};
  }

  &.btn-secondary {
    background-color: white;
    color: #333;
    border-color: ${props => props.theme.colors.lightgrey};
  }

  &.disabled {
    opacity: 0.6;
  }
`;
