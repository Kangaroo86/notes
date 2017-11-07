import decode from 'jwt-decode';

import authenticate from '../../api/authenticate';
import getUser from '../../api/getUser';
import { defer } from '../../utils/FunctionUtils';

const STARTED = 'LOGIN_STARTED';
const COMPLETED = 'LOGIN_COMPLETED';
const FAILED = 'LOGIN_FAILED';

export default {
  //
  // Thunk Creator
  //
  create(credentials, history) {
    return async (dispatch, getState, env) => {
      try {
        dispatch({ type: STARTED });

        const { token } = await authenticate(credentials, {
          baseUrl: env.API_BASE_URL
        });

        localStorage.setItem('token', token);

        const { sub: userId } = decode(token);

        const user = await getUser(userId, {
          baseUrl: env.API_BASE_URL,
          token
        });

        defer(() => {
          history.push('/');
        });

        dispatch({ type: COMPLETED, token, user });
        return { token, user };
      } catch (error) {
        console.error(error); // eslint-disable-line no-console

        localStorage.removeItem('token');

        let errorCode = 'LoginProcess.ERROR_UNEXPECTED';
        if (error.message.startsWith('AuthenticationService.ERROR_')) {
          errorCode = error.message;
        }

        dispatch({
          type: FAILED,
          errorCode: errorCode
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
      token: action.token,
      authenticatedUserId: action.user ? action.user.id : undefined,
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
