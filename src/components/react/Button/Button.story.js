import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

// components
import Button from './Button';

const story = storiesOf('Button', module);

story.add('Button With knobs', () => (
  <Button>{text('An Button')}</Button>
));
