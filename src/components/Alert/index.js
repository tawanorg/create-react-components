/**
*
* Alert
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cssSet from 'classnames'

const AlertWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  border-top: 1px solid ${props => props.theme.colors.grey100};
  border-right: 1px solid ${props => props.theme.colors.grey100};
  border-bottom: 1px solid ${props => props.theme.colors.grey100};
  padding: 1rem;

  .icon {
    flex: inherit;
    margin: 0 1rem;
  }

  .content {
    flex: 1;

    strong {
      color: ${props => props.theme.colors.black}
    }

    p {
      color: ${props => props.theme.colors.grey200};
      padding: 0;
    }
  }

  &.default {
    border-left: 3px solid ${props => props.theme.info};
  }

  &.success {
    border-left: 3px solid ${props => props.theme.success};
  }

  &.danger {
    border-left: 3px solid ${props => props.theme.danger};
  }

  &.warning {
    border-left: 3px solid ${props => props.theme.warning};
  }
`

const Alert = ({
  className,
  icon,
  title,
  subtitle,
  kind,
}) => {
  return (
    <AlertWrapper className={kind}>
      {
      icon &&
      <div className="icon">
        Icon
      </div>
      }
      <div className="content">
        <strong>{title}</strong>
        <p>{subtitle}</p>
      </div>
    </AlertWrapper>
  )
}

Alert.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  kind: PropTypes.oneOf(['default', 'success', 'danger'])
};

Alert.defaultProps = {
  className: '',
  icon: null,
  title: null,
  subtitle: null,
  kind: 'default'
};

export default Alert
