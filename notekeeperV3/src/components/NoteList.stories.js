import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import NoteList from './NoteList';

import data from '../mock-data';

storiesOf('NoteList', module)
  .add('[001] Renders notes', () => <NoteList notes={data.notes} />)
  .add('[002] Renders notes with one selected', () =>
    <NoteList notes={data.notes} selectedNoteId={data.notes[1].id} />
  )
  .add('[003] Triggers onSelect', () =>
    <NoteList notes={data.notes} onSelect={action('SELECT_NOTE')} />
  );
