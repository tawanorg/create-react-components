'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  background-color: ', ';\n  color: ', ';\n  justify-content: space-between;\n\n  a {\n    font-size: 14px;\n    font-weight: 300;\n    color: #B3B3B3;\n\n    &:hover {\n      text-decoration: none;\n    }\n\n    &.menu-link {\n      margin: 0 1rem;\n      font-weight: 500;\n\n      span {\n        padding-right: 0.5rem;\n        text-transform: uppercase;\n      }\n    }\n\n    &.menu-children-link {\n      color: ', ';\n      font-size: ', ';\n      padding: 5px 0;\n      display: flex;\n      font-weight: 400;\n    }\n  }\n'], ['\n  display: flex;\n  background-color: ', ';\n  color: ', ';\n  justify-content: space-between;\n\n  a {\n    font-size: 14px;\n    font-weight: 300;\n    color: #B3B3B3;\n\n    &:hover {\n      text-decoration: none;\n    }\n\n    &.menu-link {\n      margin: 0 1rem;\n      font-weight: 500;\n\n      span {\n        padding-right: 0.5rem;\n        text-transform: uppercase;\n      }\n    }\n\n    &.menu-children-link {\n      color: ', ';\n      font-size: ', ';\n      padding: 5px 0;\n      display: flex;\n      font-weight: 400;\n    }\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents2.default.div(_templateObject, (0, _theme.themeProp)('colors.darkblue'), (0, _theme.themeProp)('colors.white'), (0, _theme.themeProp)('colors.grey300'), (0, _theme.themeProp)('fontSizeNormal'));

exports.default = Wrapper;