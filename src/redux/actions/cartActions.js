export const addToCart = (data) => async (dispatch) => {
  dispatch({ type: "ADD_TO_CART", payload: data });
};

export const alreadyInCart = (id) => async (dispatch) => {
  dispatch({ type: "IN_CART_ALREADY", payload: id });
};

export const clrCart = () => async (dispatch) => {
  dispatch({ type: "CLR_CART" });
};
