import updateNoteProcessReducer from './updateNoteProcessReducer';

import deepFreeze from 'deep-freeze';

import data from '../../mock-data';

describe('updateNoteProcessReducer', () => {
  it('action.type UPDATE_NOTE_COMPLETED', () => {
    const action = {
      type: 'UPDATE_NOTE_COMPLETED',
      note: { ...data.notes[0], title: data.notes[0].title + ' UPDATED' }
    };

    const currentState = {
      notes: [data.notes[0], data.notes[1]],
      selectedNoteId: data.notes[0].id
    };

    deepFreeze(currentState);

    const nextState = {
      notes: [action.note, data.notes[1]],
      selectedNoteId: data.notes[0].id,
      isUpdatingNote: false
    };

    expect(updateNoteProcessReducer(currentState, action)).toEqual(nextState);
  });
});
