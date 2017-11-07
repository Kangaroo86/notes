import deleteListing from './deleteListing';
import listingToRecord from './utils/listingToRecord';
import data from '../redux/mock-data';

describe('deleteListing', () => {
  it('Calls fetch and deletes a listing', () => {
    fetch.mockResponse(
      // JSON.stringify({ record: data.listings.map(listingToRecord) })
      JSON.stringify(listingToRecord(data.listings[0]).id)
    );

    return deleteListing(data.listings[0].id).then(response => {
      expect(response).toEqual(data.listings[0].id);
    });
  });

  afterAll(() => {
    fetch.mockReset();
  });
});
