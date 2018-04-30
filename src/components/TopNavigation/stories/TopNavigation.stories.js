import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

// components
import TopNavigation from '../TopNavigation';

const story = storiesOf('TopNavigation', module);

const MAIN_MENU = [
  {
    title: 'My Club',
    path: null,
    link: '/myclub',
    icon: null,
    children: [
      {
        title: 'Item #1',
        path: null,
        link: '/item-1',
        icon: null,
        children: [],
      },
      {
        title: 'Item #2',
        path: null,
        link: '/item-2',
        icon: null,
        children: [],
      },
    ],
  },
  {
    title: 'MEMBERSHIPS',
    path: null,
    link: '/memberships',
    icon: null,
    children: [],
  }
]

const ACTION_MENU = [
  {
    title: 'My Club',
    path: null,
    link: '/myclub',
    icon: null,
    children: [
      {
        title: 'Item #1',
        path: null,
        link: '/item-1',
        icon: null,
        children: [],
      },
    ],
  },
  {
    title: 'MEMBERSHIPS',
    path: null,
    link: '/memberships',
    icon: null,
    children: [],
  }
]


const PROFILE_MENU = [
  {
    title: 'My Account',
    path: null,
    link: '/myaccount',
    icon: null,
    children: [],
  },
  {
    title: 'Log Out',
    path: null,
    link: '/logout',
    icon: null,
    children: [],
  }
]

story.add('With no profile picture', () => (
  <React.Fragment>
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
  </React.Fragment>
));


story.add('With no team/profile picture', () => (
  <React.Fragment>
    <TopNavigation
      mainMenus={MAIN_MENU}
      actionMenus={ACTION_MENU}
      profileMenus={PROFILE_MENU}
      teamData={{
        title: "national level",
        subtitle: "Australian Football League",
        logo: "",
      }}
      userData={{
        fullname: "Sam Simple",
        clubname: "Australian Football League",
        profileImageUrl: null,
      }}
    />
  </React.Fragment>
));
