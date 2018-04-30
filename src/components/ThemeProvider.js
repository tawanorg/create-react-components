import React from 'react'
import PropTypes from 'prop-types'
import styled, {
  ThemeProvider as StyledThemeProvider,
} from 'styled-components'

import { themeProp } from './theme'
import defaultTheme from './theme'

export const Base = styled.div`
  font-family: ${themeProp('fontFamily')};
  line-height: ${themeProp('lineHeightBase')};
  font-size: ${themeProp('fontSizeNormal')};;
  font-weight: ${themeProp('fontWeightNormal')};
  color: ${themeProp('bodyColor')};
  text-align: left;
  background-color: ${themeProp('bodyBg')};
`

const ThemeProvider = ({ theme, ...props }) => {
  const _theme = Object.assign({}, defaultTheme, theme)

  return (
    <StyledThemeProvider theme={_theme}>
      <Base {...props} />
    </StyledThemeProvider>
  )
}

ThemeProvider.propTypes = {
  theme: PropTypes.object,
}

export default ThemeProvider
