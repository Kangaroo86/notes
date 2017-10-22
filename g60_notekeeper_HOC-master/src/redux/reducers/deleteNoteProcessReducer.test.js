import deleteNoteProcessReducer from './deleteNoteProcessReducer';

import deepFreeze from 'deep-freeze';

import data from '../../mock-data';

describe('deleteNoteProcessReducer', () => {
  it('action.type DELETE_NOTE_COMPLETED', () => {
    const action = {
      type: 'DELETE_NOTE_COMPLETED',
      noteId: data.notes[0].id
    };

    const currentState = {
      notes: [data.notes[0], data.notes[1]],
      selectedNoteId: data.notes[0].id
    };

    deepFreeze(currentState);

    const nextState = {
      notes: [data.notes[1]],
      selectedNoteId: null,
      isDeletingNote: false
    };

    expect(deleteNoteProcessReducer(currentState, action)).toEqual(nextState);
  });
});
