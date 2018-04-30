import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';

import Avatar from '../Avatar'
import Icon from '../Icon'
import TeamBadge from '../TeamBadge'
import Flex from '../Flex'
import ArrowDropdown from '../ArrowDropdown'
import EyeIcon from '../EyeIcon'

// Self components
import Wrapper from './Wrapper'
import FlexWithDivider from './FlexWithDivider'
import CustomLink from './CustomLink'
import FlexWithButtonLink from './FlexWithButtonLink'
import ProfileDropdown from './ProfileDropdown'

/** Top Navigation. */
class TopNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDropdown: null,
      isDropdownOpen: false,
      isProfileOpen: false,
      style: {
        clientHeight: 0,
      },
    }

    this.getMainLinks = this.getMainLinks.bind(this)
    this.handleOnOpenDropdown = this.handleOnOpenDropdown.bind(this)
    this.handleOnCloseDropdown = this.handleOnCloseDropdown.bind(this)
    this.getWrapperStyle = this.getWrapperStyle.bind(this)
    this.handleOnCloseProfile = this.handleOnCloseProfile.bind(this)
    this.handleOnOpenProfile = this.handleOnOpenProfile.bind(this)
  }

  componentDidMount() {
    this.getWrapperStyle()
  }

  handleOnOpenDropdown(menu) {
    this.setState({
      openDropdown: menu,
      isDropdownOpen: true,
    })
  }

  handleOnCloseDropdown() {
    this.setState({
      isDropdownOpen: false,
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
        <Flex
          position="relative"
          key={key}
        >
          <CustomLink
            {...menu}
            className="menu-link"
            onMouseEnter={this.handleOnOpenDropdown.bind(this, menu)}
          >
          <div>
            <span>{menu.title}</span>
            {isHasChildren && <Icon position="absolute" className={arrowIcon} right="9px" top="-2px" fontSize="22px" />}
          </div>
          {
            this.state.isDropdownOpen &&
            this.state.openDropdown && this.state.openDropdown.link === menu.link &&
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
                  <CustomLink
                    {...childItem}
                    key={key}
                    className="menu-children-link"
                  >
                    {childItem.title}
                  </CustomLink>
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
    const { profileMenus, userData } = this.props
    return (
      <React.Fragment>
        <Avatar
          name={userData.fullname}
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
              title={userData.fullname}
              subtitle={userData.clubname}
              menus={profileMenus}
            />
          </ArrowDropdown>
        }
      </React.Fragment>
    )
  }

  render() {
    const {
      teamData,
    } = this.props

    return (
      <Wrapper ref={(ref) => { this.navigation = ref}}>
        <Flex
          p="1.032rem"
          alignItems="center"
          onMouseLeave={this.handleOnCloseDropdown}
        >
          <EyeIcon
            src="https://testing-sportstg.cs57.force.com/SportsTGAdmins/resource/STG_Brand_Mark"
            alt="STG Logo"
            height={31}
          />
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
            <TeamBadge {...teamData} />
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

TopNavigation.propTypes = {
  mainMenus: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    path: PropTypes.string,
    link: PropTypes.string,
    icon: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      path: PropTypes.string,
      link: PropTypes.string,
      icon: PropTypes.string,
      children: PropTypes.array,
    }))
  })),
  actionMenus: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    path: PropTypes.string,
    link: PropTypes.string,
    icon: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      path: PropTypes.string,
      link: PropTypes.string,
      icon: PropTypes.string,
      children: PropTypes.array,
    }))
  })),
  profileMenus: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    path: PropTypes.string,
    link: PropTypes.string,
    icon: PropTypes.string,
    children: PropTypes.array,
  })),
  teamData: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    logo: PropTypes.string,
  }),
  userData: PropTypes.shape({
    fullname: PropTypes.string,
    clubname: PropTypes.string,
    profileImageUrl: PropTypes.string,
  })
}

TopNavigation.defaultProps = {
  mainMenus: [],
  actionMenus: [],
  profileMenus: [],
  teamData: {
    title: null,
    subtitle: null,
    logo: null,
  },
  userData: {
    fullname: null,
    clubname: null,
    profileImageUrl: null,
  }
}

export default TopNavigation
