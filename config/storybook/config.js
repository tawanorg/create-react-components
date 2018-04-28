import React from 'react'
import { configure, setAddon, addDecorator } from '@storybook/react';
import infoAddon from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

// Themeing
import ThemeProvider from '../../src/ThemeProvider'

// Import all story.js
const req = require.context('../../src/components', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(req)
}

// Setting
setAddon(infoAddon);
addDecorator(withKnobs);
addDecorator((story) => (
  <ThemeProvider>
    {story()}
  </ThemeProvider>
))

configure(loadStories, module);
