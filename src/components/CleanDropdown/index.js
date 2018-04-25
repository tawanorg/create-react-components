/**
*
* CleanDropdown
*
*/

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import List, { ListItem } from 'components/List'

class CleanDropdown extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      inlineStyle: {},
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleCloseDropdown = this.handleCloseDropdown.bind(this);
    this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
    this.handleOnSelected = this.handleOnSelected.bind(this)
  }

  componentDidMount() {
    this.setState({
      inlineStyle: {
        width: ReactDOM.findDOMNode(this.dropdown).getBoundingClientRect().width,
      },
    });
  }

  handleOnMouseLeave(event) {
    event.preventDefault();
    if (this.state.isOpen) {
      this.setState({
        isOpen: false,
      });
    }
  }

  handleOnClick(event) {
    event.preventDefault();

    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  }

  handleCloseDropdown() {
    this.setState({
      isOpen: false,
    });
  }

  handleOnSelected(value, id) {
    this.props.onSelected &&
    this.props.onSelected({
      id,
      value,
    })
    this.handleCloseDropdown()
  }

  render() {
    const {
      isOpen,
      inlineStyle,
    } = this.state;

    const {
      children,
      className,
      selectedText,
      options,
      id
    } = this.props;

    const openStyle = Object.assign({}, inlineStyle, {
      position: 'absolute',
      transform: 'translate3d(0px, 38px, 0px)',
      top: -4,
      left: 0,
      willChange: 'transform',
      display: 'block',
    });

    return (
      <div
        className={`dropdown ${className}`}
        ref={(ref) => { this.dropdown = ref; }}
        onMouseLeave={this.handleOnMouseLeave}
      >
        <button
          onClick={this.handleOnClick}
          className="btn btn-block dropdown-toggle"
          type="button"
          id="dropdownMenu2"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {selectedText}
        </button>
        {
          isOpen &&
          <div
            className="dropdown-menu"
            aria-labelledby="dropdownMenu2"
            style={isOpen && openStyle}
            onMouseLeave={this.handleCloseDropdown}
          >
            <List>
              {Object.keys(options).map(key => (
                <ListItem
                  value={options[key]}
                  onClick={this.handleOnSelected.bind(this, options[key], id)}
                >
                  {options[key]}
                </ListItem>
              ))}
            </List>
          </div>
        }
      </div>
    );
  }
}

CleanDropdown.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  selectedText: PropTypes.string,
  selected: PropTypes.oneOf([PropTypes.object, PropTypes.string]),
  onSelected: PropTypes.func,
  id: PropTypes.any,
};

CleanDropdown.defaultProps = {
  children: null,
  className: null,
  selected: null,
  selectedText: 'Selected Option',
  onSelected: null,
  id: null,
};

export default styled(CleanDropdown)`
  width: 100%;

  .btn {
    text-align: left;
    border: 1px solid ${props => props.theme.colors.grey};
    background-color: ${props => props.theme.secondary};
    &:focus {
      box-shadow: none;
    }
  }

  .dropdown-toggle::after {
    right: 10px;
    top: 16px;
    position: absolute;
    vertical-align: inherit;
    margin-left: inherit;
  }

  .dropdown-menu {
    margin: 0;
    padding: 0;
    border: 1px solid ${props => props.theme.colors.grey};
    background-color: ${props => props.theme.secondary};
    min-width: auto;
  }
`;
