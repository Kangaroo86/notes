import React from 'react';

import SignUpPageLayout from './SignUpPageLayout';

export default function SignUpPage({ onSignUp, newUser }) {
  return (
    <div className="LogInPage">
      <SignUpPageLayout newUser={newUser} onSignUp={onSignUp} />
    </div>
  );
}
