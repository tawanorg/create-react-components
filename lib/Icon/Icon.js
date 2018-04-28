'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                             *
                                                                                                                                                                                                                             * Icon
                                                                                                                                                                                                                             *
                                                                                                                                                                                                                             */

/** Name. */
var Icon = function Icon(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ['className']);

  return _react2.default.createElement('i', Object.assign({ className: className }, rest));
};

Icon.propTypes = {
  className: _propTypes2.default.string
};

Icon.defaultProps = {
  className: ''
};

exports.default = Icon;