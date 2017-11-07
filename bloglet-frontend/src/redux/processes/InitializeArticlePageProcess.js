import getArticle from '../../api/getArticle';

const STARTED = 'INITIALIZE_ARTICLE_PAGE_STARTED';
const COMPLETED = 'INITIALIZE_ARTICLE_PAGE_COMPLETED';
const FAILED = 'INITIALIZE_ARTICLE_PAGE_FAILED';

export default {
  create({ articleId }) {
    return async (dispatch, getState, env) => {
      try {
        dispatch({ type: STARTED });

        const article = await getArticle(articleId, {
          baseUrl: env.API_BASE_URL
        });

        dispatch({ type: COMPLETED, article });
      } catch (error) {
        let errorCode = 'InitializeArticlePageProcess.ERROR_UNEXPECTED';

        if (
          error.message.startsWith('InitializeArticlePageProcess.ERROR_') ||
          error.message.startsWith('ArticleService.ERROR_')
        ) {
          errorCode = error.message;
        }

        dispatch({ type: FAILED, errorCode });
      }
    };
  },
  reduce(currentState, action) {
    if (![STARTED, COMPLETED, FAILED].includes(action.type)) {
      return currentState;
    }
    return {
      ...currentState,
      articlesById: action.article
        ? {
            ...currentState.articlesById,
            [action.article.id]: action.article
          }
        : currentState.articlesById,
      errorCode: action.errorCode
    };
  }
};
