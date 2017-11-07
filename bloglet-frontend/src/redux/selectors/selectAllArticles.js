export default function selectAllArticles(state) {
  const articlesById = state.articlesById || {};
  const articleIds = state.articleIds || null;
  return Array.isArray(articleIds)
    ? articleIds.map(articleId => articlesById[articleId])
    : null;
}
