const createMediaQuery = n => `@media screen and (min-width:${n}em)`

const addAliases = (arr, aliases) =>
  aliases.forEach((key, i) =>
    Object.defineProperty(arr, key, {
      enumerable: false,
      get() {
        return this[i]
      }
    })
  )

export const breakpoints = [32, 40, 48, 64]

export const mediaQueries = breakpoints.map(createMediaQuery)

const aliases = ['sm', 'md', 'lg', 'xl']

addAliases(breakpoints, aliases)
addAliases(mediaQueries, aliases)

export const font = `'Arial','Helvetica Neue',Helvetica,sans-serif`

export const fontSizes = [12, 14, 16, 20, 24, 32, 48]

export const regular = 400
export const bold = 600

// styled-system's `fontWeight` function can hook into the `fontWeights` object
export const fontWeights = {
  regular,
  bold
}

export const radius = '2px'

// boxShadows
export const boxShadows = [
  `0 0 2px 0 rgba(0,0,0,.08),0 1px 4px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 2px 8px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 4px 16px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 8px 32px 0 rgba(0,0,0,.16)`
]

// animation duration
export const duration = {
  fast: 150,
  normal: 300,
  slow: 450,
  slowest: 600
}

const colors = {
  // General colours
  red: '#D0021B',
  orange: '#F58400',
  black: '#4A4A4A',
  green: '#1FAA52',
  white: '#FFFFFF',

  // Grey
  grey: '#CCCCCC',
  grey50: '#f3f3f3',
  grey100: '#DEDEDE',
  grey200: '#7D7D84',
  lightgrey: '#CED4DA',

  // Blue
  darkblue: '#13174F',
  blue: '#009ADE',
}

const theme = {
  breakpoints,
  mediaQueries,
  boxShadows,
  fontWeights,
  duration,
  font,
  fontSizes,
  radius,
  colors,
}

const colorsSystem = {
  default: colors.black,
  primary: colors.blue,
  secondary: colors.white,
  info: colors.darkblue,
  success: colors.green,
  danger: colors.red,
  warning: colors.orange,
}

const alltheme = {
  ...theme,
  ...colorsSystem,
}

console.log(alltheme)

export default theme
