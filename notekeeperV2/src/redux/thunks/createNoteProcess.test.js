/* eslint-disable import/first */

import createNoteProcess from './createNoteProcess';

jest.mock('../../api/createNote');
import createNote from '../../api/createNote';

import data from '../../mock-data';

describe('createNoteProcess', () => {
  it('Calls createNote API utility, returns the newly created note, and dispatches CREATE_NOTE_COMPLETED action', () => {
    const { id, ...noteWithoutId } = data.notes[0];
    const thunk = createNoteProcess(noteWithoutId);
    expect(typeof thunk).toBe('function');

    createNote.mockReturnValueOnce(Promise.resolve({ ...data.notes[0] }));

    const dispatch = jest.fn();
    const getState = () => ({});

    return thunk(dispatch, getState, {}).then(createdNote => {
      expect(createNote).toBeCalled();
      expect(createdNote).toEqual({ ...data.notes[0] });
      expect(dispatch).toBeCalledWith({
        type: 'CREATE_NOTE_COMPLETED',
        note: createdNote
      });
    });
  });
});
