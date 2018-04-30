'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.themeProp = undefined;

var _get = require('lodash/get');

var _get2 = _interopRequireDefault(_get);

var _defaultTheme = require('./theme/defaultTheme');

var theme = _interopRequireWildcard(_defaultTheme);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns the value of `props[path]` or `defaultValue`
 * @example
 * const Button = styled.button`
 *  color: ${prop('color.red')};
 * `
 */
var themeProp = exports.themeProp = function themeProp(path, defaultValue) {
  return function (props) {
    return (0, _get2.default)(props.theme, path, defaultValue);
  };
};

exports.default = theme;