import recordToNote from './utils/recordToNote';

export default function getNotes({ databaseId, token }) {
  return fetch(`https://api.airtable.com/v0/${databaseId}/notes`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => response.json())
    .then(data => data.records.map(recordToNote));
}
