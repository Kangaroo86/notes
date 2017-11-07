export default async function getArticle(id, { baseUrl }) {
  try {
    const response = await fetch(`${baseUrl}/articles/${id}`);
    const body = await response.json();
    if (body.error) throw new Error(body.message);
    return body;
  } catch (error) {
    if (error.message.startsWith('ArticleService.ERROR_')) throw error;
    throw new Error('ArticleService.ERROR_UNEXPECTED');
  }
}
