/* eslint-disable import/first */

import updateNoteProcess from './updateNoteProcess';

jest.mock('../../api/updateNote');
import updateNote from '../../api/updateNote';

import data from '../../mock-data';

describe('updateNoteProcess', () => {
  it('Calls updateNote API utility, returns the updated created note, and dispatches UPDATE_NOTE_COMPLETED action', () => {
    const { id, ...changes } = data.notes[0];
    const thunk = updateNoteProcess(id, changes);
    expect(typeof thunk).toBe('function');

    updateNote.mockReturnValueOnce(Promise.resolve({ ...data.notes[0] }));

    const dispatch = jest.fn();
    const getState = () => ({});

    return thunk(dispatch, getState, {}).then(updatedNote => {
      expect(updateNote).toBeCalled();
      expect(updatedNote).toEqual({ ...data.notes[0] });
      expect(dispatch).toBeCalledWith({
        type: 'UPDATE_NOTE_COMPLETED',
        note: updatedNote
      });
    });
  });
});
