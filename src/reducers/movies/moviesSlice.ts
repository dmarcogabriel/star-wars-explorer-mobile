import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {IMovie} from '@interfaces/movieInterface';
import {IGetMoviesResponse} from '@interfaces/movieStoreInterface';

interface MoviesState {
  isLoading: boolean;
  list: IMovie[];
  error: boolean;
}

const initialState: MoviesState = {
  isLoading: false,
  list: [],
  error: false,
};

export const moviesSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    getMovies(state) {
      state.error = false;
      state.isLoading = true;
    },
    getMoviesSuccess(state, {payload}: PayloadAction<IGetMoviesResponse>) {
      state.isLoading = false;
      state.list = payload.results;
    },
    getMoviesFailure(state) {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const {getMovies, getMoviesFailure, getMoviesSuccess} =
  moviesSlice.actions;

export default moviesSlice.reducer;
