/* eslint-disable import/first */

import getNotesProcess from './getNotesProcess';

jest.mock('../../api/getNotes');
import getNotes from '../../api/getNotes';

import data from '../../mock-data';

describe('getNotesProcess', () => {
  it('Calls getNotes API utility, returns array of notes, and dispatches GET_NOTES_COMPLETED action', () => {
    const thunk = getNotesProcess();
    expect(typeof thunk).toBe('function');

    getNotes.mockReturnValueOnce(Promise.resolve([...data.notes]));

    const dispatch = jest.fn();
    const getState = () => ({});

    return thunk(dispatch, getState, {}).then(notes => {
      expect(getNotes).toBeCalled();
      expect(notes).toEqual([...data.notes]);
      expect(dispatch).toBeCalledWith({ type: 'GET_NOTES_COMPLETED', notes });
    });
  });
});
