import React from 'react';
//@import "compass/css3";
import { storiesOf } from '@storybook/react';
import SquareComponent from './SquareComponent.js';
import './SquareComponent.story.css';

storiesOf('SquareComponent', module).add('square Path', () =>
  <SquareComponent />
);
