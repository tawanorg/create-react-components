'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  display: flex;\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Flex = _styledComponents2.default.div(_templateObject, _styledSystem.position, _styledSystem.flex, _styledSystem.space, _styledSystem.width, _styledSystem.flexDirection, _styledSystem.flexBasis, _styledSystem.justifySelf, _styledSystem.alignSelf, _styledSystem.flexWrap, _styledSystem.justifyContent, _styledSystem.alignContent, _styledSystem.alignItems);

exports.default = Flex;