/**
*
* CleanTextArea
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const CleanTextArea = ({
  className,
  label,
  ...rest
}) => {
  const {
    style: inlineStyled,
    ...attributes
  } = rest;

  return (
    <div className={className} style={{ ...inlineStyled }}>
      <label htmlFor="basic-url">{label}</label>
      <div className="input-group mb-3">
        <textarea className="form-control" aria-label="With textarea"></textarea>
      </div>
    </div>
  );
};

CleanTextArea.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
};

CleanTextArea.defaultProps = {
  label: 'Clean Textarea Text',
  className: '',
};

export default styled(CleanTextArea)`
  .form-control {
    border: 1px solid ${props => props.theme.colors.grey};
    background-color: ${props => props.theme.colors.secondary};
  }
`;
