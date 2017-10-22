import recordToNote from './utils/recordToNote';

export default function updateNote(id, changes, { databaseId, token }) {
  return fetch(`https://api.airtable.com/v0/${databaseId}/notes/${id}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fields: changes
    })
  })
    .then(response => response.json())
    .then(record => recordToNote(record));
}
