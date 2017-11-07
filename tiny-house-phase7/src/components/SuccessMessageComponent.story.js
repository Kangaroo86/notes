import React from 'react';
import { storiesOf } from '@storybook/react';
import SuccessMessageComponent from './SuccessMessageComponent';

storiesOf('SuccessMessageComponent', module).add('happy path', () =>
  <SuccessMessageComponent onClose={() => {}} />
);
