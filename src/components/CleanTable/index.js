/**
*
* CleanTable
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CleanTable = ({
  className,
  children,
}) => (
  <table className={`table ${className}`}>
    {children}
  </table>
  );

CleanTable.propTypes = {
  className: PropTypes.string,
};

CleanTable.defaultProps = {
  className: null,
};

export default styled(CleanTable)`
  td,
  th {
    font-weight: inherit;
    border-top: none;
    border-bottom: 1px solid #dee2e6;
    padding-left: 0;
  }
`;
