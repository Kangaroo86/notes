import getSortedFilteredListings from './getSortedFilteredListings';
import listingToRecord from './utils/listingToRecord';
import data from '../redux/mock-data';

describe('getSortedFilteredListings', () => {
  it('Calls fetch and returns SortedFilteredlistings', () => {
    fetch.mockResponse(
      JSON.stringify({ records: data.listings.map(listingToRecord) })
    );

    return getSortedFilteredListings('rent', 'Berkeley, CA').then(listings => {
      expect(listings).toEqual([...data.listings]);
    });
  });

  afterAll(() => {
    fetch.mockReset();
  });
});
