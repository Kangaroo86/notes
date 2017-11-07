import React from 'react';
import { shallow } from 'enzyme';
import DetailedWidgetComponent from './DetailedWidgetComponent';

describe('DetailedWidgetComponent', () => {
  let hostInfo = {
    rent: 500,
    dimensions: 300,
    location: 'Berkeley, CA',
    date: 'September 23, 2017',
    amenities: 'washer/dryer, water hose, compost/recycling/trash bins'
    //   imagePath: '//via.placeholder.com/300x200'
  };

  it('Renders DetailedWidgetComponent', () => {
    const wrapper = shallow(<DetailedWidgetComponent hostInfo={hostInfo} />);
    expect(wrapper.find('h4').text()).toBe(hostInfo.location);
  });
});
