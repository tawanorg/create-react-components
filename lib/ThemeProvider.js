'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  font-family: ', ';\n  line-height: ', ';\n  font-size: ', ';;\n  font-weight: ', ';\n  color: ', ';\n  text-align: left;\n  background-color: ', ';\n'], ['\n  font-family: ', ';\n  line-height: ', ';\n  font-size: ', ';;\n  font-weight: ', ';\n  color: ', ';\n  text-align: left;\n  background-color: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme2 = require('./theme');

var _theme3 = _interopRequireDefault(_theme2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Base = exports.Base = _styledComponents2.default.div(_templateObject, (0, _theme2.themeProp)('fontFamily'), (0, _theme2.themeProp)('lineHeightBase'), (0, _theme2.themeProp)('fontSizeNormal'), (0, _theme2.themeProp)('fontWeightNormal'), (0, _theme2.themeProp)('bodyColor'), (0, _theme2.themeProp)('bodyBg'));

var ThemeProvider = function ThemeProvider(_ref) {
  var theme = _ref.theme,
      props = _objectWithoutProperties(_ref, ['theme']);

  var _theme = Object.assign({}, _theme3.default, theme);

  return _react2.default.createElement(
    _styledComponents.ThemeProvider,
    { theme: _theme },
    _react2.default.createElement(Base, props)
  );
};

ThemeProvider.propTypes = {
  theme: _propTypes2.default.object
};

exports.default = ThemeProvider;