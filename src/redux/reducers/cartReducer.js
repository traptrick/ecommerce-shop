const INITIAL_STATE = {
  cartList: [],
  inCart: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartList: [
          payload,
          ...state.cartList.filter((list) => list.id !== payload.id),
        ],
      };

    case "IN_CART_ALREADY":
      return {
        ...state,
        inCart: [payload, ...state.inCart],
      };

    case "CLR_CART":
      return {
        cartList: [],
        inCart: [],
      };

    /********** return the initial state ************/
    default:
      return state;
  }
};

export default cartReducer;
