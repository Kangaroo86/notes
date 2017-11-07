import React from 'react';

import DetailedListingPageLayout from './DetailedListingPageLayout';

export default function DetailedListingPage({ hostInfo, onClear }) {
  return (
    <div className="DetailedListingPage">
      <DetailedListingPageLayout hostInfo={hostInfo} onClear={onClear} />
    </div>
  );
}
