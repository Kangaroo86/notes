import React from 'react';

export default function LogInComponent({ onSignUp, newUser }) {
  //console.log('LOGIN_PROPS', props);
  function handleSubmit(event) {
    event.preventDefault();
    const $form = event.target;
    const newUser = {};
    newUser.name = $form.name.value;
    newUser.email = $form.email.value;
    newUser.password = $form.password.value;
    console.log('USER SIGNED UP', newUser);
    onSignUp(newUser);
  }
  return (
    <form id="form" className="col s12 m12" onSubmit={handleSubmit}>
      <div id="title" className="col s12 m12">
        <h4 className="green-text">Sign Up</h4>
      </div>

      <div className="row">
        <div className="input-field col s12 m12">
          <i className="material-icons prefix green-text">person</i>
          <input
            id="name"
            type="text"
            className="validate"
            placeholder="Full Name"
            required
          />
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12 m12">
          <i className="material-icons prefix green-text">email</i>
          <input
            id="email"
            type="text"
            className="validate"
            placeholder="Email Address"
            required
          />
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12 m12">
          <i className="material-icons prefix green-text">lock</i>
          <input
            id="password"
            type="password"
            className="validate"
            placeholder="Create a Password"
            required
          />
        </div>
      </div>

      <div className="row center">
        <button
          id="submit-button"
          type="submit"
          name="action"
          className="btn-large waves-effect waves-light green lighten-1">
          SIGN UP
        </button>
      </div>
    </form>
  );
}
