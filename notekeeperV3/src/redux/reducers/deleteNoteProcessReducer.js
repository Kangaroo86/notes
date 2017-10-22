export default function deleteNoteProcessReducer(currentState, action) {
  switch (action.type) {
    case 'DELETE_NOTE_STARTED':
      return {
        ...currentState,
        isDeletingNote: true
      };
    case 'DELETE_NOTE_COMPLETED':
      return {
        ...currentState,
        notes: currentState.notes.filter(note => note.id !== action.noteId),
        selectedNoteId: null,
        isDeletingNote: false
      };
    case 'DELETE_NOTE_FAILED':
      return {
        ...currentState,
        isDeletingNote: false,
        didDeletingNoteFail: true
      };
    default:
      return currentState;
  }
}
