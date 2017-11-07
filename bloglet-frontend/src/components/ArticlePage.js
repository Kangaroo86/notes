import React from 'react';
import { Link } from 'react-router-dom';

import DefaultPageLayout from './DefaultPageLayout';
import ArticleComponent from './ArticleComponent';

export default function ArticlePage({
  article = {},
  authenticatedUser,
  logout = () => {}
}) {
  const title = article ? article.title : 'Article';
  return (
    <div className="ArticlePage">
      <DefaultPageLayout
        title={title}
        authenticatedUser={authenticatedUser}
        onLogout={logout}>
        {article === null ? (
          <p className="ArticlePage-loadingMessage">Loading...</p>
        ) : (
          <div>
            {authenticatedUser && authenticatedUser.id === article.author.id ? (
              <Link
                className="ArticlePage-editLink"
                to={`/articles/${article.id}/edit`}>
                <button>Edit</button>
              </Link>
            ) : null}
            <ArticleComponent
              article={article}
              showTitle={false}
              showBody={true}
            />
          </div>
        )}
      </DefaultPageLayout>
    </div>
  );
}
