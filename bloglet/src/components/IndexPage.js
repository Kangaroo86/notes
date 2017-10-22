import React from 'react';

import DefaultPageLayout from './DefaultPageLayout';
import ArticleComponent from './ArticleComponent';

export default function IndexPage({ articles = [] }) {
  return (
    <div className="IndexPage">
      <DefaultPageLayout title="All Articles">
        {!Array.isArray(articles)
          ? <p className="IndexPage-loadingMessage">Loading...</p>
          : articles.length === 0
            ? <p className="IndexPage-emptyMessage">
                No articles to display at this time.
              </p>
            : articles.map(article =>
                <ArticleComponent key={article.id} article={article} />
              )}
      </DefaultPageLayout>
    </div>
  );
}
