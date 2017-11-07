import rootReducer from './rootReducer';

import deepFreeze from 'deep-freeze';

import data from '../mock-data';

describe('rootReducer', () => {
  it('action.type GET_LISTINGS', () => {
    const action = {
      type: 'GET_LISTINGS',
      listingItems: [...data.listings]
    };

    const currentState = {
      listingItems: [],
      hostInfo: null
    };

    deepFreeze(currentState);

    const nextState = {
      listingItems: action.listingItems,
      hostInfo: null
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  }), it('action.type GET_ONE_LISTING', () => {
    const action = {
      type: 'GET_ONE_LISTING',
      hostInfo: { ...data.listings[0] }
    };

    const currentState = {
      listingItems: [],
      hostInfo: null
    };

    deepFreeze(currentState);

    const nextState = {
      listingItems: [],
      hostInfo: action.hostInfo
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  }), it('action.type CREATE_LISTING', () => {
    const action = {
      type: 'CREATE_LISTING',
      hostInfo: { ...data.listings[0] }
    };

    const currentState = {
      listingItems: [data.listings[1]],
      hostInfo: null
    };

    deepFreeze(currentState);

    const nextState = {
      listingItems: [action.hostInfo, data.listings[1]],
      hostInfo: action.hostInfo
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  });

  it('action.type CLOSE_SUCESS_MESSAGE', () => {
    const action = {
      type: 'CLOSE_SUCESS_MESSAGE',
      hostInfo: null
    };

    const currentState = {
      listingItems: [],
      hostInfo: null
    };

    deepFreeze(currentState);

    const nextState = {
      listingItems: [],
      hostInfo: action.hostInfo
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  });

  it('action.type CLOSE_ONE_LISTING', () => {
    const action = {
      type: 'CLOSE_ONE_LISTING',
      hostInfo: null
    };

    const currentState = {
      listingItems: [],
      hostInfo: null
    };

    deepFreeze(currentState);

    const nextState = {
      listingItems: [],
      hostInfo: action.hostInfo
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  }), it('action.type DELETE_LISTING', () => {
    const action = {
      type: 'DELETE_LISTING',
      hostInfo: data.listings[0]
    };

    const currentState = {
      listingItems: [data.listings[0], data.listings[1]],
      hostInfo: null
    };

    deepFreeze(currentState);

    const nextState = {
      listingItems: [data.listings[1]],
      hostInfo: null
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  });

  it('action.type UPDATE_LISTING', () => {
    const action = {
      type: 'UPDATE_LISTING',
      hostInfo: {
        ...data.listings[0],
        amenities: data.listings[0].amenities + ' UPDATED'
      }
    };

    const currentState = {
      listingItems: [data.listings[0], data.listings[1]],
      hostInfo: null
    };

    deepFreeze(currentState);

    const nextState = {
      listingItems: [action.hostInfo, data.listings[1]],
      hostInfo: action.hostInfo
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  });
});
