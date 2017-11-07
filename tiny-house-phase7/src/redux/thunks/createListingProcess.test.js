/* eslint-disable import/first */

import createListingProcess from './createListingProcess';

jest.mock('../../api/createListing');
import createListing from '../../api/createListing';

import data from '../mock-data';

describe('createListingProcess', () => {
  it('Calls createListing API utility, returns the newly created listing, and dispatches CREATE_LISTING action', () => {
    const { id, ...listingWithoutId } = data.listings[0];
    const thunk = createListingProcess(listingWithoutId);
    expect(typeof thunk).toBe('function');

    createListing.mockReturnValueOnce(Promise.resolve({ ...data.listings[0] }));

    const dispatch = jest.fn();
    const getState = () => ({});

    return thunk(dispatch, getState, {}).then(createdListing => {
      expect(createListing).toBeCalled();
      expect(createdListing).toEqual({ ...data.listings[0] });
      expect(dispatch).toBeCalledWith({
        type: 'CREATE_LISTING',
        hostInfo: createdListing
      });
    });
  });
});
