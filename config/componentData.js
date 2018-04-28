module.exports = /* eslint-disable */ [null,{"name":"Avatar","description":"Avatar showing the picture of user with first letter of username.","props":{"className":{"type":{"name":"string"},"required":false,"description":"Custom CSS Classname","defaultValue":{"value":"''","computed":false}},"size":{"type":{"name":"number"},"required":false,"description":"Size of avatar picture","defaultValue":{"value":"38","computed":false}},"name":{"type":{"name":"func"},"required":false,"description":"Username","defaultValue":{"value":"'Name'","computed":false}}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\nimport styled from 'styled-components';\n\nconst AvatarWrapper = styled.div`\n  line-height: 0;\n  display: flex;\n  background-color: ${props => props.theme.colors.pinkross};\n  border-radius: 50%;\n  height: ${props => props.size}px;\n  width: ${props => props.size}px;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-weight: 300;\n  color: white;\n\n  img {\n\t   border-radius: 50%;\n  }\n\n  &:hover {\n\n  }\n`\n/** Avatar showing the picture of user with first letter of username. */\nconst Avatar = ({\n  className,\n  name,\n  size,\n  ...rest,\n}) => {\n  return (\n    <AvatarWrapper\n      {...rest}\n      size={size}\n    >\n      {name.substr(0, 1)}\n    </AvatarWrapper>\n  )\n}\n\nAvatar.propTypes = {\n  /** Custom CSS Classname */\n  className: PropTypes.string,\n  /** Size of avatar picture */\n  size: PropTypes.number,\n  /** Username */\n  name: PropTypes.func,\n};\n\nAvatar.defaultProps = {\n  className: '',\n  name: 'Name',\n  size: 38,\n};\n\nexport default Avatar\n","examples":[{"name":"Avatar","description":"Avatar Custom Name","code":"import React from 'react';\nimport Avatar from 'components-react/Avatar';\n\n/** Avatar Custom Name */\nexport default class ExampleAvatar extends React.Component {\n  render() {\n    return (\n      <Avatar\n        name=\"Sam Simple\"\n       />\n    )\n  }\n}\n"},{"name":"AvatarWithOnClick","description":"Avatar with onclick","code":"import React from 'react';\nimport Avatar from 'components-react/Avatar';\n\n/** Avatar with onclick */\nexport default class ExampleAvatar extends React.Component {\n  render() {\n    return (\n      <Avatar\n        name=\"Sam Simple\"\n        onClick={() => alert('Clicked')}\n       />\n    )\n  }\n}\n"}]},null,null,null,null,{"name":"Label","description":"Label with required field display, htmlFor, and block styling","props":{"htmlFor":{"type":{"name":"string"},"required":true,"description":"HTML ID for associated input"},"label":{"type":{"name":"string"},"required":true,"description":"Label text"},"required":{"type":{"name":"bool"},"required":false,"description":"Display asterisk after label if true"}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\n\n/** Label with required field display, htmlFor, and block styling */\nfunction Label({htmlFor, label, required}) {\n  return (\n    <label style={{display: 'block'}} htmlFor={htmlFor}>\n      {label} { required && <span style={{color: 'red'}}> *</span> }\n    </label>\n  )\n}\n\nLabel.propTypes = {\n  /** HTML ID for associated input */\n  htmlFor: PropTypes.string.isRequired,\n\n  /** Label text */\n  label: PropTypes.string.isRequired,\n\n  /** Display asterisk after label if true */\n  required: PropTypes.bool\n};\n\nexport default Label;\n","examples":[{"name":"ExampleOptional","description":"Optional label","code":"import React from 'react';\nimport Label from 'components-react/Label';\n\n/** Optional label */\nexport default function ExampleOptional() {\n  return <Label htmlFor=\"test\" label=\"test\" />\n}\n"},{"name":"ExampleRequired","description":"Required label","code":"import React from 'react';\nimport Label from 'components-react/Label';\n\n/** Required label */\nexport default function ExampleRequired() {\n  return <Label htmlFor=\"test\" label=\"test\" required />\n}\n"}]},null,{"name":"PasswordInput","description":"Password input with integrated label, quality tips, and show password toggle.","props":{"htmlId":{"type":{"name":"string"},"required":true,"description":"Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing."},"name":{"type":{"name":"string"},"required":true,"description":"Input name. Recommend setting this to match object's property so a single change handler can be used by convention."},"value":{"type":{"name":"any"},"required":false,"description":"Password value"},"label":{"type":{"name":"string"},"required":false,"description":"Input label","defaultValue":{"value":"'Password'","computed":false}},"onChange":{"type":{"name":"func"},"required":true,"description":"Function called when password input value changes"},"maxLength":{"type":{"name":"number"},"required":false,"description":"Max password length accepted","defaultValue":{"value":"50","computed":false}},"placeholder":{"type":{"name":"string"},"required":false,"description":"Placeholder displayed when no password is entered"},"showVisibilityToggle":{"type":{"name":"bool"},"required":false,"description":"Set to true to show the toggle for displaying the currently entered password","defaultValue":{"value":"false","computed":false}},"quality":{"type":{"name":"number"},"required":false,"description":"Display password quality visually via ProgressBar, accepts a number between 0 and 100"},"error":{"type":{"name":"string"},"required":false,"description":"Validation error to display"}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\nimport ProgressBar from '../ProgressBar';\nimport TextInput from '../TextInput';\n\n/** Password input with integrated label, quality tips, and show password toggle. */\nclass PasswordInput extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      showPassword: false\n    }\n  }\n\n  toggleShowPassword = event => {\n    this.setState(prevState => {\n      return { showPassword: !prevState.showPassword };\n    });\n    if (event) event.preventDefault();\n  }\n\n  render() {\n    const { htmlId, value, label, error, onChange, placeholder, maxLength, showVisibilityToggle, quality, ...props } = this.props;\n    const { showPassword } = this.state;\n\n    return (\n      <TextInput\n        htmlId={htmlId}\n        label={label}\n        placeholder={placeholder}\n        type={showPassword ? 'text' : 'password'}\n        onChange={onChange}\n        value={value}\n        maxLength={maxLength}\n        error={error}\n        required\n        {...props}>\n        {\n          showVisibilityToggle &&\n          <a\n            href=\"\"\n            onClick={this.toggleShowPassword}\n            style={{ marginLeft: 5 }}>\n          </a>\n        }\n        {\n          value.length > 0 && quality && <ProgressBar percent={quality} width={130} />\n        }\n      </TextInput>\n    );\n  }\n}\n\nPasswordInput.propTypes = {\n  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */\n  htmlId: PropTypes.string.isRequired,\n\n  /** Input name. Recommend setting this to match object's property so a single change handler can be used by convention.*/\n  name: PropTypes.string.isRequired,\n\n  /** Password value */\n  value: PropTypes.any,\n\n  /** Input label */\n  label: PropTypes.string,\n\n  /** Function called when password input value changes */\n  onChange: PropTypes.func.isRequired,\n\n  /** Max password length accepted */\n  maxLength: PropTypes.number,\n\n  /** Placeholder displayed when no password is entered */\n  placeholder: PropTypes.string,\n\n  /** Set to true to show the toggle for displaying the currently entered password */\n  showVisibilityToggle: PropTypes.bool,\n\n  /** Display password quality visually via ProgressBar, accepts a number between 0 and 100 */\n  quality: PropTypes.number,\n\n  /** Validation error to display */\n  error: PropTypes.string\n};\n\nPasswordInput.defaultProps = {\n  maxLength: 50,\n  showVisibilityToggle: false,\n  label: 'Password'\n};\n\nexport default PasswordInput;\n","examples":[{"name":"ExampleAllFeatures","description":"All features enabled","code":"import React from 'react';\nimport PasswordInput from 'components-react/PasswordInput';\n\n/** All features enabled */\nclass ExampleAllFeatures extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      password: ''\n    };\n  }\n\n  getQuality() {\n    const length = this.state.password.length;\n    return length > 10 ? 100 : length * 10;\n  }\n\n  render() {\n    return (\n      <div>\n        <PasswordInput\n          htmlId=\"password-input-example-all-features\"\n          name=\"password\"\n          onChange={ event => this.setState({ password: event.target.value })}\n          value={this.state.password}\n          minLength={8}\n          placeholder=\"Enter password\"\n          showVisibilityToggle\n          quality={this.getQuality()}\n          {...this.props} />\n      </div>\n    )\n  }\n}\n\nexport default ExampleAllFeatures;\n"}]},{"name":"ProgressBar","description":"","props":{"percent":{"type":{"name":"number"},"required":true,"description":"Percent of progress completed"},"width":{"type":{"name":"number"},"required":true,"description":"Bar width"},"height":{"type":{"name":"number"},"required":false,"description":"Bar height","defaultValue":{"value":"5","computed":false}}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\n\nclass ProgressBar extends React.Component {\n  getColor = (percent) => {\n    if (this.props.percent === 100) return 'green';\n    return this.props.percent > 50 ? 'lightgreen' : 'red';\n  }\n\n  getWidthAsPercentOfTotalWidth = () => {\n    return parseInt(this.props.width * (this.props.percent / 100), 10);\n  }\n\n  render() {\n    const {percent, width, height} = this.props;\n    return (\n      <div style={{border: 'solid 1px lightgray', width: width}}>\n        <div style={{\n          width: this.getWidthAsPercentOfTotalWidth(),\n          height,\n          backgroundColor: this.getColor(percent)\n        }} />\n      </div>\n    );\n  }\n}\n\nProgressBar.propTypes = {\n  /** Percent of progress completed */\n  percent: PropTypes.number.isRequired,\n\n  /** Bar width */\n  width: PropTypes.number.isRequired,\n\n  /** Bar height */\n  height: PropTypes.number\n};\n\nProgressBar.defaultProps = {\n  height: 5\n};\n\nexport default ProgressBar;","examples":[{"name":"Example100Percent","description":"100% progress and height 20px","code":"import React from 'react';\nimport ProgressBar from 'components-react/ProgressBar';\n\n/** 100% progress and height 20px */\nexport default function Example100Percent() {\n  return <ProgressBar percent={100} width={150} height={20} />\n}\n"},{"name":"Example10Percent","description":"10% progress","code":"import React from 'react';\nimport ProgressBar from 'components-react/ProgressBar';\n\n/** 10% progress */\nexport default function Example10Percent() {\n  return <ProgressBar percent={10} width={150} />\n}\n"},{"name":"Example70Percent","description":"70% progress","code":"import React from 'react';\nimport ProgressBar from 'components-react/ProgressBar';\n\n/** 70% progress */\nexport default function Example70Percent() {\n  return <ProgressBar percent={70} width={150} />\n}\n"}]},null,{"name":"TextInput","description":"Text input with integrated label to enforce consistency in layout, error display, label placement, and required field marker.","props":{"htmlId":{"type":{"name":"string"},"required":true,"description":"Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing."},"name":{"type":{"name":"string"},"required":true,"description":"Input name. Recommend setting this to match object's property so a single change handler can be used."},"label":{"type":{"name":"string"},"required":true,"description":"Input label"},"type":{"type":{"name":"enum","value":[{"value":"'text'","computed":false},{"value":"'number'","computed":false},{"value":"'password'","computed":false}]},"required":false,"description":"Input type","defaultValue":{"value":"\"text\"","computed":false}},"required":{"type":{"name":"bool"},"required":false,"description":"Mark label with asterisk if set to true","defaultValue":{"value":"false","computed":false}},"onChange":{"type":{"name":"func"},"required":true,"description":"Function to call onChange"},"placeholder":{"type":{"name":"string"},"required":false,"description":"Placeholder to display when empty"},"value":{"type":{"name":"any"},"required":false,"description":"Value"},"error":{"type":{"name":"string"},"required":false,"description":"String to display when error occurs"},"children":{"type":{"name":"node"},"required":false,"description":"Child component to display next to the input"}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\nimport Label from '../Label';\n\n/** Text input with integrated label to enforce consistency in layout, error display, label placement, and required field marker. */\nfunction TextInput({htmlId, name, label, type = \"text\", required = false, onChange, placeholder, value, error, children, ...props}) {\n  return (\n    <div style={{marginBottom: 16}}>\n      <Label htmlFor={htmlId} label={label} required={required} />\n      <input\n        id={htmlId}\n        type={type}\n        name={name}\n        placeholder={placeholder}\n        value={value}\n        onChange={onChange}\n        style={error && {border: 'solid 1px red'}}\n        {...props}/>\n        {children}\n      {error && <div className=\"error\" style={{color: 'red'}}>{error}</div>}\n    </div>\n  );\n};\n\nTextInput.propTypes = {\n  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */\n  htmlId: PropTypes.string.isRequired,\n\n  /** Input name. Recommend setting this to match object's property so a single change handler can be used. */\n  name: PropTypes.string.isRequired,\n\n  /** Input label */\n  label: PropTypes.string.isRequired,\n\n  /** Input type */\n  type: PropTypes.oneOf(['text', 'number', 'password']),\n\n  /** Mark label with asterisk if set to true */\n  required: PropTypes.bool,\n\n  /** Function to call onChange */\n  onChange: PropTypes.func.isRequired,\n\n  /** Placeholder to display when empty */\n  placeholder: PropTypes.string,\n\n  /** Value */\n  value: PropTypes.any,\n\n  /** String to display when error occurs */\n  error: PropTypes.string,\n\n  /** Child component to display next to the input */\n  children: PropTypes.node\n};\n\nexport default TextInput;\n","examples":[{"name":"ExampleError","description":"Required TextBox with error","code":"import React from 'react';\nimport TextInput from 'components-react/TextInput';\n\n/** Required TextBox with error */\nexport default class ExampleError extends React.Component {\n  render() {\n    return (\n      <TextInput\n        htmlId=\"example-optional\"\n        label=\"First Name\"\n        name=\"firstname\"\n        onChange={() => {}}\n        required\n        error=\"First name is required.\"\n       />\n    )\n  }\n}\n"},{"name":"ExampleOptional","description":"Optional TextBox","code":"import React from 'react';\nimport TextInput from 'components-react/TextInput';\n\n/** Optional TextBox */\nexport default class ExampleOptional extends React.Component {\n  render() {\n    return (\n      <TextInput\n        htmlId=\"example-optional\"\n        label=\"First Name\"\n        name=\"firstname\"\n        onChange={() => {}}\n       />\n    )\n  }\n}\n"}]},{"name":"TopNavigation","description":"TopNavigation.","props":{"mainMenus":{"type":{"name":"custom","raw":"[]"},"required":false,"description":"","defaultValue":{"value":"PropTypes.array","computed":true}},"actionMenus":{"type":{"name":"custom","raw":"[]"},"required":false,"description":"","defaultValue":{"value":"PropTypes.array","computed":true}}},"code":"import React from 'react'\nimport ReactDOM from 'react-dom'\nimport PropTypes from 'prop-types';\n\nimport Avatar from '../Avatar'\nimport Icon from '../Icon'\nimport TeamBadge from '../TeamBadge'\nimport Flex from '../Flex'\nimport ArrowDropdown from '../ArrowDropdown'\nimport Logo from '../Logo'\n\n// Self components\nimport Wrapper from './Wrapper'\nimport FlexWithDivider from './FlexWithDivider'\nimport CustomLink from './CustomLink'\nimport FlexWithButtonLink from './FlexWithButtonLink'\nimport ProfileDropdown from './ProfileDropdown'\n\n/** TopNavigation. */\nclass TopNavigation extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      openDropdown: null,\n      isDropdownOpen: false,\n      isProfileOpen: false,\n      style: {\n        clientHeight: 0,\n      },\n    }\n\n    this.getMainLinks = this.getMainLinks.bind(this)\n    this.handleOnOpenDropdown = this.handleOnOpenDropdown.bind(this)\n    this.handleOnCloseDropdown = this.handleOnCloseDropdown.bind(this)\n    this.getWrapperStyle = this.getWrapperStyle.bind(this)\n    this.handleOnCloseProfile = this.handleOnCloseProfile.bind(this)\n    this.handleOnOpenProfile = this.handleOnOpenProfile.bind(this)\n  }\n\n  componentDidMount() {\n    this.getWrapperStyle()\n  }\n\n  handleOnOpenDropdown(menu) {\n    this.setState({\n      openDropdown: menu,\n      isDropdownOpen: true,\n    })\n  }\n\n  handleOnCloseDropdown() {\n    this.setState({\n      isDropdownOpen: false,\n    })\n  }\n\n  handleOnOpenProfile() {\n    this.setState({\n      isProfileOpen: true\n    })\n  }\n\n  handleOnCloseProfile() {\n    this.setState({\n      isProfileOpen: false\n    })\n  }\n\n  getWrapperStyle() {\n    if (!this.navigation) {\n      return;\n    }\n\n    this.setState({\n      style: {\n        clientHeight: ReactDOM.findDOMNode(this.navigation).clientHeight,\n      }\n    })\n  }\n\n  getMainLinks() {\n    return this.props.mainMenus.map((menu, key) => {\n      const isHasChildren = menu.children.length > 0\n      const arrowIcon = isHasChildren ? 'zmdi zmdi-caret-down' : 'zmdi zmdi-caret-up'\n\n      return (\n        <Flex\n          position=\"relative\"\n          key={key}\n        >\n          <CustomLink\n            {...menu}\n            className=\"menu-link\"\n            onMouseEnter={this.handleOnOpenDropdown.bind(this, menu)}\n          >\n          <div>\n            <span>{menu.title}</span>\n            {isHasChildren && <Icon position=\"absolute\" className={arrowIcon} right=\"0\" top=\"0\" fontSize=\"22px\" />}\n          </div>\n          {\n            this.state.isDropdownOpen &&\n            this.state.openDropdown && this.state.openDropdown.link === menu.link &&\n            isHasChildren > 0 &&\n            <ArrowDropdown\n              width=\"220px\"\n              position=\"relative\"\n              top={this.state.style.clientHeight / 2}\n              left=\"-0.1rem\"\n              p=\"5px 10px\"\n            >\n            {\n              menu.children.map((childItem, key) => {\n                return (\n                  <CustomLink\n                    {...childItem}\n                    key={key}\n                    className=\"menu-children-link\"\n                  >\n                    {childItem.title}\n                  </CustomLink>\n                )\n              })\n            }\n            </ArrowDropdown>\n          }\n          </CustomLink>\n        </Flex>\n      )\n    })\n  }\n\n  renderProfile() {\n    const { profileMenus } = this.props\n\n    return (\n      <React.Fragment>\n        <Avatar\n          name=\"Sam Sample\"\n          onMouseOver={this.handleOnOpenProfile}\n        />\n        {\n          this.state.isProfileOpen &&\n          <ArrowDropdown\n            width=\"220px\"\n            position=\"relative\"\n            top={this.state.style.clientHeight + 1}\n            right=\"1rem\"\n            p=\"5px 10px\"\n          >\n            <ProfileDropdown\n              title=\"Sam Sample\"\n              subtitle=\"Australian Football League\"\n              menus={profileMenus}\n            />\n          </ArrowDropdown>\n        }\n      </React.Fragment>\n    )\n  }\n\n  render() {\n    return (\n      <Wrapper ref={(ref) => { this.navigation = ref}}>\n        <Flex\n          p=\"1.032rem\"\n          alignItems=\"center\"\n          onMouseLeave={this.handleOnCloseDropdown}\n        >\n          <Logo\n            src=\"https://testing-sportstg.cs57.force.com/SportsTGAdmins/resource/STG_Brand_Mark\"\n            height={31}\n          />\n          {this.getMainLinks()}\n        </Flex>\n        <Flex>\n          <FlexWithButtonLink mx=\"1rem\">\n            <button>\n              <Icon className=\"zmdi zmdi-search\" right=\"0\" top=\"0\" fontSize=\"22px\" />\n            </button>\n            <button>\n              <Icon className=\"zmdi zmdi-settings\" right=\"0\" top=\"0\" fontSize=\"22px\" />\n            </button>\n            <button>\n              <Icon className=\"zmdi zmdi-help-outline\" right=\"0\" top=\"0\" fontSize=\"22px\" />\n            </button>\n          </FlexWithButtonLink>\n          <FlexWithDivider px=\"1rem\" alignItems=\"center\">\n            <TeamBadge\n              title=\"national level\"\n              subtitle=\"Australian Football League\"\n              logo=\"https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Australian_Football_League.svg/1200px-Australian_Football_League.svg.png\"\n            />\n          </FlexWithDivider>\n          <Flex\n            position=\"relative\"\n            px=\"1rem\"\n            alignItems=\"center\"\n            onMouseLeave={this.handleOnCloseProfile}\n          >\n            {this.renderProfile()}\n          </Flex>\n        </Flex>\n      </Wrapper>\n    )\n  }\n}\n\nTopNavigation.defaultProps = {\n  mainMenus: PropTypes.array,\n  actionMenus: PropTypes.array,\n}\n\nTopNavigation.propTypes = {\n  mainMenus: [],\n  actionMenus: [],\n}\n\nexport default TopNavigation\n","examples":[{"name":"ExampleTopNavigation","description":"Example Top Navigation","code":"import React from 'react';\nimport TopNavigation from 'components-react/TopNavigation';\n\nconst MAIN_MENU = [\n  {\n    title: 'My Club',\n    path: null,\n    link: '/myclub',\n    icon: null,\n    children: [\n      {\n        title: 'Item #1',\n        path: null,\n        link: '/item-1',\n        icon: null,\n        children: [],\n      },\n      {\n        title: 'Item #2',\n        path: null,\n        link: '/item-2',\n        icon: null,\n        children: [],\n      },\n    ],\n  },\n  {\n    title: 'MEMBERSHIPS',\n    path: null,\n    link: '/memberships',\n    icon: null,\n    children: [],\n  }\n]\n\nconst ACTION_MENU = [\n  {\n    title: 'My Club',\n    path: null,\n    link: '/myclub',\n    icon: null,\n    children: [\n      {\n        title: 'Item #1',\n        path: null,\n        link: '/item-1',\n        icon: null,\n        children: [],\n      },\n    ],\n  },\n  {\n    title: 'MEMBERSHIPS',\n    path: null,\n    link: '/memberships',\n    icon: null,\n    children: [],\n  }\n]\n\n\nconst PROFILE_MENU = [\n  {\n    title: 'My Account',\n    path: null,\n    link: '/myaccount',\n    icon: null,\n    children: [],\n  },\n  {\n    title: 'Log Out',\n    path: null,\n    link: '/logout',\n    icon: null,\n    children: [],\n  }\n]\n\n/** Example Top Navigation */\nexport default class ExampleTopNavigation extends React.Component {\n  render() {\n    return (\n      <TopNavigation\n        mainMenus={MAIN_MENU}\n        actionMenus={ACTION_MENU}\n        profileMenus={PROFILE_MENU}\n      />\n    )\n  }\n}\n"}]}]