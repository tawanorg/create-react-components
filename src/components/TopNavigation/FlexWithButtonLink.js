import Flex from '../Flex'

const FlexWithButtonLink = Flex.extend`
  button {
    border: 0;
    background: transparent;
    color: ${props => props.theme.colors.white};
    opacity: 0.7;
    margin: 0 5px;
  }
`

export default FlexWithButtonLink
