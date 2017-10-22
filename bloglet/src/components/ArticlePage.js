import React from 'react';

import DefaultPageLayout from './DefaultPageLayout';
import ArticleComponent from './ArticleComponent';

export default function ArticlePage({ article = {} }) {
  const title = article ? article.title : 'Article';
  return (
    <div className="ArticlePage">
      <DefaultPageLayout title={title}>
        {article === null
          ? <p className="ArticlePage-loadingMessage">Loading...</p>
          : <ArticleComponent
              article={article}
              showTitle={false}
              showBody={true}
            />}
      </DefaultPageLayout>
    </div>
  );
}
