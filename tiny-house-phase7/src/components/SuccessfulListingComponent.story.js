import React from 'react';
import { storiesOf } from '@storybook/react';
import SuccessfulListingComponent from './SuccessfulListingComponent';

let hostInfo = {
  rent: 500,
  dimensions: 300,
  location: 'Berkeley, CA',
  date: 'September 23, 2017',
  amenities: 'washer/dryer, water hose, compost/recycling/trash bins'
  //   imagePath: '//via.placeholder.com/300x200'
};

const onClose = () => {};
const onEdit = () => {};
const onDelete = () => {};

storiesOf('SuccessfulListingComponent', module).add('happy path', () =>
  <SuccessfulListingComponent
    hostInfo={hostInfo}
    onClose={onClose}
    onEdit={onEdit}
    onDelete={onDelete}
  />
);
