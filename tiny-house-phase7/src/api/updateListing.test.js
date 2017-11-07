import updateListing from './updateListing';
import listingToRecord from './utils/listingToRecord';
import data from '../redux/mock-data';

describe('updateListing', () => {
  it('Calls fetch and updates a listing', () => {
    fetch.mockResponse(
      // JSON.stringify({ record: data.listings.map(listingToRecord) })
      JSON.stringify(listingToRecord({ ...data.listings[0] }))
    );

    return updateListing(data.listings[0].id, {
      ...data.listings[0]
    }).then(listing => {
      expect(listing).toEqual({ ...data.listings[0] });
    });
  });

  afterAll(() => {
    fetch.mockReset();
  });
});
