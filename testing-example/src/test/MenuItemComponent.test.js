import React from 'react';
import { shallow, mount } from 'enzyme';
import MenuItemComponent from '../Components/MenuItemComponent';
import MenuComponent from '../Components/MenuComponent';

const onAddItem = (itemId) => {
  console.log(`This is the itemID!!! ${itemId}`);
}

const item = { name: 'Some Item A', price: 9.99, imagePath: '//via.placeholder.com/300x200' };

const menuItems = [
		{
			"name": "Smoked Swine",
			"price": 8.99,
			"imagePath": "//via.placeholder.com/300x200",
			"id": 1
		},
		{
			"name": "Royale with Cheese",
			"price": 11.99,
			"imagePath": "//via.placeholder.com/300x200",
			"id": 2
		},
		{
			"name": "Arugula Pie",
			"price": 14.99,
			"imagePath": "//via.placeholder.com/300x200",
			"id": 3
		},
		{
			"name": "Ice Cream Biscuit",
			"price": 7.99,
			"imagePath": "//via.placeholder.com/300x200",
			"id": 4
		}
	];

describe('a shallow test', () => {
  const shallowWrapper = shallow(<MenuItemComponent onAddItem={onAddItem} item={item} />);

// The following test fails because prop values cannot
// be testing with shallow rendering. Use mount() to test
// props
   xit('should return props', () => {
    expect(shallowWrapper.props().item).toEqual(item);
  });
  xit('should console.log the shallowWrapper object', () => {
      console.log(shallowWrapper.debug());
  });
  it('should highlight the .find method', () => {
    expect(shallowWrapper.find('div.card-content')).toHaveLength(1);
    expect(shallowWrapper.find('div.card-content').children()).toHaveLength(2);
    expect(shallowWrapper.find('button.card-content')).toHaveLength(0);

    // This just highlights you can use tag names but
    // you should stick to targeting these elements
    // by using classNames
    expect(shallowWrapper.find('button')).toHaveLength(1);
    expect(shallowWrapper.find('div')).toHaveLength(4);
  });

  it('checks if the components contains elements in a render tree', () => {
    expect(shallowWrapper.contains(<div className="card-action" />)).toBe(false)
    expect(shallowWrapper.contains(<p>{item.price || 'N/A'}</p>)).toBe(true)
  });

  // This just highlights that you can test if events are
  // fired. Usually events invoke functions to its more
  // valuable to mock that function and test if it was called
  it('checks if events were fired', () => {
      expect(shallowWrapper.find('button').simulate('click', {target: {id: {value: 3}}})).toBeTruthy();
  });

  // This is how you should properly test your mocked functions.
  it('should test if onAddItem function was fired', () => {
    const onAddItem = jest.fn();

    mount(<MenuItemComponent onAddItem={onAddItem} item={item} />).find('.menuChoice').simulate('click');
    expect(onAddItem).toHaveBeenCalled()
  });
});

describe('full render tests', () => {
  const fullWrapper = mount(<MenuItemComponent onAddItem={onAddItem} item={item} />);

  it('should test the props of the component', () => {

    expect(fullWrapper.props().item).toEqual(item);
  });

});




describe(' tests for MenuComponent', () => {
  xit('should console.log the shallowWrapper and fullWrapper', () => {
        console.log(shallow(<MenuComponent items={menuItems} />).debug());
        console.log(mount(<MenuComponent items={menuItems} />).debug());
  });
  it('tests children elemenets with full rendering', () => {
    expect(mount(<MenuComponent items={menuItems} />).children()).toHaveLength(4);
  });
  it('tests against parent and children components', () => {
    expect(mount(<MenuComponent items={menuItems} />).find('.card')).toHaveLength(menuItems.length);
  });

});
