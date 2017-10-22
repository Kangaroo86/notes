export default function selectNoteReducer(currentState, action) {
  switch (action.type) {
    case 'SELECT_NOTE':
      return {
        ...currentState,
        selectedNoteId: action.noteId
      };
    default:
      return currentState;
  }
}
