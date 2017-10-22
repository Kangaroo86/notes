import getNotesProcessReducer from './getNotesProcessReducer';
import updateNoteProcessReducer from './updateNoteProcessReducer';
import createNoteProcessReducer from './createNoteProcessReducer';
import deleteNoteProcessReducer from './deleteNoteProcessReducer';
import selectNoteReducer from './selectNoteReducer';
import deselectNoteReducer from './deselectNoteReducer';

const reducers = [
  getNotesProcessReducer,
  updateNoteProcessReducer,
  createNoteProcessReducer,
  deleteNoteProcessReducer,
  selectNoteReducer,
  deselectNoteReducer
];

export default function rootReducer(
  currentState = {
    notes: null,
    selectedNoteId: null
  },
  action
) {
  return reducers.reduce(
    (nextState, reducer) => reducer(nextState, action),
    currentState
  );
}
