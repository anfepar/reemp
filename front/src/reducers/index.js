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
    case "SET_TITULO_ALIANZA":
      return {
        ...state,
        ...action.payload,
      };

    case "GET_TITULO_ALIANZA":
      return state.title;
  }
};

export default reducer;
