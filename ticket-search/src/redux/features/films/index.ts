import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://127.0.0.1:3001/api";

export type Review = {
  id: string;
  name: string;
  text: string;
  rating: number;
};

export type Film = {
  title: string;
  posterUrl: string;
  releaseYear: number;
  description: string;
  genre: string;
  id: string;
  rating: number;
  director: string;
  reviewIds: Review["id"][];
};

export const fetchFilmList = createAsyncThunk(
  "api/movies",
  (cinemaId: string) =>
    axios
      .get(`${baseUrl}/movies?cinemaId=${cinemaId}`)
      .then((response) => response.data)
      .catch((error) => error)
);

const filmInitialState = {
  filmList: {
    status: "idle",
    data: {},
    error: {},
  },
};

const filmSlice = createSlice({
  name: "film",
  initialState: filmInitialState,
  reducers: {},
  extraReducers: {
    [fetchFilmList.pending.type]: (state, action) => {
      state.filmList = {
        status: "loading",
        data: {},
        error: {},
      };
    },
    [fetchFilmList.fulfilled.type]: (state, action) => {
      state.filmList = {
        status: "idle",
        data: action.payload,
        error: {},
      };
    },
    [fetchFilmList.rejected.type]: (state, action) => {
      state.filmList = {
        status: "idle",
        data: {},
        error: action.payload,
      };
    },
  },
});

export const filmReducer = filmSlice.reducer;
export const filmActions = filmSlice.actions;
