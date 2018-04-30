import Flex from '../Flex'
import { themeProp } from '../theme'

const FlexWithDivider = Flex.extend`
  border-left: 1px solid ${themeProp('colors.grey150')};
  border-right: 1px solid ${themeProp('colors.grey150')};
`

export default FlexWithDivider
