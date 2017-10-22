import React from 'react';

import DefaultPageLayout from './DefaultPageLayout';
import ArticleComponent from './ArticleComponent';

export default function AuthorPage({ author }) {
  const title = `Author${author ? `: ${author.username}` : ''}`;
  return (
    <div className="AuthorPage">
      <DefaultPageLayout title={title}>
        {author === null
          ? <p className="AuthorPage-loadingMessage">Loading...</p>
          : <div>
              <h3>Bio</h3>
              <p>
                {author.bio}
              </p>
              <h3>Articles</h3>
              {author.articles.map(article => {
                console.log(article, '<<<<');
                return (
                  <ArticleComponent
                    key={article.id}
                    article={article}
                    showAuthor={false}
                  />
                );
              })}
            </div>}
      </DefaultPageLayout>
    </div>
  );
}
