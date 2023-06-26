import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  [key: string]: number;
  amount: number;
}

const initialState: CartState = {
  amount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, { payload }: PayloadAction<string>) => {
      const count = state[payload] || 0;

      if (count === 30) return;
      if (state.amount === 30) return;

      state.amount += 1;
      state[payload] = count + 1;
    },
    decrement: (state, { payload }: PayloadAction<string>) => {
      const count = state[payload] || 0;

      if (!count) {
        return;
      }

      if (state.amount === 0) return;

      state.amount -= 1;

      if (count === 1) {
        delete state[payload];
        return;
      }

      state[payload] = count - 1;
    },
    reset: (state, { payload }: PayloadAction<string>) => {
      state.amount -= state[payload];
      delete state[payload];
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;