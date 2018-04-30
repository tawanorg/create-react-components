'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  border: 1px solid ', ';\n  background-color: ', ';\n  box-shadow: 0 2px 4px 0 rgba(0,0,0, 0.3);\n  z-index: 3000;\n'], ['\n  position: absolute;\n  border: 1px solid ', ';\n  background-color: ', ';\n  box-shadow: 0 2px 4px 0 rgba(0,0,0, 0.3);\n  z-index: 3000;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Box = require('../Box');

var _Box2 = _interopRequireDefault(_Box);

var _theme = require('../theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /**
                                                                                                                                                  *
                                                                                                                                                  * ArrowDropdown
                                                                                                                                                  *
                                                                                                                                                  */

var ArrowDropdownWrapper = _Box2.default.extend(_templateObject, (0, _theme.themeProp)('colors.grey'), (0, _theme.themeProp)('colors.white'));
/** Arrow Dropdown. */
var ArrowDropdown = function ArrowDropdown(_ref) {
  var className = _ref.className,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ['className', 'children']);

  return _react2.default.createElement(
    ArrowDropdownWrapper,
    Object.assign({
      className: className
    }, rest),
    children
  );
};

ArrowDropdown.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.node
};

ArrowDropdown.defaultProps = {
  className: '',
  children: null
};

exports.default = ArrowDropdown;