import recordToNote from './utils/recordToNote';

export default function createNote(note, { databaseId, token }) {
  return fetch(`https://api.airtable.com/v0/${databaseId}/notes`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fields: note
    })
  })
    .then(response => response.json())
    .then(recordToNote);
}
