import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./reducers/favoriteReducer";
import cartReducer from "./reducers/cartReducer";

const store = configureStore({
  reducer: {
    fav: favoriteReducer,
    cart: cartReducer,
  },
});

export default store;
