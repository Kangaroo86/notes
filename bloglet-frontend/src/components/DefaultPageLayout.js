import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class DefaultPageLayout extends Component {
  static defaultProps = {
    onLogout: () => {}
  };

  render() {
    return (
      <div className="DefaultPageLayout">
        <header className="DefaultPageLayout-header">
          <div className="DefaultPageLayout-brand">
            <Link to="/">Bloglet</Link>
          </div>
          <nav className="DefaultPageLayout-nav">
            {this.props.authenticatedUser
              ? [
                  <span key="1">
                    Logged in as {this.props.authenticatedUser.username}
                  </span>,
                  <a key="2" href="/logout" onClick={this._handleClickLogout}>
                    Logout
                  </a>
                ]
              : [
                  <Link key="1" to="/login">
                    Login
                  </Link>,
                  <Link key="2" to="/register">
                    Register
                  </Link>
                ]}
          </nav>
        </header>
        <main className="DefaultPageLayout-mainContent">
          <h1>{this.props.title}</h1>
          {this.props.children}
        </main>
      </div>
    );
  }

  _handleClickLogout = event => {
    event.preventDefault();
    this.props.onLogout();
  };
}
