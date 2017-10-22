import React, { Component } from 'react';
import { Provider } from 'react-redux';

import setupStore from './redux/setupStore';
import IndexPageContainer from './redux/containers/IndexPageContainer';

const store = setupStore();

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <IndexPageContainer />
        </Provider>
      </div>
    );
  }
}
