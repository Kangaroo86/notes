import getListings from './getListings';
import listingToRecord from './utils/listingToRecord';
import data from '../redux/mock-data';

describe('getListings', () => {
  it('Calls fetch and returns listings', () => {
    fetch.mockResponse(
      JSON.stringify({ records: data.listings.map(listingToRecord) })
    );

    return getListings().then(listings => {
      expect(listings).toEqual([...data.listings]);
    });
  });

  afterAll(() => {
    fetch.mockReset();
  });
});
