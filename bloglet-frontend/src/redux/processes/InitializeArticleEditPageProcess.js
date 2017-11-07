import { defer } from '../../utils/FunctionUtils';
import getArticle from '../../api/getArticle';
import selectAuthenticatedUser from '../selectors/selectAuthenticatedUser';

const STARTED = 'INITIALIZE_ARTICLE_EDIT_PAGE_STARTED';
const COMPLETED = 'INITIALIZE_ARTICLE_EDIT_PAGE_COMPLETED';
const FAILED = 'INITIALIZE_ARTICLE_EDIT_PAGE_FAILED';

export default {
  create({ articleId, history }) {
    return async (dispatch, getState, env) => {
      try {
        dispatch({ type: STARTED });

        const authenticatedUser = selectAuthenticatedUser(getState());

        if (!authenticatedUser) {
          defer(() => {
            history.push('/login');
          });
          dispatch({ type: FAILED, willRedirect: true });
          return;
        }

        const article = await getArticle(articleId, {
          baseUrl: env.API_BASE_URL
        });

        if (article.author.id !== authenticatedUser.id) {
          throw new Error(
            'InitializeArticleEditPageProcess.ERROR_PERMISSION_DENIED'
          );
        }

        dispatch({ type: COMPLETED, article });
      } catch (error) {
        console.error(error);

        let errorCode = 'InitializeArticleEditPageProcess.ERROR_UNEXPECTED';

        if (
          error.message.startsWith('InitializeArticleEditPageProcess.ERROR_') ||
          error.message.startsWith('ArticleService.ERROR_')
        ) {
          errorCode = error.message;
        }

        dispatch({ type: FAILED, errorCode });
      }
    };
  },
  reduce(currentState, action) {
    if (
      ![STARTED, COMPLETED, FAILED].includes(action.type) ||
      action.willRedirect === true
    ) {
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
