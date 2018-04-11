'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var Button$1 = function Button(_ref) {
  var children = _ref.children;

  return React.createElement(
    'button',
    null,
    children || 'Button Text'
  );
};

var ButtonGroup$1 = function ButtonGroup(_ref) {
  var children = _ref.children;

  return React.createElement(
    'button',
    null,
    children || 'ButtonGroup Text'
  );
};

var reactComponents = {
  Button: Button$1,
  ButtonGroup: ButtonGroup$1
};

var Button$4 = function Button(_ref) {
  var children = _ref.children;

  return React.createElement(
    'button',
    null,
    children || 'Button Text'
  );
};

var ButtonGroup$4 = function ButtonGroup(_ref) {
  var children = _ref.children;

  return React.createElement(
    'button',
    null,
    children || 'ButtonGroup Text'
  );
};

var reactComponents$2 = {
  Button: Button$4,
  ButtonGroup: ButtonGroup$4
};

var themesConfig = {
  color: 'yellow'
};

exports.ReactComponents = reactComponents;
exports.ReactNativeComponents = reactComponents$2;
exports.themesConfig = themesConfig;
//# sourceMappingURL=index.js.map
