import updateListing from '../.././api/updateListing';

export default function updateListingProcess(hostInfo) {
  //We dont use env here but leaving as placeholder
  // as a reminder that it's available to me:
  //return (dispatch, getState, env) => {
  return (dispatch, getState) => {
    let listingId = hostInfo.id;
    //console.log(hostInfo, 'inside procces');
    //console.log('listingId', listingId);
    return updateListing(listingId, hostInfo)
      .then(updatedListing => {
        dispatch({
          type: 'UPDATE_LISTING',
          hostInfo: updatedListing
        });
        return updatedListing;
      })
      .catch(err => {
        console.log('what is going on', err);
        dispatch({
          type: 'UPDATE_LISTING',
          hostInfo: null,
          error: err
        });
      });
  };
}
