export default function getArticles({ baseUrl }) {
  return fetch(`${baseUrl}/articles`).then(response => response.json());
}
