const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATOS_COMPANY":
      return {
        ...state,
        company: { ...state.company, ...action.payload },
      };
    case "GET_DATOS_COMPANY":
      return state.company;
    default:
      return state;

    case "SET_LOCATION":
      return {
        ...state,
        location: { ...state.location, ...action.payload },
      };
    case "LOGIN_COMPANY":
      return {
        ...state,
        logged: true,
      };

    case "SELECT_ALLY":
      return {
        ...state,
        selectedAlly: action.payload,
      };

    case "SET_ID_COMPANY":
      console.log("action", action);
      return {
        ...state,
        idCompany: action.payload.idCompany,
      };
  }
};

export default reducer;
