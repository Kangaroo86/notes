import getOneListing from './getOneListing';
import listingToRecord from './utils/listingToRecord';
import data from '../redux/mock-data';

describe('getOneListing', () => {
  it('Calls fetch and returns one listing', () => {
    fetch.mockResponse(
      // JSON.stringify({ record: data.listings.map(listingToRecord) })
      JSON.stringify(listingToRecord(data.listings[0]))
    );

    return getOneListing(data.listings[0].id).then(listing => {
      expect(listing).toEqual(data.listings[0]);
    });
  });

  afterAll(() => {
    fetch.mockReset();
  });
});
