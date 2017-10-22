import recordToNote from './utils/recordToNote';

export default function createNote(note) {
  return fetch(`https://api.airtable.com/v0/YOUR_AIRTABLE_ID/notes`, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer YOUR_AIRTABLE_TOKEN',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fields: note
    })
  })
    .then(response => response.json())
    .then(recordToNote);
}
