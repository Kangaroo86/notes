import deleteNote from '../../api/deleteNote';

export default function deleteNoteProcess(id) {
  return (dispatch, getState, env) => {
    dispatch({ type: 'DELETE_NOTE_STARTED' });
    return deleteNote(id, {
      databaseId: env.AIRTABLE_DATABASE_ID,
      token: env.AIRTABLE_TOKEN
    })
      .then(() => {
        dispatch({ type: 'DELETE_NOTE_COMPLETED', noteId: id });
        return true;
      })
      .catch(error => {
        dispatch({ type: 'DELETE_NOTE_FAILED' });
      });
  };
}
