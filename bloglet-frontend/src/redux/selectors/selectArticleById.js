export default function selectArticleById(state, id) {
  const articlesById = state.articlesById || {};
  return articlesById[id] || null;
}
