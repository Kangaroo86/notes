/* eslint-disable import/first */

import deleteNoteProcess from './deleteNoteProcess';

jest.mock('../../api/deleteNote');
import deleteNote from '../../api/deleteNote';

import data from '../../mock-data';

describe('deleteNoteProcess', () => {
  it('Calls deleteNote API utility and dispatches DELETE_NOTE_COMPLETED action', () => {
    const thunk = deleteNoteProcess(data.notes[0].id);
    expect(typeof thunk).toBe('function');

    deleteNote.mockReturnValueOnce(Promise.resolve());

    const dispatch = jest.fn();
    const getState = () => ({});

    return thunk(dispatch, getState, {}).then(() => {
      expect(deleteNote).toBeCalled();
      expect(dispatch).toBeCalledWith({
        type: 'DELETE_NOTE_COMPLETED',
        noteId: data.notes[0].id
      });
    });
  });
});
