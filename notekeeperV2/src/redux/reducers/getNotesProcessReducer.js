export default function getNotesProcessReducer(currentState, action) {
  switch (action.type) {
    case 'GET_NOTES_STARTED':
      return {
        ...currentState,
        isGettingNotes: true
      };
    case 'GET_NOTES_COMPLETED':
      return {
        ...currentState,
        notes: action.notes,
        isGettingNotes: false
      };
    case 'GET_NOTES_FAILED':
      return {
        ...currentState,
        isGettingNotes: false,
        didGettingNotesFail: true
      };
    default:
      return currentState;
  }
}
