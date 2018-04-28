'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** Name. */
var CustomLink = function (_React$Component) {
  _inherits(CustomLink, _React$Component);

  function CustomLink() {
    _classCallCheck(this, CustomLink);

    return _possibleConstructorReturn(this, (CustomLink.__proto__ || Object.getPrototypeOf(CustomLink)).apply(this, arguments));
  }

  _createClass(CustomLink, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          link = _props.link,
          path = _props.path,
          icon = _props.icon,
          title = _props.title,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['link', 'path', 'icon', 'title', 'children']);

      // Normal link


      if (link) {
        return _react2.default.createElement('a', Object.assign({ href: link }, rest), children);
      }

      // React link
    }
  }]);

  return CustomLink;
}(_react2.default.Component);

CustomLink.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  icon: _propTypes2.default.string,
  link: _propTypes2.default.string,
  onMouseOver: _propTypes2.default.func,
  path: _propTypes2.default.string,
  title: _propTypes2.default.string
};

CustomLink.defaultProps = {
  children: null,
  className: null,
  icon: null,
  link: null,
  onMouseOver: null,
  path: null,
  title: null
};

exports.default = CustomLink;