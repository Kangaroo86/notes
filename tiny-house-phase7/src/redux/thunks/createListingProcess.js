import createListing from '../.././api/createListing';

export default function createListingProcess(composedListing) {
  //We dont use getState or env here but leaving as placeholder
  // as a reminder that it's available to me:
  //return (dispatch, getState, env) => {
  return (dispatch, getState) => {
    console.log('INSIDE CREATE THUNK before', composedListing);
    return createListing(composedListing)
      .then(createdListing => {
        console.log('INSIDE CREATE THUNK', createdListing);
        dispatch({
          type: 'CREATE_LISTING',
          hostInfo: createdListing
        });
        return createdListing;
      })
      .catch(err => {
        console.log('THE_ERR', err);
      });
  };
}
