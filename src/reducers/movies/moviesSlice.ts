import {createSlice} from '@reduxjs/toolkit';
// import type {PayloadAction} from '@reduxjs/toolkit';

interface MoviesState {
  isLoading: boolean;
  list: any[]; // todo: type here...
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
    // todo: reducers here...
  },
});

export const {} = moviesSlice.actions;

export default moviesSlice.reducer;
