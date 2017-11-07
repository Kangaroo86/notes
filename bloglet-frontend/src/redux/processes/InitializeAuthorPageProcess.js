import getUser from '../../api/getUser';
import findArticlesByAuthorId from '../../api/findArticlesByAuthorId';
// import selectAuthenticatedUser from '../selectors/selectAuthenticatedUser';

const STARTED = 'INITIALIZE_AUTHOR_PAGE_STARTED';
const COMPLETED = 'INITIALIZE_AUTHOR_PAGE_COMPLETED';
const FAILED = 'INITIALIZE_AUTHOR_PAGE_FAILED';

export default {
  create({ authorId }) {
    return async (dispatch, getState, env) => {
      try {
        dispatch({ type: STARTED });

        const user = await getUser(authorId, {
          baseUrl: env.API_BASE_URL
        });

        user.articles = await findArticlesByAuthorId(user.id, {
          baseUrl: env.API_BASE_URL
        });

        dispatch({ type: COMPLETED, user });
      } catch (error) {
        let errorCode = 'InitializeAuthorPageProcess.ERROR_UNEXPECTED';

        if (
          error.message.startsWith('InitializeAuthorPageProcess.ERROR_') ||
          error.message.startsWith('ArticleService.ERROR_') ||
          error.message.startsWith('UserService.ERROR_')
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
      usersById: action.user
        ? {
            ...currentState.usersById,
            [action.user.id]: action.user
          }
        : currentState.usersById,
      errorCode: action.errorCode
    };
  }
};
