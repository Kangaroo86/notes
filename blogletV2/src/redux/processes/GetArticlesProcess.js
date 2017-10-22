import getArticles from '../../api/getArticles';
import getUsers from '../../api/getUsers';

const STARTED = 'GET_ARTICLES_STARTED';
const COMPLETED = 'GET_ARTICLES_COMPLETED';
const FAILED = 'GET_ARTICLES_FAILED';

export default {
  //
  // Thunk Creator
  //
  create() {
    return (dispatch, getState, env) => {
      const context = {};
      dispatch({ type: STARTED });
      return getArticles({
        databaseId: env.AIRTABLE_DATABASE_ID,
        token: env.AIRTABLE_TOKEN
      })
        .then(articles => {
          context.articles = articles;
          return getUsers({
            databaseId: env.AIRTABLE_DATABASE_ID,
            token: env.AIRTABLE_TOKEN
          });
        })
        .then(users => {
          const { articles } = context;
          const usersById = users.reduce(
            (accumulator, user) => ({ ...accumulator, [user.id]: user }),
            {}
          );
          articles.forEach(article => {
            article.author = usersById[article.authorId];
          });
          dispatch({ type: COMPLETED, articles });
          return articles;
        })
        .catch(error => {
          dispatch({ type: FAILED });
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
          articlesById: action.articles.reduce(
            (accumulator, article) => ({
              ...accumulator,
              [article.id]: article
            }),
            {}
          ),
          articleIds: action.articles.map(article => article.id)
        };
      default:
        return currentState;
    }
  }
};
