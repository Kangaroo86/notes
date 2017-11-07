import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignUpPageContainer from './redux/containers/SignUpPageContainer';
import LogInPageContainer from './redux/containers/LogInPageContainer';
import RegisterBackyardPageContainer from './redux/containers/RegisterBackyardPageContainer';
import UpdateListingPageContainer from './redux/containers/UpdateListingPageContainer';
import ViewListingsPageContainer from './redux/containers/ViewListingsPageContainer';
import DetailedListingPageContainer from './redux/containers/DetailedListingPageContainer';

import SuccessfulListingComponent from './components/SuccessfulListingComponent';

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
              <Route exact path="/" component={ViewListingsPageContainer} />
              <Route
                exact
                path="/backyards/:backyardId"
                component={DetailedListingPageContainer}
              />
              <Route
                exact
                path="/registration"
                component={RegisterBackyardPageContainer}
              />
              <Route
                exact
                path="/registration/update"
                component={UpdateListingPageContainer}
                render={props => <SuccessfulListingComponent {...props} />}
              />
              <Route exact path="/login" component={LogInPageContainer} />
              <Route exact path="/signup" component={SignUpPageContainer} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}
