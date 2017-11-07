/* eslint-disable import/first */

import getSortedFilteredListingsProcess from './getSortedFilteredListingsProcess';

jest.mock('../../api/getSortedFilteredListings');
import getSortedFilteredListings from '../../api/getSortedFilteredListings';

import data from '../mock-data';

describe('getSortedFilteredListingsProcess', () => {
  it('Calls getSortedFilteredListings API utility and dispatches GET_LISTINGS action', () => {
    //const { id, ...listingWithoutId } = data.listings[0];
    const thunk = getSortedFilteredListingsProcess();
    expect(typeof thunk).toBe('function');

    getSortedFilteredListings.mockReturnValueOnce(
      Promise.resolve({ ...data.listings })
    );

    const dispatch = jest.fn();
    const getState = () => ({});

    return thunk(dispatch, getState, {}).then(listingItems => {
      expect(getSortedFilteredListings).toBeCalled();
      expect(listingItems).toEqual({ ...data.listings });
      expect(dispatch).toBeCalledWith({
        type: 'GET_LISTINGS',
        listingItems
      });
    });
  });
});
