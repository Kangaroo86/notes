import rootReducer from './rootReducer';

import deepFreeze from 'deep-freeze';

import data from '../../mock-data';

describe('rootReducer', () => {
  it('action.type SET_NOTES', () => {
    const action = {
      type: 'SET_NOTES',
      notes: [...data.notes]
    };

    const currentState = {
      notes: null,
      selectedNoteId: null
    };

    deepFreeze(currentState);

    const nextState = {
      notes: action.notes,
      selectedNoteId: null
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  });

  it('action.type SELECT_NOTE', () => {
    const action = {
      type: 'SELECT_NOTE',
      noteId: data.notes[0].id
    };

    const currentState = {
      notes: [data.notes[0], data.notes[1]],
      selectedNoteId: null
    };

    deepFreeze(currentState);

    const nextState = {
      notes: [...currentState.notes],
      selectedNoteId: action.noteId
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  });

  it('action.type UPDATE_NOTE', () => {
    const action = {
      type: 'UPDATE_NOTE',
      note: { ...data.notes[0], title: data.notes[0].title + ' UPDATED' }
    };

    const currentState = {
      notes: [data.notes[0], data.notes[1]],
      selectedNoteId: data.notes[0].id
    };

    deepFreeze(currentState);

    const nextState = {
      notes: [action.note, data.notes[1]],
      selectedNoteId: data.notes[0].id
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  });

  it('action.type CREATE_NOTE', () => {
    const action = {
      type: 'CREATE_NOTE',
      note: { ...data.notes[0] }
    };

    const currentState = {
      notes: [data.notes[1]],
      selectedNoteId: null
    };

    deepFreeze(currentState);

    const nextState = {
      notes: [action.note, data.notes[1]],
      selectedNoteId: action.note.id
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  });

  it('action.type DELETE_NOTE', () => {
    const action = {
      type: 'DELETE_NOTE',
      noteId: data.notes[0].id
    };

    const currentState = {
      notes: [data.notes[0], data.notes[1]],
      selectedNoteId: data.notes[0].id
    };

    deepFreeze(currentState);

    const nextState = {
      notes: [data.notes[1]],
      selectedNoteId: null
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  });

  it('action.type DESELECT_NOTE', () => {
    const action = {
      type: 'DESELECT_NOTE'
    };

    const currentState = {
      notes: [data.notes[0], data.notes[1]],
      selectedNoteId: data.notes[0].id
    };

    deepFreeze(currentState);

    const nextState = {
      notes: [data.notes[0], data.notes[1]],
      selectedNoteId: null
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  });
});
