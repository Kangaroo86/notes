import React, { Component } from 'react';

import ArticlePage from '../components/ArticlePage';

import getArticle from '../api/getArticle';
import getUser from '../api/getUser';

import env from '../env';

export default class ArticlePageContainer extends Component {
  state = {
    article: null
  };

  render() {
    return <ArticlePage article={this.state.article} />;
  }

  componentDidMount() {
    const { articleId } = this.props.match.params;
    //console.log(articleId);
    const accumulator = {};
    getArticle(articleId, {
      databaseId: env.AIRTABLE_DATABASE_ID,
      token: env.AIRTABLE_TOKEN
    })
      .then(article => {
        accumulator.article = article;
        //console.log((accumulator.article = article));
        return getUser(article.authorId, {
          databaseId: env.AIRTABLE_DATABASE_ID,
          token: env.AIRTABLE_TOKEN
        });
      })
      .then(user => {
        const { article } = accumulator;
        article.author = user;
        this.setState({ article });
      });
  }
}
