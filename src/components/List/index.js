/**
*
* List
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ListItem from './ListItem';

const List = ({
  className,
  horizontal,
  children,
  ...rest
}) => React.createElement('ul', {
  className: `list-unstyled mb-0 ${className} ${horizontal && 'list-inline'}`,
  ...rest,
},
  React.Children.map(children, (child) => React.cloneElement(child, {
    className: horizontal ? 'list-inline-item' : null,
  })));

List.propTypes = {
  children: PropTypes.oneOf([PropTypes.node, PropTypes.string]),
  className: PropTypes.string,
  horizontal: PropTypes.bool,
};

List.defaultProps = {
  children: null,
  className: '',
  horizontal: false,
};

export default styled(List)`
  display: block;
`;
export {
  ListItem,
};
