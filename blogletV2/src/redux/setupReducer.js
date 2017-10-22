import GetArticlesProcess from './processes/GetArticlesProcess';
import GetArticleProcess from './processes/GetArticleProcess';
import GetUserProcess from './processes/GetUserProcess';

const reducers = [
  GetArticlesProcess.reduce,
  GetArticleProcess.reduce,
  GetUserProcess.reduce
];

const defaultState = {
  articlesById: {},
  articleIds: null,
  usersById: {}
};

export default function setupReducer() {
  return (currentState = defaultState, action) => {
    return reducers.reduce(
      (nextState, reducer) => reducer(nextState, action),
      currentState
    );
  };
}
