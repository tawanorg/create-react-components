import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cssSet from 'classnames'

const Wrapper = styled.div`
  display: flex;
`

const menus = [
  {
    name: 'MY CLUB',
    path: '',
    link: '',
    icon: '',
    children: [
      name: 'Children Menu #1',
      path: '',
      link: '',
      icon: '',
    ]
  },
  {
    name: 'MEMBERSHIPS',
    path: '',
    link: '',
    icon: '',
    children: [
      name: 'Children Menu #1',
      path: '',
      link: '',
      icon: '',
    ],
  }
]


const TopNavigation = ({

}) => {
  return (
    <Wrapper>
      TopNavigation
    </Wrapper>
  )
}

TopNavigation.defaultProps = {

}

TopNavigation.propTypes = {

}

export default TopNavigation
