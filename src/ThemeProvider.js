import React from 'react'
import styled, {
  ThemeProvider as StyledThemeProvider,
  injectGlobal
} from 'styled-components'

import theme from './components/theme'

injectGlobal`body {
  margin: 0;
}`

export const Base = styled.div`
  font-family: ${props => props.theme.fontFamily};
  line-height: 1.4;

  * {
    box-sizing: border-box;
  }
`

const ThemeProvider = ({ children, ...props}) => {
  return (
    <StyledThemeProvider theme={theme}>
      <Base {...props}>{children}</Base>
    </StyledThemeProvider>
  )
}

export default ThemeProvider
