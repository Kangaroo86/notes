import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import IndexPageContainer from './containers/IndexPageContainer';
import ArticlePageContainer from './containers/ArticlePageContainer';
import AuthorPageContainer from './containers/AuthorPageContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={IndexPageContainer} />
            <Route
              exact
              path="/articles/:articleId"
              component={ArticlePageContainer}
            />
            <Route path="/" exact path="" component={IndexPageContainer} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
