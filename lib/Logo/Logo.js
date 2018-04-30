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
                                                                                                                                                                                                                             * Logo
                                                                                                                                                                                                                             *
                                                                                                                                                                                                                             */

/** Name. */
var Logo = function Logo(_ref) {
  var className = _ref.className,
      src = _ref.src,
      rest = _objectWithoutProperties(_ref, ['className', 'src']);

  if (!src) {
    return null;
  }

  return _react2.default.createElement('img', Object.assign({ alt: 'logo text', src: src }, rest));
};

Logo.propTypes = {
  className: _propTypes2.default.string,
  src: _propTypes2.default.string
};

Logo.defaultProps = {
  className: '',
  src: null
};

exports.default = Logo;