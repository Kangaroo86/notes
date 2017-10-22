export default function deselectNoteReducer(currentState, action) {
  switch (action.type) {
    case 'DESELECT_NOTE':
      return {
        ...currentState,
        selectedNoteId: null
      };
    default:
      return currentState;
  }
}
