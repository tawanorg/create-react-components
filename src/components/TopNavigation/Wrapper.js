import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  background-color: ${props => props.theme.colors.darkblue};
  color: ${props => props.theme.colors.white};
  justify-content: space-between;

  a {
    font-size: 14px;
    font-weight: 300;
    text-transform: uppercase;
    color: #B3B3B3;

    &:hover {
      text-decoration: none;
    }

    &.menu-link {
      margin: 0 1rem;

      span {
        padding-right: 0.5rem;
      }
    }

    &.menu-children-link {
      color: ${props => props.theme.colors.grey300};
      font-size: ${props => props.theme.fontSize.normal};
      padding: 5px;
      display: flex;
      font-weight: 500;
    }
  }
`

export default Wrapper
