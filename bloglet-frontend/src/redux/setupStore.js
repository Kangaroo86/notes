import { createStore } from 'redux';

import setupReducer from './setupReducer';
import setupEnhancer from './setupEnhancer';

export default function setupStore(initialState = {}) {
  return createStore(setupReducer(), initialState, setupEnhancer());
}
