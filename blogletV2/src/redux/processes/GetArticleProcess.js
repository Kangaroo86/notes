import getArticle from '../../api/getArticle';
import getUser from '../../api/getUser';

const STARTED = 'GET_ARTICLE_STARTED';
const COMPLETED = 'GET_ARTICLE_COMPLETED';
const FAILED = 'GET_ARTICLE_FAILED';

export default {
  //
  // Thunk Creator
  //
  create({ articleId }) {
    return (dispatch, getState, env) => {
      dispatch({ type: STARTED, articleId });
      const context = {};
      return getArticle(articleId, {
        databaseId: env.AIRTABLE_DATABASE_ID,
        token: env.AIRTABLE_TOKEN
      })
        .then(article => {
          context.article = article;
          return getUser(article.authorId, {
            databaseId: env.AIRTABLE_DATABASE_ID,
            token: env.AIRTABLE_TOKEN
          });
        })
        .then(user => {
          const { article } = context;
          article.author = user;
          dispatch({ type: COMPLETED, article });
          return article;
        })
        .catch(error => {
          dispatch({ type: FAILED, articleId });
        });
    };
  },
  //
  // Reducer
  //
  reduce(currentState, action) {
    switch (action.type) {
      case COMPLETED:
        return {
          ...currentState,
          articlesById: {
            ...currentState.articlesById,
            [action.article.id]: action.article
          }
        };
      default:
        return currentState;
    }
  }
};
