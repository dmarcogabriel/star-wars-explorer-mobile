import {RootState} from '@config/store';

export const selectMovies = (state: RootState) => state.movie;

export const selectWatched = (state: RootState) => state.movie.watchedMovies;
