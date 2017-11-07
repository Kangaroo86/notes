import createUser from '../../api/createUser';

const STARTED = 'CREATE_USER_STARTED';
const COMPLETED = 'CREATE_USER_COMPLETED';
const FAILED = 'CREATE_USER_FAILED';

export default {
  //
  // Thunk Creator
  //
  create(attributes) {
    return async (dispatch, getState, env) => {
      try {
        dispatch({ type: STARTED });
        const user = await createUser(attributes, {
          baseUrl: env.API_BASE_URL
        });
        dispatch({ type: COMPLETED, user });
        return user;
      } catch (error) {
        dispatch({ type: FAILED });
      }
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
