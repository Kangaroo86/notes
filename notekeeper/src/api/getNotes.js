import recordToNote from './utils/recordToNote';

export default function getNotes() {
  return fetch(`https://api.airtable.com/v0/YOUR_AIRTABLE_ID/notes`, {
    headers: {
      Authorization: 'Bearer YOUR_AIRTABLE_TOKEN'
    }
  })
    .then(response => response.json())
    .then(data => data.records.map(recordToNote));
}
