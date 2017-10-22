import toArticle from './utils/toArticle';

export default function getArticles({ authorUuid, databaseId, token }) {
  const filter = authorUuid
    ? `?filterByFormula=(%7Bauthor%7D%3D%27${authorUuid}%27)`
    : '';
  return fetch(`https://api.airtable.com/v0/${databaseId}/articles${filter}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => response.json())
    .then(data => data.records.map(toArticle));
}
