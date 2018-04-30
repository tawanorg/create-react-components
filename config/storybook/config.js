import React from 'react'
import { configure, setAddon, addDecorator } from '@storybook/react';
import infoAddon from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
// import { setOptions } from '@storybook/addon-options';

// Themeing
import ThemeProvider from '../../src/components/ThemeProvider'

// setOptions({
//   name: 'styled-bootstrap',
//   url: 'https://github.com/xDae/styled-bootstrap'
// });


// Import all story.js
const req = require.context('../../src/components/', true, /.stories.js$/);

function loadStories() {
	req.keys().forEach((filename) => req(filename))
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
