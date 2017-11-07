import React, { Component } from 'react';

import DefaultPageLayout from './DefaultPageLayout';
import ArticleEditForm from './ArticleEditForm';

export default class ArticleEditPage extends Component {
  static defaultProps = {
    logout: () => {},
    updateArticle: () => {}
  };

  render() {
    const { article, authenticatedUser, logout, updateArticle } = this.props;
    const title = article ? article.title : 'Article';
    return (
      <div className="ArticleEditPage">
        <DefaultPageLayout
          title={title}
          authenticatedUser={authenticatedUser}
          onLogout={logout}>
          {article === null ? (
            this._renderLoadingMessage()
          ) : (
            <ArticleEditForm article={article} onSubmit={updateArticle} />
          )}
        </DefaultPageLayout>
      </div>
    );
  }

  _renderLoadingMessage() {
    return <p className="ArticleEditPage-loadingMessage">Loading...</p>;
  }
}
