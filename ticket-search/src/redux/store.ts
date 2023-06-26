import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./features/cart";
import { filmReducer } from "./features/films";


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    film: filmReducer

  },

});

export type AppStore = typeof store