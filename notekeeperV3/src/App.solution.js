import React, { Component } from 'react';

import env from './env';

import IndexPage from './components/IndexPage';

import getNotesProcess from './redux/thunks/getNotesProcess';
import updateNoteProcess from './redux/thunks/updateNoteProcess';

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
    this.props.store.dispatch(getNotesProcess());
  }

  _selectNote = noteId => {
    this.props.store.dispatch({ type: 'SELECT_NOTE', noteId });
  };

  _saveNote = ({ id, ...changes }) => {
    if (id) {
      this.props.store.dispatch(updateNoteProcess(id, changes));
    } else {
      // this.props.store.dispatch(createNote(changes));

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
