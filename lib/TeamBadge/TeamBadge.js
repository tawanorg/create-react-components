'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-size: small;\n  font-weight: 300;\n\n  small {\n    color: white;\n    text-transform: uppercase;\n  }\n  span {\n    color: ', ';\n    opacity: 0.7;\n  }\n\n  .team-logo {\n\n  }\n'], ['\n  font-size: small;\n  font-weight: 300;\n\n  small {\n    color: white;\n    text-transform: uppercase;\n  }\n  span {\n    color: ', ';\n    opacity: 0.7;\n  }\n\n  .team-logo {\n\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Flex = require('../Flex');

var _Flex2 = _interopRequireDefault(_Flex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /**
                                                                                                                                                  *
                                                                                                                                                  * TeamBadge
                                                                                                                                                  *
                                                                                                                                                  */

/** Name. */
var TeamBadgeWrapper = _Flex2.default.extend(_templateObject, function (props) {
  return props.theme.colors.white;
});

var TeamBadge = function TeamBadge(_ref) {
  var className = _ref.className,
      logo = _ref.logo,
      title = _ref.title,
      subtitle = _ref.subtitle;

  return _react2.default.createElement(
    TeamBadgeWrapper,
    { alignItems: 'center', className: className },
    logo && _react2.default.createElement(
      _Flex2.default,
      { mr: '1rem' },
      _react2.default.createElement('img', { alt: subtitle, src: logo, className: 'rounded', height: '40' })
    ),
    _react2.default.createElement(
      _Flex2.default,
      { flexDirection: 'column' },
      _react2.default.createElement(
        _Flex2.default,
        null,
        _react2.default.createElement(
          'small',
          null,
          title
        )
      ),
      _react2.default.createElement(
        _Flex2.default,
        null,
        _react2.default.createElement(
          'span',
          null,
          subtitle
        )
      )
    )
  );
};

TeamBadge.propTypes = {
  className: _propTypes2.default.string,
  logo: _propTypes2.default.string,
  title: _propTypes2.default.string,
  subtitle: _propTypes2.default.string
};

TeamBadge.defaultProps = {
  className: '',
  logo: null,
  title: null,
  subtitle: null
};

exports.default = TeamBadge;