import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import NoteEditor from './NoteEditor';

import data from '../mock-data';

storiesOf('NoteEditor', module)
  .add('[001] Render empty form', () => <NoteEditor />)
  .add('[002] Render pre-populated form', () =>
    <NoteEditor note={data.notes[0]} />
  )
  .add('[003] Triggers onSubmit (with empty form)', () =>
    <NoteEditor onSave={action('SUBMIT_NOTE')} />
  )
  .add('[003] Triggers onSubmit (with pre-populated form)', () =>
    <NoteEditor note={data.notes[0]} onSave={action('SUBMIT_NOTE')} />
  )
  .add('[004] Triggers onDelete', () =>
    <NoteEditor note={data.notes[0]} onDelete={action('DELETE_NOTE')} />
  );
