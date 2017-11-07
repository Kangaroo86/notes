import React, { Component } from 'react';

import DefaultPageLayout from './DefaultPageLayout';
import LoginForm from './LoginForm';
import { isEmpty } from '../utils/LangUtils';

export default class LoginPage extends Component {
  static defaultProps = {
    login: () => {}
  };

  render() {
    return (
      <div className="LoginPage">
        <DefaultPageLayout title="Login">
          {this._renderIfError()}
          <LoginForm onSubmit={this.props.login} />
        </DefaultPageLayout>
      </div>
    );
  }

  _renderIfError() {
    if (isEmpty(this.props.errorCode)) return null;
    let errorMessage =
      'Sorry! An unexpected error occured while processing your request. Please try again later.';
    if (this.props.errorCode.endsWith('ERROR_CREDENTIALS_INVALID')) {
      errorMessage = 'You entered invalid credentials. Please try again.';
    }
    return <p className="LoginPage-errorMessage">{errorMessage} </p>;
  }
}
