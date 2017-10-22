import toUser from './utils/toUser';

export default function getUser(id, { databaseId, token }) {
  return fetch(`https://api.airtable.com/v0/${databaseId}/users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => response.json())
    .then(toUser);
}
