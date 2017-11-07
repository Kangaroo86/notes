import React, { Component } from 'react';

import DefaultPageLayout from './DefaultPageLayout';
import RegisterAccountForm from './RegisterAccountForm';

export default class RegisterAccountPage extends Component {
  static defaultProps = {
    onSubmit: () => {}
  };

  render() {
    return (
      <div className="RegisterAccountPage">
        <DefaultPageLayout title="Account Registration">
          <RegisterAccountForm onSubmit={this.props.onSubmit} />
        </DefaultPageLayout>
      </div>
    );
  }
}
