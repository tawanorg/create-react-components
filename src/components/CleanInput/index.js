/**
*
* CleanInput
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const CleanInput = ({
  data,
  className,
  label,
  value,
  onChange,
  onFocus,
  kind,
  ...rest,
}) => (
  <div className={className}>
    {label && <label htmlFor="">{label}</label>}
    <div className="input-group">
      <input
        {...rest}
        className={`form-control ${kind}`}
        value={value}
        onChange={e => onChange && onChange(e, data)}
        onFocus={e => onFocus && onFocus(e, data)}
      />
    </div>
  </div>
  );

CleanInput.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  kind: PropTypes.oneOf(['default', 'secondary'])
};

CleanInput.defaultProps = {
  className: '',
  label: null,
  value: '',
  onChange: null,
  kind: 'default',
};

export default styled(CleanInput)`
  .form-control {
  	border-radius: 4px;
    border: 1px solid ${props => props.theme.colors.grey};
  	background-color: ${props => props.theme.colors.secondary};

    &.secondary {
      background-color: ${props => props.theme.colors.grey50};
    }
  }

`;
