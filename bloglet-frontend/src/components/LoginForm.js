import React, { Component } from 'react';

let instanceCounter = 0;

export default class LoginForm extends Component {
  static defaultProps = {
    onSubmit: () => {}
  };

  constructor(props) {
    super(props);
    ++instanceCounter;
  }

  render() {
    const id = this.props.id || `LoginForm${instanceCounter}`;
    return (
      <form id={id} className="LoginForm" onSubmit={this._handleSubmit}>
        <div className="LoginForm-inputWrapper">
          <label
            className="LoginForm-inputLabel"
            htmlFor={`${id}-usernameInput`}>
            Username
          </label>
          <input
            type="text"
            id={`${id}-usernameInput`}
            className="LoginForm-input"
            name="usernameInput"
          />
        </div>
        <div className="LoginForm-inputWrapper">
          <label
            className="LoginForm-inputLabel"
            htmlFor={`${id}-passwordInput`}>
            Password
          </label>
          <input
            type="password"
            id={`${id}-passwordInput`}
            className="LoginForm-input"
            name="passwordInput"
          />
        </div>
        <div className="LoginForm-buttons">
          <input className="LoginForm-button" type="submit" value="Login" />
        </div>
      </form>
    );
  }

  _handleSubmit = event => {
    event.preventDefault();
    const { usernameInput, passwordInput } = event.target;
    this.props.onSubmit({
      username: (usernameInput.value || '').trim(),
      password: passwordInput.value || ''
    });
  };
}
