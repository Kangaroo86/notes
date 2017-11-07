//SortedFiltered

import getSortedFilteredListings from '../.././api/getSortedFilteredListings';

export default function getSortedFilteredListingsProcess(sort, filter) {
  //We dont use getState or env here but leaving as placeholder
  // as a reminder that it's available to me:
  //return (dispatch, getState, env) => {
  return (dispatch, getState) => {
    return getSortedFilteredListings(sort, filter).then(listingItems => {
      dispatch({ type: 'GET_LISTINGS', listingItems });
      return listingItems;
    });
  };
}
