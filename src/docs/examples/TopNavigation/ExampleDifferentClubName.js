import React from 'react';
import TopNavigation from 'components-react/TopNavigation';
import ThemeProvider from 'components-react/ThemeProvider';

import {
  MAIN_MENU,
  ACTION_MENU,
  PROFILE_MENU
} from '../../mocksData/ExampleMenuData'

/** With Different Club Name */
export default class ExampleTopNavigation extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <TopNavigation
          mainMenus={MAIN_MENU}
          actionMenus={ACTION_MENU}
          profileMenus={PROFILE_MENU}
          teamData={{
            title: "state level",
            subtitle: "Victoria Football",
            logo: "",
          }}
          userData={{
            fullname: "Sam Simple",
            clubname: "Australian Football League",
            profileImageUrl: null,
          }}
        />
      </ThemeProvider>
    )
  }
}
