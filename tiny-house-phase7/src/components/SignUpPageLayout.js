import React from 'react';

import { Link } from 'react-router-dom';

import SignUpComponent from './SignUpComponent';

export default function SignUpPageLayout({ onSignUp, newUser }) {
  return (
    <div className="SignUpPageLayout">
      <header>
        <nav>
          <div className="nav-wrapper indigo">
            <Link to="/" className="brand-logo">
              Tiny House Hosting
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/login">Log In</Link>
              </li>
              <li>
                <Link to="/registration">List Your Backyard</Link>
              </li>
              <li>
                <Link to="/">Explore</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="container">
        <div className="section">
          <div className="row">
            <SignUpComponent newUser={newUser} onSignUp={onSignUp} />
          </div>
        </div>
      </div>

      <footer className="page-footer indigo">
        <div className="footer-copyright indigo">
          <div className="container">2017 Tiny House Village </div>
        </div>
      </footer>
    </div>
  );
}
