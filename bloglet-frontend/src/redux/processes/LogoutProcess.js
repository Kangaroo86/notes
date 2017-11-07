const STARTED = 'LOGOUT_STARTED';
const COMPLETED = 'LOGOUT_COMPLETED';
const FAILED = 'LOGOUT_FAILED';

export default {
  //
  // Thunk Creator
  //
  create(credentials) {
    return async (dispatch, getState, env) => {
      try {
        dispatch({ type: STARTED });
        localStorage.removeItem('token');
        dispatch({ type: COMPLETED });
      } catch (error) {
        dispatch({ type: FAILED });
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
      token: undefined,
      authenticatedUserId: undefined,
      usersById: {
        ...currentState.usersById,
        [currentState.authenticatedUserId]: undefined
      }
    };
  }
};
