const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATOS_COMPANY":
      return {
        ...state, 
        company: {...state.company, ...action.payload}
      };
    case "GET_DATOS_COMPANY":
      return {};
    default:
      return state;

    case "SET_LOCATION":
      return {
        ...state,
        location: {...state.location, ...action.payload}
      }
  }
};

export default reducer;
