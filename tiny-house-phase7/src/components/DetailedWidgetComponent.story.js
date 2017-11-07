import React from 'react';
import { storiesOf } from '@storybook/react';
import DetailedWidgetComponent from './DetailedWidgetComponent';

let hostInfo = {
  rent: 500,
  dimensions: 300,
  location: 'Berkeley, CA',
  date: 'September 23, 2017',
  amenities: 'washer/dryer, water hose, compost/recycling/trash bins'
  //   imagePath: '//via.placeholder.com/300x200'
};

storiesOf('DetailedWidgetComponent', module).add('happy path', () =>
  <DetailedWidgetComponent hostInfo={hostInfo} />
);
