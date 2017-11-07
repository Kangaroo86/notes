import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import React, { Component } from 'react';

import { isEmpty } from './utils/LangUtils';
import ArticleEditPageContainer from './redux/containers/ArticleEditPageContainer';
import ArticlePageContainer from './redux/containers/ArticlePageContainer';
import AuthorPageContainer from './redux/containers/AuthorPageContainer';
import ErrorPage from './components/ErrorPage';
import IndexPageContainer from './redux/containers/IndexPageContainer';
import LoginPageContainer from './redux/containers/LoginPageContainer';
import RegisterAccountPageContainer from './redux/containers/RegisterAccountPageContainer';
import setupStore from './redux/setupStore';

function getInitialState(authentication) {
  return isEmpty(authentication)
    ? {}
    : {
        token: authentication.token,
        authenticatedUserId: authentication.user.id,
        usersById: {
          [authentication.user.id]: authentication.user
        }
      };
}

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider
          store={setupStore(getInitialState(this.props.authentication))}>
          <Router>
            <Switch>
              <Route
                exact
                path="/register"
                component={RegisterAccountPageContainer}
              />
              <Route exact path="/login" component={LoginPageContainer} />
              <Route exact path="/" component={IndexPageContainer} />
              <Route
                exact
                path="/articles/:articleId(\d+)"
                component={ArticlePageContainer}
              />
              <Route
                exact
                path="/articles/:articleId(\d+)/edit"
                component={ArticleEditPageContainer}
              />
              <Route
                exact
                path="/authors/:authorId(\d+)"
                component={AuthorPageContainer}
              />
              <Route render={() => <ErrorPage errorCode="ERROR_NOT_FOUND" />} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}
