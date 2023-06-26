import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Film } from "../films";

const baseUrl = "http://127.0.0.1:3001/api";

export type Cinema = {
  id: string;
  name: string;
  movieIds: Film['id'][]
};

export const fetchCinemaList = createAsyncThunk(
  "api/cinemas",
  () =>
    axios
      .get(`${baseUrl}/cinemas`)
      .then((response) => response.data)
      .catch((error) => error)
);

const cinemaInitialState = {
  cinemaList: {
    status: "idle",
    data: {},
    error: {},
  },
};

const cinemaSlice = createSlice({
  name: "Cinema",
  initialState: cinemaInitialState,
  reducers: {},
  extraReducers: {
    [fetchCinemaList.pending.type]: (state, action) => {
      state.cinemaList = {
        status: "loading",
        data: {},
        error: {},
      };
    },
    [fetchCinemaList.fulfilled.type]: (state, action) => {
      state.cinemaList = {
        status: "idle",
        data: action.payload,
        error: {},
      };
    },
    [fetchCinemaList.rejected.type]: (state, action) => {
      state.cinemaList = {
        status: "idle",
        data: {},
        error: action.payload,
      };
    },
  },
});

export const cinemaReducer = cinemaSlice.reducer;
export const cinemaActions = cinemaSlice.actions;
