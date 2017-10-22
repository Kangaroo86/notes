import createNote from '../../api/createNote';

export default function createNoteProcess(changes) {
  return (dispatch, getState, env) => {
    dispatch({ type: 'CREATE_NOTE_STARTED' });
    return createNote(changes, {
      databaseId: env.AIRTABLE_DATABASE_ID,
      token: env.AIRTABLE_TOKEN
    })
      .then(createdNote => {
        dispatch({ type: 'CREATE_NOTE_COMPLETED', note: createdNote });
        return createdNote;
      })
      .catch(error => {
        dispatch({ type: 'CREATE_NOTE_FAILED' });
      });
  };
}
