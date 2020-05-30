const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATOS_COMPANY":
      return {
        ...state, 
        company: action.payload
      };
    case "GET_DATOS_COMPANY":
      return {};
    default:
      return state;
  }
};

export default reducer;
