import React from 'react';

import ViewListingsPageLayout from './ViewListingsPageLayout';

export default function ViewListingsPage({
  listingItems,
  hostInfo,
  onLove,
  onSearch
}) {
  return (
    <div className="ViewListingsPage">
      <ViewListingsPageLayout
        listingItems={listingItems}
        hostInfo={hostInfo}
        onLove={onLove}
        onSearch={onSearch}
      />
    </div>
  );
}
