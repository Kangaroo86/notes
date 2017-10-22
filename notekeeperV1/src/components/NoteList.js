import React, { Component } from 'react';

import NoteListItem from './NoteListItem';

export default class NoteList extends Component {
  static defaultProps = {
    notes: [],
    onSelect: () => {}
  };
  render() {
    const { notes, selectedNoteId, onSelect } = this.props;
    if (!Array.isArray(notes)) {
      return (
        <div className="NoteList">
          <p className="NoteList-loadingMessage">Loading...</p>
        </div>
      );
    }
    return (
      <div className="NoteList">
        {notes.length === 0
          ? <p className="NoteList-emptyMessage">
              No notes availabe at this time.
            </p>
          : notes.map(note =>
              <NoteListItem
                key={note.id}
                note={note}
                onSelect={onSelect}
                selected={note.id === selectedNoteId}
              />
            )}
      </div>
    );
  }
}
