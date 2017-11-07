import React from 'react';

import DefaultPageLayout from './DefaultPageLayout';
import ArticleComponent from './ArticleComponent';

export default function AuthorPage({
  author,
  authenticatedUser,
  logout = () => {}
}) {
  const title = `Author${author ? `: ${author.username}` : ''}`;
  if (author) {
    console.log(author, '***** 1');
    console.log(author.name, '****** 3');
    console.log(author.articles, '***** 2');
  }
  return (
    <div className="AuthorPage">
      <DefaultPageLayout
        title={title}
        authenticatedUser={authenticatedUser}
        onLogout={logout}>
        {author === null ? (
          <p className="AuthorPage-loadingMessage">Loading...</p>
        ) : (
          <div>
            <h3>Bio</h3>
            <p>{author.blurb}</p>
            <h3>Articles</h3>
            {Array.isArray(author.articles)
              ? author.articles.map(article => {
                  return (
                    <ArticleComponent
                      key={article.id}
                      article={article}
                      showAuthor={false}
                    />
                  );
                })
              : null}
          </div>
        )}
      </DefaultPageLayout>
    </div>
  );
}
