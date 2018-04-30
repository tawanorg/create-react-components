'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.btnBoxShadow = exports.fontSizeH6 = exports.fontSizeH5 = exports.fontSizeH4 = exports.fontSizeH3 = exports.fontSizeH2 = exports.fontSizeH1 = exports.lineHeightBase = exports.fontWeightBase = exports.fontWeightBold = exports.fontWeightNormal = exports.fontSizeNormal = exports.fontSizeXs = exports.fontSizeSm = exports.fontSizeLg = exports.fontSizeBase = exports.fontFamily = exports.borderRadiusSm = exports.borderRadiusLg = exports.borderRadius = exports.linkHoverDecoration = exports.linkHoverColor = exports.linkDecoration = exports.linkColor = exports.bodyColor = exports.bodyBg = exports.themeColors = exports.colors = exports.blue = exports.darkblue = exports.lightgrey = exports.grey300 = exports.grey200 = exports.grey150 = exports.grey100 = exports.grey50 = exports.grey = exports.pinkross = exports.white = exports.green = exports.black = exports.orange = exports.red = undefined;

var _darken = require('polished/lib/color/darken');

var _darken2 = _interopRequireDefault(_darken);

var _lighten = require('polished/lib/color/lighten');

var _lighten2 = _interopRequireDefault(_lighten);

var _stripUnit = require('polished/lib/helpers/stripUnit');

var _stripUnit2 = _interopRequireDefault(_stripUnit);

var _sassRgba = require('./sassRgba');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// General variable structure

// General colours
var red = exports.red = '#D0021B';
var orange = exports.orange = '#F58400';
var black = exports.black = '#4A4A4A';
var green = exports.green = '#1FAA52';
var white = exports.white = '#FFFFFF';
var pinkross = exports.pinkross = '#9F1D51';

// Grey
var grey = exports.grey = '#CCCCCC';
var grey50 = exports.grey50 = '#f3f3f3';
var grey100 = exports.grey100 = '#5A5D84';
var grey150 = exports.grey150 = '#5A5D84';
var grey200 = exports.grey200 = '#7D7D84';
var grey300 = exports.grey300 = '#6B6C72';
var lightgrey = exports.lightgrey = '#CED4DA';

// Blue
var darkblue = exports.darkblue = '#13174F';
var blue = exports.blue = '#009ADE';

var colors = exports.colors = {
    red: red,
    orange: orange,
    black: black,
    green: green,
    white: white,
    pinkross: pinkross,
    blue: blue,
    grey: grey,
    grey50: grey50,
    grey100: grey100,
    grey150: grey150,
    grey200: grey200,
    grey300: grey300,
    lightgrey: lightgrey,
    darkblue: darkblue
};

var themeColors = exports.themeColors = {
    default: black,
    primary: blue,
    secondary: white,
    info: darkblue,
    success: green,
    danger: red,
    warning: orange
};

var bodyBg = exports.bodyBg = white;
var bodyColor = exports.bodyColor = grey300;

// Links
//
// Style anchor elements.
var linkColor = exports.linkColor = themeColors.primary;
var linkDecoration = exports.linkDecoration = 'none';
var linkHoverColor = exports.linkHoverColor = (0, _darken2.default)(0.15, linkColor);
var linkHoverDecoration = exports.linkHoverDecoration = 'underline';

var borderRadius = exports.borderRadius = '0.25rem';
var borderRadiusLg = exports.borderRadiusLg = '0.3rem';
var borderRadiusSm = exports.borderRadiusSm = '0.2rem';

// Font general
var fontFamily = exports.fontFamily = "'Roboto', sans-serif";

var fontSizeBase = exports.fontSizeBase = '1rem';
var fontSizeLg = exports.fontSizeLg = '1.25rem';
var fontSizeSm = exports.fontSizeSm = '0.875rem';
var fontSizeXs = exports.fontSizeXs = '0.75rem';

var fontSizeNormal = exports.fontSizeNormal = fontSizeBase;

// Font weight
var fontWeightNormal = exports.fontWeightNormal = 'normal';
var fontWeightBold = exports.fontWeightBold = 'bold';
var fontWeightBase = exports.fontWeightBase = fontWeightNormal;
var lineHeightBase = exports.lineHeightBase = 1.5;

// Font sizing
var fontSizeH1 = exports.fontSizeH1 = '2.5rem';
var fontSizeH2 = exports.fontSizeH2 = '2rem';
var fontSizeH3 = exports.fontSizeH3 = '1.75rem';
var fontSizeH4 = exports.fontSizeH4 = '1.5rem';
var fontSizeH5 = exports.fontSizeH5 = '1.25rem';
var fontSizeH6 = exports.fontSizeH6 = '1rem';

var btnBoxShadow = exports.btnBoxShadow = 'inset 0 1px 0 rgba(' + white + ',.15), 0 1px 1px ' + (0, _sassRgba.sassRgba)(black, 0.075);