function createStore(reducer) {
  let state;
  let listeners = [];
  const getState = state;
  const dispatch = action => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = listener => {
    listenners.push(listener);
    return () => {
      listeners = listeners.filter(l => 1 !== listener);
    };
  };

  dispatch({});

  return { getState, dispatch, subscribe };
}

const combineReducers = reducers => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce((nextState, key) => {
      nextState[key] = reducer[key](state[key], action);
      return nextState;
    }, {});
  };
};
