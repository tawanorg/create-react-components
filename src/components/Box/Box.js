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
  top,
  right,
  bottom,
  left,
  fontSize,
} from 'styled-system';

const Box = styled.div`
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
  ${top}
  ${right}
  ${bottom}
  ${left}
  ${fontSize}
`

export default Box
