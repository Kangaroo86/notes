import React from 'react';

import { Link } from 'react-router-dom';

export default function DefaultPageLayout({ title, children }) {
  return (
    <div className="DefaultPageLayout">
      <header className="DefaultPageLayout-header">
        <div className="DefaultPageLayout-siteName">
          <Link to="/">Bloglet</Link>
        </div>
      </header>
      <main className="DefaultPageLayout-mainContent">
        <h1>
          {title}
        </h1>
        {children}
      </main>
    </div>
  );
}
