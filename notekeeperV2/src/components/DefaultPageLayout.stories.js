import React from 'react';
import { storiesOf } from '@storybook/react';

import DefaultPageLayout from './DefaultPageLayout';
import NoteList from './NoteList';
import NoteEditor from './NoteEditor';

import data from '../mock-data';

storiesOf('DefaultPageLayout', module).add('[001] Render layout', () =>
  <DefaultPageLayout>
    <NoteList notes={data.notes} />
    <NoteEditor note={data.notes[0]} />
  </DefaultPageLayout>
);
