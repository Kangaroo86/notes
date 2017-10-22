import { configure } from '@storybook/react';
function loadStories() {
  require('../src/components/SquareComponent.story.css');
  require('../src/components/SquareComponent.story.js');
  // Require your stories here...
}
configure(loadStories, module);
