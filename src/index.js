// Third party
import styledComponents, { ThemeProvider } from 'styled-components'

// Components
import ReactComponents from './components/react';

// Style
import defaultTheme from './themes';
import button from './themes/js/button'

const components = {
  main: defaultTheme,
  button,
}

export default components
export {
  ThemeProvider,
  ReactComponents,
  styledComponents,
}
