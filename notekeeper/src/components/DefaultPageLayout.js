import React from 'react';

export default function DefaultPageLayout({ children }) {
  return (
    <div className="DefaultPageLayout">
      {children[0]}
      {children[1]}
    </div>
  );
}
