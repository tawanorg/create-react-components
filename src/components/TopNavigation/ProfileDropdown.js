import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Avatar from '../Avatar'
import H6 from '../H6'
import Box from '../Box'
import CustomLink from './CustomLink'

const ProfileWrapper = Box.extend`
  color: ${props => props.theme.colors.grey150};
`

const ProfileDropdown = ({
  menus,
  title,
  subtitle,
  ...rest,
}) => {
  return (
    <ProfileWrapper {...rest}>
      <Box my="0.5rem">
        <Avatar
          name={title}
        />
      </Box>
      <Box mb="0.5rem">
        <H6>{title}</H6>
        <small>{subtitle}</small>
      </Box>
      <Box>
      {
        menus.map((menu, key) => {
          return (
            <Box key={key}>
              <CustomLink
                {...menu}
                className="menu-children-link"
              >
                {menu.title}
              </CustomLink>
            </Box>
          )
        })
      }
      </Box>
    </ProfileWrapper>
  )
}

ProfileDropdown.propTypes = {
  menus: PropTypes.array,
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

ProfileDropdown.defaultProps = {
  menus: [],
  title: null,
  subtitle: null,
}

export default ProfileDropdown