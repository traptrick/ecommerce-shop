const INITIAL_STATE = {
  favList: [],
  saved: [],
};

const favoriteReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_FAV":
      return {
        ...state,
        favList: [
          payload,
          ...state.favList.filter((list) => list.id !== payload.id),
        ],
      };

    case "FAV_ALREADY":
      return {
        ...state,
        saved: [payload, ...state.saved],
      };

    case "CLR_FAV":
      return {
        favList: [],
        saved: [],
      };

    /********** return the initial state ************/
    default:
      return state;
  }
};

export default favoriteReducer;
