import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {IMovie} from '@interfaces/movieInterface';
import {IGetMoviesResponse} from '@interfaces/movieStoreInterface';

interface MoviesState {
  isLoading: boolean;
  list: IMovie[];
  error: boolean;
  watched: string[];
}

export const initialState: MoviesState = {
  isLoading: false,
  list: [],
  error: false,
  watched: [],
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
    setWatchedMovie(state, {payload}: PayloadAction<{movieUrl: string}>) {
      if (state.watched.some(movieUrl => movieUrl === payload.movieUrl)) {
        state.watched = state.watched.filter(
          movieUrl => movieUrl !== payload.movieUrl,
        );
      } else {
        state.watched = [...state.watched, payload.movieUrl];
      }
    },
  },
});

export const {getMovies, getMoviesFailure, getMoviesSuccess, setWatchedMovie} =
  moviesSlice.actions;

export default moviesSlice.reducer;
