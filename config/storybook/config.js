import React from 'react'
import { configure, setAddon, addDecorator } from '@storybook/react';
import infoAddon from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

// Themeing
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../src/themes';

// Import all story.js
const req = require.context('../../src', true, /\.story\.js$/);
function loadStories() {
  req.keys().forEach(req)
}

// Setting
setAddon(infoAddon);
addDecorator(withKnobs);
addDecorator((story) => (
  <ThemeProvider theme={defaultTheme}>
    {story()}
  </ThemeProvider>
))

configure(loadStories, module);
