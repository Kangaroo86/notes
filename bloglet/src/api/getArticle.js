import toArticle from './utils/toArticle';

export default function getArticle(id, { databaseId, token }) {
  return fetch(`https://api.airtable.com/v0/${databaseId}/articles/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => response.json())
    .then(toArticle);
}
