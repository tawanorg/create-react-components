'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Avatar = require('../Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _TeamBadge = require('../TeamBadge');

var _TeamBadge2 = _interopRequireDefault(_TeamBadge);

var _Flex = require('../Flex');

var _Flex2 = _interopRequireDefault(_Flex);

var _ArrowDropdown = require('../ArrowDropdown');

var _ArrowDropdown2 = _interopRequireDefault(_ArrowDropdown);

var _EyeIcon = require('../EyeIcon');

var _EyeIcon2 = _interopRequireDefault(_EyeIcon);

var _Wrapper = require('./Wrapper');

var _Wrapper2 = _interopRequireDefault(_Wrapper);

var _FlexWithDivider = require('./FlexWithDivider');

var _FlexWithDivider2 = _interopRequireDefault(_FlexWithDivider);

var _CustomLink = require('./CustomLink');

var _CustomLink2 = _interopRequireDefault(_CustomLink);

var _FlexWithButtonLink = require('./FlexWithButtonLink');

var _FlexWithButtonLink2 = _interopRequireDefault(_FlexWithButtonLink);

var _ProfileDropdown = require('./ProfileDropdown');

var _ProfileDropdown2 = _interopRequireDefault(_ProfileDropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Self components


/** Top Navigation. */
var TopNavigation = function (_React$Component) {
  _inherits(TopNavigation, _React$Component);

  function TopNavigation(props) {
    _classCallCheck(this, TopNavigation);

    var _this = _possibleConstructorReturn(this, (TopNavigation.__proto__ || Object.getPrototypeOf(TopNavigation)).call(this, props));

    _this.state = {
      openDropdown: null,
      isDropdownOpen: false,
      isProfileOpen: false,
      style: {
        clientHeight: 0
      }
    };

    _this.getMainLinks = _this.getMainLinks.bind(_this);
    _this.handleOnOpenDropdown = _this.handleOnOpenDropdown.bind(_this);
    _this.handleOnCloseDropdown = _this.handleOnCloseDropdown.bind(_this);
    _this.getWrapperStyle = _this.getWrapperStyle.bind(_this);
    _this.handleOnCloseProfile = _this.handleOnCloseProfile.bind(_this);
    _this.handleOnOpenProfile = _this.handleOnOpenProfile.bind(_this);
    return _this;
  }

  _createClass(TopNavigation, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getWrapperStyle();
    }
  }, {
    key: 'handleOnOpenDropdown',
    value: function handleOnOpenDropdown(menu) {
      this.setState({
        openDropdown: menu,
        isDropdownOpen: true
      });
    }
  }, {
    key: 'handleOnCloseDropdown',
    value: function handleOnCloseDropdown() {
      this.setState({
        isDropdownOpen: false
      });
    }
  }, {
    key: 'handleOnOpenProfile',
    value: function handleOnOpenProfile() {
      this.setState({
        isProfileOpen: true
      });
    }
  }, {
    key: 'handleOnCloseProfile',
    value: function handleOnCloseProfile() {
      this.setState({
        isProfileOpen: false
      });
    }
  }, {
    key: 'getWrapperStyle',
    value: function getWrapperStyle() {
      if (!this.navigation) {
        return;
      }

      this.setState({
        style: {
          clientHeight: _reactDom2.default.findDOMNode(this.navigation).clientHeight
        }
      });
    }
  }, {
    key: 'getMainLinks',
    value: function getMainLinks() {
      var _this2 = this;

      return this.props.mainMenus.map(function (menu, key) {
        var isHasChildren = menu.children.length > 0;
        var arrowIcon = isHasChildren ? 'zmdi zmdi-caret-down' : 'zmdi zmdi-caret-up';

        return _react2.default.createElement(
          _Flex2.default,
          {
            position: 'relative',
            key: key
          },
          _react2.default.createElement(
            _CustomLink2.default,
            Object.assign({}, menu, {
              className: 'menu-link',
              onMouseEnter: _this2.handleOnOpenDropdown.bind(_this2, menu)
            }),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'span',
                null,
                menu.title
              ),
              isHasChildren && _react2.default.createElement(_Icon2.default, { position: 'absolute', className: arrowIcon, right: '9px', top: '-2px', fontSize: '22px' })
            ),
            _this2.state.isDropdownOpen && _this2.state.openDropdown && _this2.state.openDropdown.link === menu.link && isHasChildren > 0 && _react2.default.createElement(
              _ArrowDropdown2.default,
              {
                width: '220px',
                position: 'relative',
                top: _this2.state.style.clientHeight / 2,
                left: '-0.1rem',
                p: '5px 10px'
              },
              menu.children.map(function (childItem, key) {
                return _react2.default.createElement(
                  _CustomLink2.default,
                  Object.assign({}, childItem, {
                    key: key,
                    className: 'menu-children-link'
                  }),
                  childItem.title
                );
              })
            )
          )
        );
      });
    }
  }, {
    key: 'renderProfile',
    value: function renderProfile() {
      var _props = this.props,
          profileMenus = _props.profileMenus,
          userData = _props.userData;

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(_Avatar2.default, {
          name: userData.fullname,
          onMouseOver: this.handleOnOpenProfile
        }),
        this.state.isProfileOpen && _react2.default.createElement(
          _ArrowDropdown2.default,
          {
            width: '220px',
            position: 'relative',
            top: this.state.style.clientHeight + 1,
            right: '1rem',
            p: '5px 10px'
          },
          _react2.default.createElement(_ProfileDropdown2.default, {
            title: userData.fullname,
            subtitle: userData.clubname,
            menus: profileMenus
          })
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var teamData = this.props.teamData;


      return _react2.default.createElement(
        _Wrapper2.default,
        { ref: function ref(_ref) {
            _this3.navigation = _ref;
          } },
        _react2.default.createElement(
          _Flex2.default,
          {
            p: '1.032rem',
            alignItems: 'center',
            onMouseLeave: this.handleOnCloseDropdown
          },
          _react2.default.createElement(_EyeIcon2.default, {
            src: 'https://testing-sportstg.cs57.force.com/SportsTGAdmins/resource/STG_Brand_Mark',
            alt: 'STG Logo',
            height: 31
          }),
          this.getMainLinks()
        ),
        _react2.default.createElement(
          _Flex2.default,
          null,
          _react2.default.createElement(
            _FlexWithButtonLink2.default,
            { mx: '1rem' },
            _react2.default.createElement(
              'button',
              null,
              _react2.default.createElement(_Icon2.default, { className: 'zmdi zmdi-search', right: '0', top: '0', fontSize: '22px' })
            ),
            _react2.default.createElement(
              'button',
              null,
              _react2.default.createElement(_Icon2.default, { className: 'zmdi zmdi-settings', right: '0', top: '0', fontSize: '22px' })
            ),
            _react2.default.createElement(
              'button',
              null,
              _react2.default.createElement(_Icon2.default, { className: 'zmdi zmdi-help-outline', right: '0', top: '0', fontSize: '22px' })
            )
          ),
          _react2.default.createElement(
            _FlexWithDivider2.default,
            { px: '1rem', alignItems: 'center' },
            _react2.default.createElement(_TeamBadge2.default, teamData)
          ),
          _react2.default.createElement(
            _Flex2.default,
            {
              position: 'relative',
              px: '1rem',
              alignItems: 'center',
              onMouseLeave: this.handleOnCloseProfile
            },
            this.renderProfile()
          )
        )
      );
    }
  }]);

  return TopNavigation;
}(_react2.default.Component);

