import React from 'react';
import TopNavigation from 'components/TopNavigation';
import {
  MAIN_MENU,
  ACTION_MENU,
  PROFILE_MENU
} from '../../mocksData/ExampleMenuData'

/** With no profile picture */
export default class ExampleTopNavigation extends React.Component {
  render() {
    return (
      <TopNavigation
        mainMenus={MAIN_MENU}
        actionMenus={ACTION_MENU}
        profileMenus={PROFILE_MENU}
        teamData={{
          title: "national level",
          subtitle: "Australian Football League",
          logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Australian_Football_League.svg/1200px-Australian_Football_League.svg.png",
        }}
        userData={{
          fullname: "Sam Simple",
          clubname: "Australian Football League",
        }}
      />
    )
  }
}
