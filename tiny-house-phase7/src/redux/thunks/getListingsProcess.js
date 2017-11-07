import getListings from '../.././api/getListings';

// What we had in App.js previously:
//
// componentDidMount() {
//   getListings().then(listingItems => {
//     this.props.store.dispatch({ type: 'GET_LISTINGS', listingItems });
//   });
// }

export default function getListingsProcess() {
  //We dont use getState or env here but leaving as placeholder
  // as a reminder that it's available to me:
  //return (dispatch, getState, env) => {
  return (dispatch, getState) => {
    // This part would be useful for loading:
    // dispatch({ type: 'GET_LISTINGS_STARTED' });
    return getListings().then(listingItems => {
      // This part would be useful if env is setup:
      // {
      //   databaseId: env.AIRTABLE_DATABASE_ID,
      //   token: env.AIRTABLE_TOKEN
      // }
      dispatch({ type: 'GET_LISTINGS', listingItems });
      return listingItems;
    });
    // Currently only doing 'happy path' but in practice we
    // should also account for failed attempts
    // .catch(error => {
    //   dispatch({ type: 'GET_LISTINGS_FAILED' });
    // });
  };
}
