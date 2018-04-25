import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

// components
import TopNavigation from './index';

const story = storiesOf('TopNavigation', module);

story.add('Full Navigation', () => (
  <React.Fragment>
    <TopNavigation />
  </React.Fragment>
));
