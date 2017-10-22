export default function rootReducer(
  currentState = {
    notes: null,
    selectedNoteId: null
  },
  action
) {
  switch (action.type) {
    case 'SET_NOTES':
      return { ...currentState, notes: action.notes };
    case 'SELECT_NOTE':
      return { ...currentState, selectedNoteId: action.noteId };
    case 'UPDATE_NOTE':
      return {
        ...currentState,
        notes: currentState.notes.map(
          note => (note.id === action.note.id ? action.note : note)
        )
      };
    case 'CREATE_NOTE':
      return {
        ...currentState,
        selectedNoteId: action.note.id,
        notes: [action.note, ...currentState.notes]
      };
    case 'DELETE_NOTE':
      return {
        ...currentState,
        selectedNoteId: null,
        notes: currentState.notes.filter(note => note.id !== action.noteId)
      };
    case 'DESELECT_NOTE':
      return {
        ...currentState,
        selectedNoteId: null
      };
    default:
      return currentState;
  }
}
