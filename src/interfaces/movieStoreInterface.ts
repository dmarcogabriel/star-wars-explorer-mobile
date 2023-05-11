import {PayloadAction} from '@reduxjs/toolkit';
import {IMovie} from './movieInterface';

export interface IGetMoviesResponse {
  results: IMovie[];
}

export type IGetWatchedMoviesPayload = PayloadAction<{watchedMovies: string[]}>;
