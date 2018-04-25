/**
*
* StaticModal
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StaticModal = ({
  children,
  className,
  customFooter,
  title,
}) => (
  <div className={`modal-content ${className}`}>
    <div className="modal-header">
      <span className="modal-title">{title}</span>
    </div>
    <div className="modal-body">
      {children}
    </div>
    {customFooter && customFooter()}
  </div>
  );

StaticModal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  customFooter: PropTypes.func,
  title: PropTypes.string,
};

StaticModal.defaultProps = {
  className: null,
  customFooter: null,
  title: 'Modal Title Text',
};

export default StaticModal;
