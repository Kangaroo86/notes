import getArticles from '../../api/getArticles';

const STARTED = 'INITIALIZE_INDEX_PAGE_STARTED';
const COMPLETED = 'INITIALIZE_INDEX_PAGE_COMPLETED';
const FAILED = 'INITIALIZE_INDEX_PAGE_FAILED';

export default {
  //
  // Thunk Creator
  //
  create(props) {
    return async (dispatch, getState, env) => {
      try {
        dispatch({ type: STARTED });

        const articles = await getArticles({
          baseUrl: env.API_BASE_URL
        });

        dispatch({ type: COMPLETED, articles });
      } catch (error) {
        console.error(error);
        dispatch({
          type: FAILED,
          errorCode: 'InitializeIndexPageProcess.ERROR_UNEXPECTED'
        });
      }
    };
  },
  //
  // Reducer
  //
  reduce(currentState, action) {
    if (![STARTED, COMPLETED, FAILED].includes(action.type)) {
      return currentState;
    }

    return {
      ...currentState,
      articlesById: Array.isArray(action.articles)
        ? action.articles.reduce(
            (accumulator, article) => ({
              ...accumulator,
              [article.id]: article
            }),
            {}
          )
        : null,
      articleIds: Array.isArray(action.articles)
        ? action.articles.map(article => article.id)
        : null,
      errorCode: action.errorCode
    };
  }
};
