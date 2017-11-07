/* eslint-disable import/first */

import deleteListingProcess from './deleteListingProcess';

jest.mock('../../api/deleteListing');
import deleteListing from '../../api/deleteListing';

import data from '../mock-data';

describe('deleteListingProcess', () => {
  it('Calls deleteListing API utility and dispatches DELETE_LISTING action', () => {
    let getState = () => ({ listingItems: data.listings });
    const thunk = deleteListingProcess(data.listings[0]);
    expect(typeof thunk).toBe('function');

    deleteListing.mockReturnValueOnce(Promise.resolve({ ...data.listings[0] }));

    const dispatch = jest.fn();
    //getState = () => ({});

    return thunk(dispatch, getState, {}).then(() => {
      expect(deleteListing).toBeCalled();
      expect(dispatch).toBeCalledWith({
        type: 'DELETE_LISTING',
        hostInfo: data.listings[0]
      });
    });
  });
});
