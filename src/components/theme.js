import get from 'lodash/get';
import * as theme from './theme/defaultTheme'

/**
 * Returns the value of `props[path]` or `defaultValue`
 * @example
 * const Button = styled.button`
 *  color: ${prop('color.red')};
 * `
 */
export const themeProp = (path, defaultValue) => (props) => get(props.theme, path, defaultValue)

export default theme