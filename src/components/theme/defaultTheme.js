import darken from 'polished/lib/color/darken';
import lighten from 'polished/lib/color/lighten';
import stripUnit from 'polished/lib/helpers/stripUnit';
import { sassRgba } from './sassRgba';

// General variable structure

// General colours
export const red = '#D0021B';
export const orange = '#F58400';
export const black = '#4A4A4A';
export const green = '#1FAA52';
export const white = '#FFFFFF';
export const pinkross = '#9F1D51';

// Grey
export const grey = '#CCCCCC';
export const grey50 = '#f3f3f3';
export const grey100 = '#5A5D84';
export const grey150 = '#5A5D84';
export const grey200 = '#7D7D84';
export const grey300 = '#6B6C72';
export const lightgrey = '#CED4DA';

// Blue
export const darkblue = '#13174F';
export const blue = '#009ADE';

export const colors = {
    red,
    orange,
    black,
    green,
    white,
    pinkross,
    blue,
    grey,
    grey50,
    grey100,
    grey150,
    grey200,
    grey300,
    lightgrey,
    darkblue,
};

export const themeColors = {
    default: black,
    primary: blue,
    secondary: white,
    info: darkblue,
    success: green,
    danger: red,
    warning: orange,
}

export const bodyBg = white;
export const bodyColor = grey300;

// Links
//
// Style anchor elements.
export const linkColor = themeColors.primary;
export const linkDecoration = 'none';
export const linkHoverColor = darken(0.15, linkColor);
export const linkHoverDecoration = 'underline';

export const borderRadius = '0.25rem';
export const borderRadiusLg = '0.3rem';
export const borderRadiusSm = '0.2rem';


// Font general
export const fontFamily = "'Roboto', sans-serif";

export const fontSizeBase = '1rem';
export const fontSizeLg = '1.25rem';
export const fontSizeSm = '0.875rem';
export const fontSizeXs = '0.75rem';

export const fontSizeNormal = fontSizeBase;

// Font weight
export const fontWeightNormal = 'normal';
export const fontWeightBold = 'bold';
export const fontWeightBase = fontWeightNormal;
export const lineHeightBase = 1.5;

// Font sizing
export const fontSizeH1 = '2.5rem';
export const fontSizeH2 = '2rem';
export const fontSizeH3 = '1.75rem';
export const fontSizeH4 = '1.5rem';
export const fontSizeH5 = '1.25rem';
export const fontSizeH6 = '1rem';


export const btnBoxShadow = `inset 0 1px 0 rgba(${white},.15), 0 1px 1px ${sassRgba(
  black,
  0.075
)}`;
