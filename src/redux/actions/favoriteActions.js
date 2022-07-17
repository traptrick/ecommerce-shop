import axios from "axios";

export const addFav = (data) => async (dispatch) => {
  dispatch({ type: "ADD_FAV", payload: data });
};
