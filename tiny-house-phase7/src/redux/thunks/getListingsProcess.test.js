/* eslint-disable import/first */

import getListingsProcess from './getListingsProcess';

jest.mock('../../api/getListings');
import getListings from '../../api/getListings';

import data from '../mock-data';

describe('getListingsProcess', () => {
  it('Calls getListings API utility and dispatches GET_LISTINGS action', () => {
    //const { id, ...listingWithoutId } = data.listings[0];
    const thunk = getListingsProcess();
    expect(typeof thunk).toBe('function');

    getListings.mockReturnValueOnce(Promise.resolve({ ...data.listings }));

    const dispatch = jest.fn();
    const getState = () => ({});

    return thunk(dispatch, getState, {}).then(listingItems => {
      expect(getListings).toBeCalled();
      expect(listingItems).toEqual({ ...data.listings });
      expect(dispatch).toBeCalledWith({
        type: 'GET_LISTINGS',
        listingItems
      });
    });
  });
});
