import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

// components
import Button from './index';

const story = storiesOf('Button', module);

story.add('Button secondary', () => (
  <React.Fragment>
    <Button secondary>{text('Secondary Button')}</Button>
  </React.Fragment>
));

story.add('Button primary', () => (
  <React.Fragment>
    <Button primary>{text('Primary Button')}</Button>
  </React.Fragment>
));
