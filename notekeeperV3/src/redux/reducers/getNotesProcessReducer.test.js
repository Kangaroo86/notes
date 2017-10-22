import getNotesProcessReducer from './getNotesProcessReducer';

import deepFreeze from 'deep-freeze';

import data from '../../mock-data';

describe('getNotesProcessReducer', () => {
  it('action.type GET_NOTES_COMPLETED', () => {
    const action = {
      type: 'GET_NOTES_COMPLETED',
      notes: [...data.notes]
    };

    const currentState = {
      notes: null,
      selectedNoteId: null
    };

    deepFreeze(currentState);

    const nextState = {
      notes: action.notes,
      selectedNoteId: null,
      isGettingNotes: false
    };

    expect(getNotesProcessReducer(currentState, action)).toEqual(nextState);
  });
});
