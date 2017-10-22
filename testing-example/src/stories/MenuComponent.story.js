import React from 'react';
import { storiesOf } from '@storybook/react';
import MenuComponent from '../Components/MenuComponent';
import './MenuComponent.story.css';


let menuItems = [
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

storiesOf('MenuComponent', module)
  .add('Happy Path', () => <MenuComponent items={menuItems} />);
