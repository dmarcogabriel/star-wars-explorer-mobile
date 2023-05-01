import {RootState} from '@config/store';

export const selectMovies = (state: RootState) => state.movie;
