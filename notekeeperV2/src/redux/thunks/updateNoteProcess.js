import updateNote from '../../api/updateNote';

export default function updateNoteProcess(id, changes) {
  return (dispatch, getState, env) => {
    dispatch({ type: 'UPDATE_NOTE_STARTED' });
    return updateNote(id, changes, {
      databaseId: env.AIRTABLE_DATABASE_ID,
      token: env.AIRTABLE_TOKEN
    })
      .then(updatedNote => {
        dispatch({ type: 'UPDATE_NOTE_COMPLETED', note: updatedNote });
        return updatedNote;
      })
      .catch(error => {
        dispatch({ type: 'UPDATE_NOTE_FAILED' });
      });
  };
}
