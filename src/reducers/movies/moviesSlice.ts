import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {IMovie} from '@interfaces/movieInterface';
import {
  IGetMoviesResponse,
  IGetWatchedMoviesPayload,
} from '@interfaces/movieStoreInterface';
import {movieIsWatchedById, filterMovieById} from '@helpers/movieSliceHelper';

export interface IMoviesState {
  isLoading: boolean;
  movies: IMovie[];
  hasError: boolean;
  watchedMovies: string[];
}

export const initialState: IMoviesState = {
  isLoading: false,
  movies: [],
  hasError: false,
  watchedMovies: [],
};

export const moviesSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    getMovies(state) {
      state.hasError = false;
      state.isLoading = true;
    },
    getMoviesSuccess(state, {payload}: PayloadAction<IGetMoviesResponse>) {
      state.isLoading = false;
      state.movies = payload.results;
    },
    getMoviesFailure(state) {
      state.isLoading = false;
      state.hasError = true;
    },
    setWatchedMovie(state, {payload}: PayloadAction<{movieUrl: string}>) {
      if (movieIsWatchedById(payload.movieUrl, state.watchedMovies)) {
        state.watchedMovies = filterMovieById(
          payload.movieUrl,
          state.watchedMovies,
        );
      } else {
        state.watchedMovies = [...state.watchedMovies, payload.movieUrl];
      }
    },
    getWatchedMovies(state) {
      state.watchedMovies = [];
    },
    getWatchedMoviesSuccess(state, {payload}: IGetWatchedMoviesPayload) {
      state.watchedMovies = payload.watchedMovies;
    },
  },
});

export const {
  getMovies,
  getMoviesFailure,
  getMoviesSuccess,
  setWatchedMovie,
  getWatchedMovies,
  getWatchedMoviesSuccess,
} = moviesSlice.actions;

export default moviesSlice.reducer;
