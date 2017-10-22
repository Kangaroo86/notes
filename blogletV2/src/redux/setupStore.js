import { createStore } from 'redux';

import setupReducer from './setupReducer';
import setupEnhancer from './setupEnhancer';

export default function setupStore() {
  return createStore(setupReducer(), setupEnhancer());
}
