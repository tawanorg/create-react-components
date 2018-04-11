// Third party
import styledComponents, { ThemeProvider } from 'styled-components'

// Components
import ReactComponents from './components/react';

// Style
import themeMain from './themes';
import themeButton from './themes/js/button'

// Style components
const subStyled = {
  button: themeButton,
}

// Style main exporter
const components = {
  main: Object.assign({}, themeMain, subStyled),
  ...subStyled,
}

export default components
export {
  ThemeProvider,
  ReactComponents,
  styledComponents,
}
