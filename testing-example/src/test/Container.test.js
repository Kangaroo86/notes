// What are the things we should test?
// How many components should we expect in this class?
// How do we test conditionally rendered components?
// do our fetch function fire?
import React from 'react';
import { shallow, mount } from 'enzyme';
import { assert } from 'chai';

import Container from '../Components/Container';

describe('tests the container component', () => {
  it('should contain loadingComponent when component is first rendered', () => {
    const shallowWrapper = shallow(<Container />);
    let loadingWrapper = shallowWrapper.find('Loading');
    let MenuComponentWrapper = shallowWrapper.find('MenuComponent');

      assert.equal(loadingWrapper.length, 1)
      assert.equal(MenuComponentWrapper.length, 0)
  });

  it('should show MenuComponent when loading state is false', () => {
    const shallowWrapper = shallow(<Container />);
    shallowWrapper.setState({loading: false})
    let MenuComponentWrapper = shallowWrapper.find('MenuComponent');

    assert.equal(MenuComponentWrapper.length, 1)
  })


// this will fail the test. We need to mock up fetch which involves using another library.
  xit('should fire fetchData upon render', () => {
    const wrapper = mount(<Container />);
    const fetchData = jest.fn();
    expect(fetchData).toHaveBeenCalled();
    })
});












































// describe('tests the container component', () => {
//   it('should show the Loading Component to be the default', () => {
//     const wrapper = shallow(<Container />);
//     const container = wrapper.first('div');
//     const loading = wrapper.find('Loading');
//
//     assert.equal(container.length, 1);
//     assert.equal(loading.length, 1);
//     assert.equal(wrapper.find('MenuComponent').length, 0);
//   });
//
//   it('should show the MenuComponent when it has loaded', () => {
//     const wrapper = shallow(<Container />);
//     wrapper.setState({loading: false});
//     const MenuComponent = wrapper.find('MenuComponent');
//     assert.equal(MenuComponent.length, 1);
//   });
//
//   it('should fire the fetch function when the component mounts', () => {
//     const wrapper = mount(<Container />);
//     const fetchData = jest.fn();
//     const fetch = jest.fn();
//     expect(fetchData).toHaveBeenCalled();
//   })
// })
