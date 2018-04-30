import React from 'react'
import PropTypes from 'prop-types';

/** Name. */
class CustomLink extends React.Component {
  render() {
    const {
      link,
      path,
      icon,
      title,
      children,
      ...rest,
    } = this.props

    // Normal link
    if (link) {
      return React.createElement('a', { href: link, ...rest}, children)
    }

    // React link
  }
}

CustomLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.string,
  link: PropTypes.string,
  onMouseOver: PropTypes.func,
  path: PropTypes.string,
  title: PropTypes.string,
}

CustomLink.defaultProps = {
  children: null,
  className: null,
  icon: null,
  link: null,
  onMouseOver: null,
  path: null,
  title: null,
}

export default CustomLink
