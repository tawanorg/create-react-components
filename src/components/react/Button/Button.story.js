import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Button from './Button';

const story = storiesOf('Button', module);
story.addDecorator(withKnobs);

story.add('Button With knobs', () => (
  <Button>{text('An Button')}</Button>
));
