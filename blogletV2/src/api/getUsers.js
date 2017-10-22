import toUser from './utils/toUser';

export default function getUsers({ databaseId, token }) {
  return fetch(`https://api.airtable.com/v0/${databaseId}/users`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => response.json())
    .then(data => data.records.map(toUser));
}
