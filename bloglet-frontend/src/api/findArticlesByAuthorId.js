export default function findArticlesByAuthorId(authorId, { baseUrl }) {
  return fetch(`${baseUrl}/users/${authorId}/articles`).then(response =>
    response.json()
  );
}
