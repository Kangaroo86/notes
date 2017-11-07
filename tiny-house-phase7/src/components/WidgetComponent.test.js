import React from 'react';
import { shallow } from 'enzyme';
import WidgetComponent from './WidgetComponent';

describe('WidgetComponent', () => {
  let hostInfo = {
    rent: 500,
    dimensions: 300,
    location: 'Berkeley, CA',
    date: 'September 23, 2017',
    amenities: 'washer/dryer, water hose, compost/recycling/trash bins'
    //   imagePath: '//via.placeholder.com/300x200'
  };

  it('Renders WidgetComponent', () => {
    const wrapper = shallow(
      <WidgetComponent hostInfo={hostInfo} onLove={onLove} />
    );
    expect(wrapper.find('h4').text()).toBe(hostInfo.location);
  });

  it('Triggers onLove', () => {
    const onClick = jest.fn();
    const wrapper = shallow(
      <WidgetComponent hostInfo={hostInfo} onLove={onLove} />
    );
    wrapper
      .find('.btn-floating')
      .simulate('click', { preventDefault: () => {} });
    expect(onLove).toBeCalled();
  });
});
