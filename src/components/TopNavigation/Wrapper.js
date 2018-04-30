import styled from 'styled-components'
import { themeProp } from '../theme'

const Wrapper = styled.div`
  display: flex;
  background-color: ${themeProp('colors.darkblue')};
  color: ${themeProp('colors.white')};
  justify-content: space-between;

  a {
    font-size: 14px;
    font-weight: 300;
    color: #B3B3B3;

    &:hover {
      text-decoration: none;
    }

    &.menu-link {
      margin: 0 1rem;
      font-weight: 500;

      span {
        padding-right: 0.5rem;
        text-transform: uppercase;
      }
    }

    &.menu-children-link {
      color: ${themeProp('colors.grey300')};
      font-size: ${themeProp('fontSizeNormal')};
      padding: 5px 0;
      display: flex;
      font-weight: 400;
    }
  }
`

export default Wrapper
