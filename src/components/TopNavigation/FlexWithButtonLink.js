import Flex from '../Flex'
import { themeProp } from '../theme'

const FlexWithButtonLink = Flex.extend`
  button {
    border: 0;
    background: transparent;
    color: ${themeProp('colors.white')}
    opacity: 0.7;
    margin: 0 5px;
  }
`

export default FlexWithButtonLink
