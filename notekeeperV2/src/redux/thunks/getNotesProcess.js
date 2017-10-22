import getNotes from '../../api/getNotes';

export default function getNotesProcess() {
  return (dispatch, getState, env) => {
    dispatch({ type: 'GET_NOTES_STARTED' });
    return getNotes({
      databaseId: env.AIRTABLE_DATABASE_ID,
      token: env.AIRTABLE_TOKEN
    })
      .then(notes => {
        dispatch({ type: 'GET_NOTES_COMPLETED', notes });
        return notes;
      })
      .catch(error => {
        dispatch({ type: 'GET_NOTES_FAILED' });
      });
  };
}
