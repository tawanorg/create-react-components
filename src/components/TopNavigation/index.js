import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cssSet from 'classnames'
import {
  space,
  width,
  flex,
  flexDirection,
  flexBasis,
} from 'styled-system'

import Avatar from '../Avatar'
import Icon from '../Icon'
import TeamBadge from '../TeamBadge'
import List, { ListItem } from '../List'
import Flex from '../Flex'
import Box from '../Box'
import ArrowDropdown from '../ArrowDropdown'
import Logo from '../Logo'

// Self components
import Wrapper from './Wrapper'
import FlexWithDivider from './FlexWithDivider'
import CustomLink from './CustomLink'
import FlexWithButtonLink from './FlexWithButtonLink'
import ProfileDropdown from './ProfileDropdown'

class TopNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDropdown: null,
      isProfileOpen: false,
      style: {
        clientHeight: 0,
      },
    }

    this.getMainLinks = this.getMainLinks.bind(this)
    this.handleOnMouseOver = this.handleOnMouseOver.bind(this)
    this.handleHideDropdown = this.handleHideDropdown.bind(this)
    this.getWrapperStyle = this.getWrapperStyle.bind(this)
    this.handleOnCloseProfile = this.handleOnCloseProfile.bind(this)
    this.handleOnOpenProfile = this.handleOnOpenProfile.bind(this)
  }

  componentDidMount() {
    this.getWrapperStyle()
  }

  handleOnMouseOver(menu) {
    this.setState({
      openDropdown: menu,
    })
  }

  handleHideDropdown() {
    this.setState({
      openDropdown: null,
    })
  }

  handleOnOpenProfile() {
    this.setState({
      isProfileOpen: true
    })
  }

  handleOnCloseProfile() {
    this.setState({
      isProfileOpen: false
    })
  }

  getWrapperStyle() {
    if (!this.navigation) {
      return;
    }

    this.setState({
      style: {
        clientHeight: ReactDOM.findDOMNode(this.navigation).clientHeight,
      }
    })
  }

  getMainLinks() {
    return this.props.mainMenus.map((menu, key) => {
      const isHasChildren = menu.children.length > 0
      const arrowIcon = isHasChildren ? 'zmdi zmdi-caret-down' : 'zmdi zmdi-caret-up'

      return (
        <Flex position="relative" key={key}>
          <CustomLink
            {...menu}
            className="menu-link"
            onMouseOver={this.handleOnMouseOver.bind(this, menu)}
          >
          <div>
            <span>{menu.title}</span>
            {isHasChildren && <Icon position="absolute" className={arrowIcon} right="0" top="0" fontSize="22px" />}
          </div>
          {
            this.state.openDropdown &&
            this.state.openDropdown.link === menu.link &&
            isHasChildren > 0 &&
            <ArrowDropdown
              width="220px"
              position="relative"
              top={this.state.style.clientHeight / 2}
              left="-0.1rem"
              p="5px 10px"
            >
            {
              menu.children.map((childItem, key) => {
                return (
                  <Box key={key}>
                    <CustomLink
                      {...childItem}
                      className="menu-children-link"
                    >
                      {childItem.title}
                    </CustomLink>
                  </Box>
                )
              })
            }
            </ArrowDropdown>
          }
          </CustomLink>
        </Flex>
      )
    })
  }

  renderProfile() {
    const { profileMenus } = this.props

    return (
      <React.Fragment>
        <Avatar
          name="Sam Sample"
          onMouseOver={this.handleOnOpenProfile}
        />
        {
          this.state.isProfileOpen &&
          <ArrowDropdown
            width="220px"
            position="relative"
            top={this.state.style.clientHeight + 1}
            right="1rem"
            p="5px 10px"
          >
            <ProfileDropdown
              title="Sam Sample"
              subtitle="Australian Football League"
              menus={profileMenus}
            />
          </ArrowDropdown>
        }
      </React.Fragment>
    )
  }

  render() {
    return (
      <Wrapper ref={(ref) => { this.navigation = ref}}>
        <Flex p="1.032rem" alignItems="center">
          <Logo />
          {this.getMainLinks()}
        </Flex>
        <Flex>
          <FlexWithButtonLink mx="1rem">
            <button>
              <Icon className="zmdi zmdi-search" right="0" top="0" fontSize="22px" />
            </button>
            <button>
              <Icon className="zmdi zmdi-settings" right="0" top="0" fontSize="22px" />
            </button>
            <button>
              <Icon className="zmdi zmdi-help-outline" right="0" top="0" fontSize="22px" />
            </button>
          </FlexWithButtonLink>
          <FlexWithDivider px="1rem" alignItems="center">
            <TeamBadge
              title="national level"
              subtitle="Australian Football League"
              logo="https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Australian_Football_League.svg/1200px-Australian_Football_League.svg.png"
            />
          </FlexWithDivider>
          <Flex
            position="relative"
            px="1rem"
            alignItems="center"
            onMouseLeave={this.handleOnCloseProfile}
          >
            {this.renderProfile()}
          </Flex>
        </Flex>
      </Wrapper>
    )
  }
}

TopNavigation.defaultProps = {
  mainMenus: PropTypes.array,
  actionMenus: PropTypes.array,
}

TopNavigation.propTypes = {
  mainMenus: [],
  actionMenus: [],
}

export default TopNavigation
