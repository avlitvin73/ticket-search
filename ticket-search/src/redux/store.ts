import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./features/cart";
import { filmReducer } from "./features/films";
import { cinemaReducer } from "./features/films copy";


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    film: filmReducer,
    cinema: cinemaReducer

  },

});

export type AppStore = typeof store