import React from 'react';
import { storiesOf } from '@storybook/react';
import { specs, describe, it } from 'storybook-addon-specifications'

import { shallow } from 'enzyme';
import MenuItemComponent from '../Components/MenuItemComponent';
import './MenuItemComponent.story.css';


storiesOf('MenuItemComponent', module)
	.add('Happy Path', () => {

		let story = <MenuItemComponent
			item={{ name: 'Some Item A', price: 9.99, imagePath: '//via.placeholder.com/300x200' }}
		/>

		return story;
	}
	)
	.add('Incomplete Data', () =>
		<MenuItemComponent item={{ name: 'Some Item A', imagePath: '//via.placeholder.com/300x200' }} />
	)
	.add('No Data', () => <MenuItemComponent />);
