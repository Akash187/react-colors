const colorsReducer = (state, action) => {
  switch (action.type) {
    case 'POPULATE_INITIAL_VALUE':
      return action.state;
    case 'DELETE_PALETTE':
      return {
        ...state,
        colors : action.colors,
      };
    case 'UPDATE_SLIDER_VALUE':
      return {
        ...state,
        sliderValue : action.value
      };
    case 'UPDATE_COLOR_FORMAT':
      return {
        ...state,
        colorFormat: action.colorFormat
      };
    default:
      return state
  }
};

export default colorsReducer;