TopNavigation.propTypes = {
  mainMenus: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    title: _propTypes2.default.string,
    path: _propTypes2.default.string,
    link: _propTypes2.default.string,
    icon: _propTypes2.default.string,
    children: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      title: _propTypes2.default.string,
      path: _propTypes2.default.string,
      link: _propTypes2.default.string,
      icon: _propTypes2.default.string,
      children: _propTypes2.default.array
    }))
  })),
  actionMenus: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    title: _propTypes2.default.string,
    path: _propTypes2.default.string,
    link: _propTypes2.default.string,
    icon: _propTypes2.default.string,
    children: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      title: _propTypes2.default.string,
      path: _propTypes2.default.string,
      link: _propTypes2.default.string,
      icon: _propTypes2.default.string,
      children: _propTypes2.default.array
    }))
  })),
  profileMenus: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    title: _propTypes2.default.string,
    path: _propTypes2.default.string,
    link: _propTypes2.default.string,
    icon: _propTypes2.default.string,
    children: _propTypes2.default.array
  })),
  teamData: _propTypes2.default.shape({
    title: _propTypes2.default.string,
    subtitle: _propTypes2.default.string,
    logo: _propTypes2.default.string
  }),
  userData: _propTypes2.default.shape({
    fullname: _propTypes2.default.string,
    clubname: _propTypes2.default.string,
    profileImageUrl: _propTypes2.default.string
  })
};

TopNavigation.defaultProps = {
  mainMenus: [],
  actionMenus: [],
  profileMenus: [],
  teamData: {
    title: null,
    subtitle: null,
    logo: null
  },
  userData: {
    fullname: null,
    clubname: null,
    profileImageUrl: null
  }
};

exports.default = TopNavigation;