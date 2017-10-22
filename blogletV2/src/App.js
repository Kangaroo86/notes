import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NotFoundPage from './components/NotFoundPage';

import IndexPageContainer from './redux/containers/IndexPageContainer';
import ArticlePageContainer from './redux/containers/ArticlePageContainer';
import AuthorPageContainer from './redux/containers/AuthorPageContainer';

import setupStore from './redux/setupStore';

import { Provider } from 'react-redux';

const store = setupStore();

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <Switch>
              <Route
                exact
                path="/"
                render={props => <IndexPageContainer {...props} />}
              />
              <Route
                exact
                path="/articles/:articleId"
                render={props =>
                  <ArticlePageContainer store={store} {...props} />}
              />
              <Route
                exact
                path="/authors/:authorId"
                render={props =>
                  <AuthorPageContainer store={store} {...props} />}
              />
              <Route component={NotFoundPage} />
            </Switch>
          </Router>
        </Provider>;
      </div>
    );
  }
}
