/* eslint-disable import/first */

import updateListingProcess from './updateListingProcess';

jest.mock('../../api/updateListing');
import updateListing from '../../api/updateListing';

import data from '../mock-data';

describe('updateListingProcess', () => {
  it('Calls updateListing API utility and dispatches UPDATE_LISTING action', () => {
    //const { id, ...listingWithoutId } = data.listings[0];
    const listingUpdated = {
      ...data.listings[0],
      amenities: data.listings[0].amenities + ' UPDATED'
    };
    const thunk = updateListingProcess(listingUpdated);
    expect(typeof thunk).toBe('function');

    updateListing.mockReturnValueOnce(Promise.resolve({ ...data.listings[0] }));

    const dispatch = jest.fn();
    const getState = () => ({});

    return thunk(dispatch, getState, {}).then(updatedListing => {
      expect(updateListing).toBeCalled();
      expect(updatedListing).toEqual({ ...data.listings[0] });
      expect(dispatch).toBeCalledWith({
        type: 'UPDATE_LISTING',
        hostInfo: updatedListing
      });
    });
  });
});
