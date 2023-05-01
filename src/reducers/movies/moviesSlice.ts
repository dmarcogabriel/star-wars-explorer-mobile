import {createSlice} from '@reduxjs/toolkit';
// import type {PayloadAction} from '@reduxjs/toolkit';
import {IMovie} from '@interfaces/movieInterface';
import {mockMovies} from '@__mocks__/movies';

interface MoviesState {
  isLoading: boolean;
  list: IMovie[]; // todo: type here...
  error: boolean;
}

const initialState: MoviesState = {
  isLoading: false,
  list: mockMovies,
  error: false,
};

export const moviesSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    // todo: reducers here...
  },
});

export const {} = moviesSlice.actions;

export default moviesSlice.reducer;
