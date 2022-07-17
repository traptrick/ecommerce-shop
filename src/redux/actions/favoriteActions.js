import axios from "axios";

export const addFav = (data) => async (dispatch) => {
  dispatch({ type: "ADD_FAV", payload: data });
};

export const favAlready = (id) => async (dispatch) => {
  dispatch({ type: "FAV_ALREADY", payload: id });
};

export const clrFav = () => async (dispatch) => {
  dispatch({ type: "CLR_FAV" });
};
