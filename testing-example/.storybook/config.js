import { configure } from '@storybook/react';

function loadStories() {
  require('../src/index.css');
  require('../src/stories/MenuItemComponent.story');
  require('../src/stories/MenuComponent.story');
}

configure(loadStories, module);
