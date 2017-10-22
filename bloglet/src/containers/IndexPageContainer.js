import React, { Component } from 'react';

import IndexPage from '../components/IndexPage';

import getArticles from '../api/getArticles';
import getUsers from '../api/getUsers';

import env from '../env';

export default class IndexPageContainer extends Component {
  state = {
    articles: null
  };

  render() {
    return <IndexPage articles={this.state.articles} />;
  }

  componentDidMount() {
    const accumulator = {};
    getArticles({
      databaseId: env.AIRTABLE_DATABASE_ID,
      token: env.AIRTABLE_TOKEN
    })
      .then(articles => {
        accumulator.articles = articles;
        return getUsers({
          databaseId: env.AIRTABLE_DATABASE_ID,
          token: env.AIRTABLE_TOKEN
        });
      })
      .then(users => {
        const { articles } = accumulator;
        const usersById = users.reduce(
          (usersById, user) => ({ ...usersById, [user.id]: user }),
          {}
        );
        articles.forEach(article => {
          article.author = usersById[article.authorId];
        });
        this.setState({ articles });
      });
  }
}
