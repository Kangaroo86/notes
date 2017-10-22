import getUser from '../../api/getUser';
import getArticles from '../../api/getArticles';

const STARTED = 'GET_USER_STARTED';
const COMPLETED = 'GET_USER_COMPLETED';
const FAILED = 'GET_USER_FAILED';

export default {
  //
  // Thunk Creator
  //
  create({ userId }) {
    return (dispatch, getState, env) => {
      dispatch({ type: STARTED, userId });
      const context = {};
      return getUser(userId, {
        databaseId: env.AIRTABLE_DATABASE_ID,
        token: env.AIRTABLE_TOKEN
      })
        .then(user => {
          context.user = user;
          return getArticles({
            databaseId: env.AIRTABLE_DATABASE_ID,
            token: env.AIRTABLE_TOKEN,
            authorUuid: user.uuid
          });
        })
        .then(articles => {
          const { user } = context;
          user.articles = articles;
          dispatch({ type: COMPLETED, user });
          return user;
        })
        .catch(error => {
          dispatch({ type: FAILED, userId });
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
          usersById: {
            ...currentState.usersById,
            [action.user.id]: action.user
          }
        };
      default:
        return currentState;
    }
  }
};
