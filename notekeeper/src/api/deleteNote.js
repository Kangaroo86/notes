export default function deleteNote(id) {
  return fetch(`https://api.airtable.com/v0/YOUR_AIRTABLE_ID/notes/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer YOUR_AIRTABLE_TOKEN'
    }
  })
    .then(response => response.json())
    .then(result => result.deleted);
}
