'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  line-height: 0;\n  display: flex;\n  background-color: ', ';\n  border-radius: 50%;\n  height: ', 'px;\n  width: ', 'px;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-weight: 300;\n  color: white;\n\n  img {\n\t   border-radius: 50%;\n  }\n\n  &:hover {\n\n  }\n'], ['\n  line-height: 0;\n  display: flex;\n  background-color: ', ';\n  border-radius: 50%;\n  height: ', 'px;\n  width: ', 'px;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-weight: 300;\n  color: white;\n\n  img {\n\t   border-radius: 50%;\n  }\n\n  &:hover {\n\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AvatarWrapper = _styledComponents2.default.div(_templateObject, (0, _theme.themeProp)('colors.pinkross'), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
/** Avatar showing the picture of user with first letter of username. */
var Avatar = function Avatar(_ref) {
  var className = _ref.className,
      name = _ref.name,
      size = _ref.size,
      rest = _objectWithoutProperties(_ref, ['className', 'name', 'size']);

  return _react2.default.createElement(
    AvatarWrapper,
    Object.assign({}, rest, {
      size: size
    }),
    name.substr(0, 1)
  );
};

Avatar.propTypes = {
  /** Custom CSS Classname */
  className: _propTypes2.default.string,
  /** Size of avatar picture */
  size: _propTypes2.default.number,
  /** Username */
  name: _propTypes2.default.string
};

Avatar.defaultProps = {
  className: '',
  name: 'Name',
  size: 38
};

exports.default = Avatar;