import { configure } from '@storybook/react';
function loadStories() {
  require('../src/index.css');
  require('../src/components/NoteListItem.stories');
  require('../src/components/NoteList.stories');
  require('../src/components/NoteEditor.stories');
  require('../src/components/DefaultPageLayout.stories');
}
configure(loadStories, module);
