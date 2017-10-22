import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import setupStore from './redux/setupStore';

const store = setupStore();

// store.subscribe(() => {
//   console.log(store.getState(), '<<<<<');
// });
//
// console.log(store.getState(), '<<<<<');
//
// store.dispatch({ type: 'INCREMENT' });
// store.dispatch({ type: 'INCREMENT' });
// store.dispatch({ type: 'DECREMENT' });

ReactDOM.render(<App store={store} />, document.getElementById('root'));
