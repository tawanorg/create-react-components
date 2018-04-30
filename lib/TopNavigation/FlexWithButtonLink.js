'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  button {\n    border: 0;\n    background: transparent;\n    color: ', '\n    opacity: 0.7;\n    margin: 0 5px;\n  }\n'], ['\n  button {\n    border: 0;\n    background: transparent;\n    color: ', '\n    opacity: 0.7;\n    margin: 0 5px;\n  }\n']);

var _Flex = require('../Flex');

var _Flex2 = _interopRequireDefault(_Flex);

var _theme = require('../theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FlexWithButtonLink = _Flex2.default.extend(_templateObject, (0, _theme.themeProp)('colors.white'));

exports.default = FlexWithButtonLink;