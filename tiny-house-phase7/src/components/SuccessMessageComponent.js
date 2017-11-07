import React from 'react';

export default function SuccessMessageComponent({ onClose }) {
  function handleClick(event) {
    onClose();
  }
  return (
    <div className="card-panel grey lighten-3 SuccessMessageComponent">
      <p>Thank you,</p>
      <p>Your listing was submitted successfully!</p>
      <p>
        We will notify you when your information has been verified and your
        listing approved.
      </p>
      <p>
        <span>Best regards,</span>
        <br />
        <i>Customer Support Team</i>
        <br />
        <span>Tiny House Village</span>
      </p>
      <button className="waves-effect waves-light btn" onClick={handleClick}>
        ADD ANOTHER LISTING
      </button>
    </div>
  );
}
