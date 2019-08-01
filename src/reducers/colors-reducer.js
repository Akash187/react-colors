const colorsReducer = (state, action) => {
  switch (action.type) {
    case 'POPULATE_INITIAL_VALUE':
      return {
        ...state,
        colors : action.colors,
        sliderValue: action.sliderValue
      };
    case 'DELETE_PALETTE':
      return {
        ...state,
        colors : action.colors
      };
    case 'UPDATE_SLIDER_VALUE':
      return {
        ...state,
        sliderValue : action.value
      };
    default:
      return state
  }
};

export default colorsReducer;