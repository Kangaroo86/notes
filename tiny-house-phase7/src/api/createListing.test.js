import createListing from './createListing';
import listingToRecord from './utils/listingToRecord';
import data from '../redux/mock-data';

describe('createListing', () => {
  it('Calls fetch and creates a listing', () => {
    fetch.mockResponse(
      // JSON.stringify({ record: data.listings.map(listingToRecord) })
      JSON.stringify(listingToRecord({ ...data.listings[0] }))
    );

    return createListing({ ...data.listings[0] }).then(listing => {
      expect(listing).toEqual({ ...data.listings[0] });
    });
  });

  afterAll(() => {
    fetch.mockReset();
  });
});
