import deleteListing from '../.././api/deleteListing';

export default function deleteListingProcess(hostInfo) {
  //We dont use env here but leaving as placeholder
  // as a reminder that it's available to me:
  //return (dispatch, getState, env) => {
  return (dispatch, getState) => {
    // let listingId = getState().hostInfo.id;
    let listingId = hostInfo.id;
    console.log('listingId', listingId);
    console.log('listingItems', getState().listingItems);
    getState().listingItems.forEach(listingItem => {
      if (listingId === listingItem.id) {
        return deleteListing(listingId)
          .then(wasDeleted => {
            dispatch({
              type: 'DELETE_LISTING',
              hostInfo: hostInfo
            });
            return wasDeleted;
          })
          .catch(err => {
            console.log('what is going on', err);
            dispatch({
              type: 'GET_ONE_LISTING',
              hostInfo: null,
              error: err
            });
          });
      }
    });
  };
}
