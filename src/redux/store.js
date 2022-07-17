import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./reducers/favoriteReducer";

const store = configureStore({
  reducer: {
    fav: favoriteReducer,
  },
});

export default store;
