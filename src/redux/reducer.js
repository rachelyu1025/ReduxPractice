const initalState = {
  count: 0,
};

function reducer(state = initalState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };

    case 'DECREMENT':
      return { ...state, count: state.count - action.payload.num };

    default:
      return { ...state };
  }
}

export default reducer;
