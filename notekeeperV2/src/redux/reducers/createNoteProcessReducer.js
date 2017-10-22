export default function createNoteProcessReducer(currentState, action) {
  switch (action.type) {
    case 'CREATE_NOTE_STARTED':
      return {
        ...currentState,
        isCreatingNote: true
      };
    case 'CREATE_NOTE_COMPLETED':
      return {
        ...currentState,
        notes: [action.note, ...currentState.notes],
        selectedNoteId: action.note.id,
        isCreatingNote: false
      };
    case 'CREATE_NOTE_FAILED':
      return {
        ...currentState,
        isCreatingNote: false,
        didCreatingNoteFail: true
      };
    default:
      return currentState;
  }
}
