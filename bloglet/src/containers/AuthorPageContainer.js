import React, { Component } from 'react';

import AuthorPage from '../components/AuthorPage';

export default class AuthorPageContainer extends Component {
  state = {
    author: null
  };

  render() {
    return <AuthorPage author={this.state.author} />;
  }

  componentDidMount() {
    // YOUR CODE HERE
  }
}
