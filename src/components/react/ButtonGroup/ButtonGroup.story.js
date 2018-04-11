import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import ButtonGroup from './ButtonGroup';

const story = storiesOf('ButtonGroup', module);
story.addDecorator(withKnobs);

story.add('ButtonGroup With knobs', () => (
  <ButtonGroup>{text('An ButtonGroup')}</ButtonGroup>
));
