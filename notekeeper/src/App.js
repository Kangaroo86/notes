import React, { Component } from 'react';

import IndexPage from './components/IndexPage';

import getNotes from './api/getNotes';
import updateNote from './api/updateNote';
import deleteNote from './api/deleteNote';
import createNote from './api/createNote';

export default class App extends Component {
  state = {
    notes: null,
    selectedNoteId: null
  };

  render() {
    return (
      <IndexPage
        notes={this.state.notes}
        selectedNoteId={this.state.selectedNoteId}
        onSelect={this._selectNote}
        onSave={this._saveNote}
        onDelete={this._deleteNote}
      />
    );
  }

  componentDidMount() {
    getNotes().then(notes => {
      this.setState({
        notes
      });
    });
  }

  _selectNote = noteId => {
    this.setState({
      selectedNoteId: noteId
    });
  };

  _saveNote = ({ id, ...changes }) => {
    if (id) {
      updateNote(id, changes).then(updatedNote => {
        this.setState(currentState => {
          return {
            notes: currentState.notes.map(
              note => (updatedNote.id === note.id ? updatedNote : note)
            )
          };
        });
      });
    } else {
      createNote(changes).then(createdNote => {
        this.setState(currentState => {
          return {
            notes: [createdNote, ...currentState.notes]
          };
        });
      });
    }
  };

  _deleteNote = ({ id }) => {
    deleteNote(id).then(wasDeleted => {
      this.setState(currentState => {
        return {
          notes: currentState.notes.filter(note => note.id !== id),
          selectedNoteId: null
        };
      });
    });
  };
}
