'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /**
                                                                                                                                                  *
                                                                                                                                                  * Icon
                                                                                                                                                  *
                                                                                                                                                  */

var I = _styledComponents2.default.i(_templateObject, _styledSystem.fontSize, _styledSystem.position, _styledSystem.top, _styledSystem.right, _styledSystem.left, _styledSystem.bottom);

/** Name. */
var Icon = function Icon(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ['className']);

  return _react2.default.createElement(I, Object.assign({ className: className }, rest));
};

Icon.propTypes = Object.assign({
  className: _propTypes2.default.string
}, _styledSystem.propTypes.fontSize, _styledSystem.propTypes.position, _styledSystem.propTypes.top, _styledSystem.propTypes.right, _styledSystem.propTypes.left, _styledSystem.propTypes.bottom);

Icon.defaultProps = {
  className: ''
};

exports.default = Icon;