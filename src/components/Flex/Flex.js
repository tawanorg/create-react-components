import styled from 'styled-components';

import {
  flex,
  space,
  width,
  flexDirection,
  flexBasis,
  justifySelf,
  alignSelf,
  flexWrap,
  justifyContent,
  alignContent,
  alignItems,
  position,
} from 'styled-system'

const Flex = styled.div`
  display: flex;
  ${position}
  ${flex}
  ${space}
  ${width}
  ${flexDirection}
  ${flexBasis}
  ${justifySelf}
  ${alignSelf}
  ${flexWrap}
  ${justifyContent}
  ${alignContent}
  ${alignItems}
`

export default Flex
