const INITIAL_STATE = {
  favList: [],
};

const favoriteReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_FAV":
      return {
        ...state,
        favList: [...state.favList, payload],
      };

    /********** return the initial state ************/
    default:
      return state;
  }
};

export default favoriteReducer;
