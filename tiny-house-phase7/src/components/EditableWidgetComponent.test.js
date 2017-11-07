import React from 'react';
import { shallow } from 'enzyme';
import EditableWidgetComponent from './EditableWidgetComponent';

describe('EditableWidgetComponent', () => {
  let hostInfo = {
    rent: 500,
    dimensions: 300,
    location: 'Berkeley, CA',
    date: 'September 23, 2017',
    amenities: 'washer/dryer, water hose, compost/recycling/trash bins'
    //   imagePath: '//via.placeholder.com/300x200'
  };

  it('Renders EditableWidgetComponent', () => {
    const wrapper = shallow(
      <EditableWidgetComponent hostInfo={hostInfo} onDelete={onDelete} />
    );
    expect(wrapper.find('h4').text()).toBe(hostInfo.location);
  });

  it('Triggers onDelete', () => {
    const onClick = jest.fn();
    const wrapper = shallow(
      <EditableWidgetComponent hostInfo={hostInfo} onDelete={onDelete} />
    );
    wrapper.find('.btn-large').simulate('click', { preventDefault: () => {} });
    expect(onDelete).toBeCalled();
  });
});
