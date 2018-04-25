/**
*
* ListItem
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const ListItem = ({
  className,
  children,
  onClick,
  value,
  ...rest
}) => React.createElement('li', {
  className,
  onClick: () => { onClick && onClick(value); },
  ...rest,
}, children);

ListItem.propTypes = {
  children: PropTypes.oneOf([PropTypes.node, PropTypes.string]),
  onClick: PropTypes.func,
  className: PropTypes.string,
  value: PropTypes.oneOf([PropTypes.string, PropTypes.object, PropTypes.array]),
};

ListItem.defaultProps = {
  children: null,
  onClick: null,
  className: '',
  value: null,
};

export default styled(ListItem)`
  display: block;
  padding: 5px;
  cursor: pointer;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey};
  &:last-child {
    border-bottom: none;
  }
  &:hover {
  	background-color: #F3F3F3;
  }
`;
