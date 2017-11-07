import React from 'react';
import { storiesOf } from '@storybook/react';
import FormComponent from './FormComponent';

storiesOf('FormComponent', module).add('To test onSubmit', () =>
  <FormComponent onSubmit={hostInfo => console.log(hostInfo)} />
);
