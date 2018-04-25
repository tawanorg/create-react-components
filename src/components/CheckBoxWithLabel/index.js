/**
*
* CheckBoxWithLabel
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CheckBoxWithLabel = ({
  children,
  data,
  name,
  className,
  onClick,
  checked,
}) => (
  <div className={`custom-control custom-checkbox ${className}`}>
    <input type="checkbox" className="custom-control-input" id={name} checked={checked} />
    <label
      className="custom-control-label"
      htmlFor={name}
      onClick={e => onClick && onClick(e, data)}
    >
      {children}
    </label>
  </div>
  );

CheckBoxWithLabel.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object,
  name: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
  onClick: PropTypes.func,
  checked: PropTypes.bool,
};

CheckBoxWithLabel.defaultProps = {
  data: null,
  name: 'CheckboxName',
  className: null,
  onClick: null,
  checked: false,
};

export default styled(CheckBoxWithLabel)`
  label {
    cursor: pointer;
  }
`;
