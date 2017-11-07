import React from 'react';

import UpdateListingPageLayout from './UpdateListingPageLayout';

export default function UpdateListingPage({ hostInfo, onUpdate }) {
  return (
    <div className="DetailedListingPage">
      <UpdateListingPageLayout hostInfo={hostInfo} onUpdate={onUpdate} />
    </div>
  );
}
