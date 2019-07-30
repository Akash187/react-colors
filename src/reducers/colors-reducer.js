const colorsReducer = (state, action) => {
  switch (action.type) {
    case 'POPULATE_COLORS':
      return action.colors;
    default:
      return state
  }
};

export default colorsReducer;