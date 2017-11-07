import CreateUserProcess from './processes/CreateUserProcess';
import InitializeArticleEditPageProcess from './processes/InitializeArticleEditPageProcess';
import InitializeArticlePageProcess from './processes/InitializeArticlePageProcess';
import InitializeAuthorPageProcess from './processes/InitializeAuthorPageProcess';
import InitializeIndexPageProcess from './processes/InitializeIndexPageProcess';
import InitializeLoginPageProcess from './processes/InitializeLoginPageProcess';
import LoginProcess from './processes/LoginProcess';
import LogoutProcess from './processes/LogoutProcess';

const reducers = [
  CreateUserProcess.reduce,
  InitializeArticleEditPageProcess.reduce,
  InitializeArticlePageProcess.reduce,
  InitializeAuthorPageProcess.reduce,
  InitializeIndexPageProcess.reduce,
  InitializeLoginPageProcess.reduce,
  LoginProcess.reduce,
  LogoutProcess.reduce
];

export default function setupReducer() {
  return (currentState, action) => {
    return reducers.reduce(
      (nextState, reducer) => reducer(nextState, action),
      currentState
    );
  };
}
