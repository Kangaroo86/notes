import React from 'react';
import { Link } from 'react-router-dom';

import nl2br from 'react-nl2br';

export default function ArticleComponent({
  article = {},
  showTitle = true,
  showBody = false,
  showAuthor = true
}) {
  return (
    <div className="ArticleComponent">
      {showTitle && (
        <h2 className="ArticleComponent-title">
          <Link to={`/articles/${article.id}`}>{article.title}</Link>
        </h2>
      )}
      {showAuthor && (
        <p className="ArticleComponent-author">
          <span>By:</span>
          <Link to={`/authors/${article.author.id}`}>
            {article.author.username}
          </Link>
        </p>
      )}
      <p className="ArticleComponent-description">{article.description}</p>
      {showBody && (
        <p className="ArticleComponent-body">{nl2br(article.content)}</p>
      )}
    </div>
  );
}
