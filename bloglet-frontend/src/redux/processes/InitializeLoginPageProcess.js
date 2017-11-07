import { defer } from '../../utils/FunctionUtils';
import selectAuthenticatedUser from '../selectors/selectAuthenticatedUser';

const STARTED = 'INITIALIZE_LOGIN_PAGE_STARTED';
const COMPLETED = 'INITIALIZE_LOGIN_PAGE_COMPLETED';
const FAILED = 'INITIALIZE_LOGIN_PAGE_FAILED';

export default {
  create({ history }) {
    return async (dispatch, getState, env) => {
      try {
        dispatch({ type: STARTED });

        const authenticatedUser = selectAuthenticatedUser(getState());

        if (authenticatedUser) {
          defer(() => {
            history.push('/');
          });
          dispatch({ type: COMPLETED, willRedirect: true });
          return;
        }

        dispatch({ type: COMPLETED });
      } catch (error) {
        console.error(error); // eslint-disable-line no-console

        dispatch({
          type: FAILED,
          errorCode: 'InitializeLoginPageProcess.ERROR_UNEXPECTED'
        });
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
      errorCode: action.errorCode
    };
  }
};
