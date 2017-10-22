export default function updateNoteProcessReducer(currentState, action) {
  switch (action.type) {
    case 'UPDATE_NOTE_STARTED':
      return {
        ...currentState,
        isUpdatingNote: true
      };
    case 'UPDATE_NOTE_COMPLETED':
      return {
        ...currentState,
        notes: currentState.notes.map(
          note => (note.id === action.note.id ? action.note : note)
        ),
        isUpdatingNote: false
      };
    case 'UPDATE_NOTE_FAILED':
      return {
        ...currentState,
        isUpdatingNote: false,
        didUpdatingNoteFail: true
      };
    default:
      return currentState;
  }
}
