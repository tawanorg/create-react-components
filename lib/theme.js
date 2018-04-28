'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var theme = {
  fontFamily: "'Roboto', sans-serif",
  font: {
    span: {
      fontSize: '14px',
      fontWeight: '700'
    },
    h2: {
      fontWeight: 900,
      fontSize: '32px'
    }
  },
  fontSize: {
    normal: '14px'
  },
  colors: {
    // General colours
    red: '#D0021B',
    orange: '#F58400',
    black: '#4A4A4A',
    green: '#1FAA52',
    white: '#FFFFFF',
    pinkross: '#9F1D51',

    // Grey
    grey: '#CCCCCC',
    grey50: '#f3f3f3',
    grey100: '#5A5D84',
    grey150: '#5A5D84',
    grey200: '#7D7D84',
    grey300: '#6B6C72',
    lightgrey: '#CED4DA',

    // Blue
    darkblue: '#13174F',
    blue: '#009ADE'
  }
};

var colorsSystem = {
  default: theme.colors.black,
  primary: theme.colors.blue,
  secondary: theme.colors.white,
  info: theme.colors.darkblue,
  success: theme.colors.green,
  danger: theme.colors.red,
  warning: theme.colors.orange
};

var alltheme = Object.assign({}, theme, colorsSystem);

exports.default = alltheme;