import React, { Component } from 'react';

let instanceCounter = 0;

export default class RegisterAccountForm extends Component {
  static defaultProps = {
    onSubmit: () => {}
  };

  constructor(props) {
    super(props);
    ++instanceCounter;
  }

  render() {
    const id = this.props.id || `RegisterAccountForm${instanceCounter}`;
    return (
      <form
        id={id}
        className="RegisterAccountForm"
        onSubmit={this._handleSubmit}>
        <div className="RegisterAccountForm-inputWrapper">
          <label
            className="RegisterAccountForm-inputLabel"
            htmlFor={`${id}-nameInput`}>
            Your Name
          </label>
          <input
            type="text"
            id={`${id}-nameInput`}
            className="RegisterAccountForm-input"
            name="nameInput"
          />
        </div>
        <div className="RegisterAccountForm-inputWrapper">
          <label
            className="RegisterAccountForm-inputLabel"
            htmlFor={`${id}-usernameInput`}>
            Username
          </label>
          <input
            type="text"
            id={`${id}-usernameInput`}
            className="RegisterAccountForm-input"
            name="usernameInput"
          />
        </div>
        <div className="RegisterAccountForm-inputWrapper">
          <label
            className="RegisterAccountForm-inputLabel"
            htmlFor={`${id}-passwordInput`}>
            Password
          </label>
          <input
            type="password"
            id={`${id}-passwordInput`}
            className="RegisterAccountForm-input"
            name="passwordInput"
          />
        </div>
        <div className="RegisterAccountForm-buttons">
          <input
            className="RegisterAccountForm-button"
            type="submit"
            value="Submit"
          />
          <input
            className="RegisterAccountForm-button"
            type="reset"
            value="Reset"
          />
        </div>
      </form>
    );
  }

  _handleSubmit = event => {
    event.preventDefault();
    const { nameInput, usernameInput, passwordInput } = event.target;
    this.props.onSubmit({
      name: (nameInput.value || '').trim(),
      username: (usernameInput.value || '').trim(),
      password: passwordInput.value || ''
    });
  };
}
