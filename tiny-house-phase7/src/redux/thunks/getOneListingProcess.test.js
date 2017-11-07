/* eslint-disable import/first */

import getOneListingProcess from './getOneListingProcess';

jest.mock('../../api/getOneListing');
import getOneListing from '../../api/getOneListing';

import data from '../mock-data';

describe('getOneListingProcess', () => {
  it('Calls getOneListing API utility and dispatches GET_ONE_LISTINGS_LISTING action', () => {
    //const { id, ...listingWithoutId } = data.listings[0];
    const thunk = getOneListingProcess(data.listings[0]);
    expect(typeof thunk).toBe('function');

    getOneListing.mockReturnValueOnce(Promise.resolve({ ...data.listings[0] }));

    const dispatch = jest.fn();
    const getState = () => ({});

    return thunk(dispatch, getState, {}).then(listing => {
      expect(getOneListing).toBeCalled();
      expect(listing).toEqual({ ...data.listings[0] });
      expect(dispatch).toBeCalledWith({
        type: 'GET_ONE_LISTING',
        hostInfo: listing
      });
    });
  });
});
