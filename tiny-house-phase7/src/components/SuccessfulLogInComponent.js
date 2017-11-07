import React from 'react';

export default function SuccessfulLogInComponent({ onLogOut, userInfo }) {
  function handleClick(event) {
    event.preventDefault();
    //Since user has chosen to log out, we need to remove the token from Local Storage
    localStorage.removeItem('token');
    onLogOut();
  }
  return (
    <div className="card-panel grey lighten-3 SuccessMessageComponent">
      <h4>
        Welcome {userInfo.name}!
      </h4>

      <p>Please feel free to reach out if any questions arise.</p>
      <p>
        <span>Best regards,</span>
        <br />
        <i>Customer Support Team</i>
        <br />
        <span>Tiny House Village</span>
      </p>
      <button className="waves-effect waves-light btn" onClick={handleClick}>
        LOG OUT
      </button>
    </div>
  );
}
