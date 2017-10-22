import React from 'react';

import DefaultPageLayout from './DefaultPageLayout';
import NoteList from './NoteList';
import NoteEditor from './NoteEditor';

export default function IndexPage({
  notes,
  selectedNoteId,
  onSelect = () => {},
  onSave = () => {},
  onDelete = () => {},
  onDeselectNote = () => {}
}) {
  return (
    <div className="IndexPage">
      <DefaultPageLayout onDeselectNote={onDeselectNote}>
        <NoteList
          notes={notes}
          selectedNoteId={selectedNoteId}
          onSelect={onSelect}
        />
        <NoteEditor
          onSave={onSave}
          onDelete={onDelete}
          note={
            selectedNoteId && notes
              ? notes.find(note => note.id === selectedNoteId)
              : {}
          }
        />
      </DefaultPageLayout>
    </div>
  );
}
