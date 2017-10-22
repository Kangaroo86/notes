import React, { Component } from 'react';

import IndexPage from './components/IndexPage';

import getNotesProcess from './redux/thunks/getNotesProcess';
import updateNoteProcess from './redux/thunks/updateNoteProcess';
import createNoteProcess from './redux/thunks/createNoteProcess';
import deleteNoteProcess from './redux/thunks/deleteNoteProcess';

function connectToRedux(WrappedComponent) {
  return class ConnectedToComponent extends Component {
    render() {
      return <WrappedComponent {...this.props}/>
    }
  }
}

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
      this.props.store.dispatch(createNoteProcess(changes));
    }
  };

  _deleteNote = ({ id }) => {
    this.props.store.dispatch(deleteNoteProcess(id));
  };

  _deselectNote = () => {
    this.props.store.dispatch({ type: 'DESELECT_NOTE' });
  };
}
