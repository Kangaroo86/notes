import React, { Component } from 'react';

import env from './env';

import IndexPage from './components/IndexPage';

import getNotes from './api/getNotes';
import updateNote from './api/updateNote';
import deleteNote from './api/deleteNote';
import createNote from './api/createNote';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: null,
      selectedNoteId: null
    };

    this.props.store.subscribe(() => {
      this.setState(this.props.store.getState());
    });
  }

  render() {
    return (
      <IndexPage
        notes={this.state.notes}
        selectedNoteId={this.state.selectedNoteId}
        onSelect={this._selectNote}
        onSave={this._saveNote}
        onDelete={this._deleteNote}
        onDeselectNote={this._deselectNote}
      />
    );
  }

  componentDidMount() {
    getNotes({
      databaseId: env.AIRTABLE_DATABASE_ID,
      token: env.AIRTABLE_TOKEN
    }).then(notes => {
      this.props.store.dispatch({ type: 'SET_NOTES', notes });
    });
  }

  _selectNote = noteId => {
    this.props.store.dispatch({ type: 'SELECT_NOTE', noteId });
  };

  _saveNote = ({ id, ...changes }) => {
    if (id) {
      updateNote(id, changes, {
        databaseId: env.AIRTABLE_DATABASE_ID,
        token: env.AIRTABLE_TOKEN
      }).then(updatedNote => {
        this.props.store.dispatch({ type: 'UPDATE_NOTE', note: updatedNote });
      });
    } else {
      createNote(changes, {
        databaseId: env.AIRTABLE_DATABASE_ID,
        token: env.AIRTABLE_TOKEN
      }).then(createdNote => {
        this.props.store.dispatch({ type: 'CREATE_NOTE', note: createdNote });
      });
    }
  };

  _deleteNote = ({ id }) => {
    deleteNote(id, {
      databaseId: env.AIRTABLE_DATABASE_ID,
      token: env.AIRTABLE_TOKEN
    }).then(wasDeleted => {
      this.props.store.dispatch({ type: 'DELETE_NOTE', noteId: id });
    });
  };

  _deselectNote = () => {
    this.props.store.dispatch({ type: 'DESELECT_NOTE' });
  };
}
