import createNoteProcessReducer from './createNoteProcessReducer';

import deepFreeze from 'deep-freeze';

import data from '../../mock-data';

describe('createNoteProcessReducer', () => {
  it('action.type CREATE_NOTE_COMPLETED', () => {
    const action = {
      type: 'CREATE_NOTE_COMPLETED',
      note: { ...data.notes[0] }
    };

    const currentState = {
      notes: [data.notes[1]],
      selectedNoteId: null
    };

    deepFreeze(currentState);

    const nextState = {
      notes: [action.note, data.notes[1]],
      selectedNoteId: action.note.id,
      isCreatingNote: false
    };

    expect(createNoteProcessReducer(currentState, action)).toEqual(nextState);
  });
});
