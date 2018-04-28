import Flex from '../Flex'

const FlexWithDivider = Flex.extend`
  border-left: 1px solid ${props => props.theme.colors.grey150};
  border-right: 1px solid ${props => props.theme.colors.grey150};
`

export default FlexWithDivider
