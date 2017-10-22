import rootReducer from './rootReducer';

describe('rootReducer', () => {
  it('action.type INCREMENT', () => {
    const action = {
      type: 'INCREMENT'
    };

    const currentState = { count: 0 };

    const nextState = { count: 1 };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  });

  it('action.type DECREMENT', () => {
    const action = {
      type: 'DECREMENT'
    };

    const currentState = { count: 1 };

    const nextState = { count: 0 };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  });
});
