import React from 'react';
import { storiesOf } from '@storybook/react';
import EditableWidgetComponent from './EditableWidgetComponent';

let hostInfo = {
  rent: 500,
  dimensions: 300,
  location: 'Berkeley, CA',
  date: 'September 23, 2017',
  amenities: 'washer/dryer, water hose, compost/recycling/trash bins'
  //   imagePath: '//via.placeholder.com/300x200'
};

storiesOf('EditableWidgetComponent', module).add('happy path', () =>
  <EditableWidgetComponent
    hostInfo={hostInfo}
    onEdit={event => console.log(event)}
    onDelete={event => console.log(event)}
  />
);
