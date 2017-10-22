import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import NoteListItem from './NoteListItem';

import data from '../mock-data';

storiesOf('NoteListItem', module)
  .add('[001] Renders note', () => <NoteListItem note={data.notes[0]} />)
  .add('[002] Renders selected note', () =>
    <NoteListItem note={data.notes[0]} selected />
  )
  .add('[003] Triggers onSelect', () =>
    <NoteListItem note={data.notes[0]} onSelect={action('SELECT_NOTE')} />
  );
