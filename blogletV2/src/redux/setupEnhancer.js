import { applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import env from '../env';

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

export default function setupEnhancer() {
  return composeEnhancers(
    applyMiddleware(thunkMiddleware.withExtraArgument(env))
  );
}
