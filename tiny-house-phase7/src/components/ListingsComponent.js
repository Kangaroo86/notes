import React from 'react';

import WidgetComponent from './WidgetComponent';

export default function({ listingItems, onLove }) {
  console.log('this is is listingItems', listingItems);
  // console.log('this is is props', props);
  // if (listingItems !== null) {
  return (
    <div className="ListingsComponent">
      {listingItems.length > 0 &&
        listingItems.map(listingItem =>
          <WidgetComponent
            key={listingItem.id}
            hostInfo={listingItem}
            onLove={onLove}
          />
        )}
      {!listingItems ||
        (listingItems.length === 0 && <div>LOADING ONE SECOND :P</div>)}
    </div>
  );
  // } else {
  // return <div>LOADING ONE SECOND :P</div>;
  // }
}
