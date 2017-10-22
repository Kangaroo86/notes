import recordToNote from './utils/recordToNote';

export default function updateNote(id, changes) {
  return fetch(`https://api.airtable.com/v0/YOUR_AIRTABLE_ID/notes/${id}`, {
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer YOUR_AIRTABLE_TOKEN',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fields: changes
    })
  })
    .then(response => response.json())
    .then(record => recordToNote(record));
}
