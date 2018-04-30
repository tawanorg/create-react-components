'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  color: ', ';\n'], ['\n  color: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Avatar = require('../Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _H = require('../H6');

var _H2 = _interopRequireDefault(_H);

var _Box = require('../Box');

var _Box2 = _interopRequireDefault(_Box);

var _CustomLink = require('./CustomLink');

var _CustomLink2 = _interopRequireDefault(_CustomLink);

var _theme = require('../theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ProfileWrapper = _Box2.default.extend(_templateObject, (0, _theme.themeProp)('colors.grey150'));

var ProfileDropdown = function ProfileDropdown(_ref) {
  var menus = _ref.menus,
      title = _ref.title,
      subtitle = _ref.subtitle,
      profileImageUrl = _ref.profileImageUrl,
      rest = _objectWithoutProperties(_ref, ['menus', 'title', 'subtitle', 'profileImageUrl']);

  return _react2.default.createElement(
    ProfileWrapper,
    rest,
    _react2.default.createElement(
      _Box2.default,
      { my: '0.5rem' },
      _react2.default.createElement(_Avatar2.default, {
        name: title,
        imageUrl: profileImageUrl
      })
    ),
    _react2.default.createElement(
      _Box2.default,
      { mb: '0.5rem' },
      _react2.default.createElement(
        _H2.default,
        null,
        title
      ),
      _react2.default.createElement(
        'small',
        null,
        subtitle
      )
    ),
    _react2.default.createElement(
      _Box2.default,
      null,
      menus.map(function (menu, key) {
        return _react2.default.createElement(
          _Box2.default,
          { key: key },
          _react2.default.createElement(
            _CustomLink2.default,
            Object.assign({}, menu, {
              className: 'menu-children-link'
            }),
            menu.title
          )
        );
      })
    )
  );
};

ProfileDropdown.propTypes = {
  menus: _propTypes2.default.array,
  title: _propTypes2.default.string,
  subtitle: _propTypes2.default.string,
  profileImageUrl: _propTypes2.default.string
};

ProfileDropdown.defaultProps = {
  menus: [],
  title: null,
  subtitle: null,
  profileImageUrl: null
};

exports.default = ProfileDropdown;