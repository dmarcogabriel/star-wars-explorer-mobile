import {AxiosResponse} from 'axios';
import {put, call, takeLatest, takeEvery, select} from 'redux-saga/effects';
import api from '@config/api';
import {IGetMoviesResponse} from '@interfaces/movieStoreInterface';
import {
  getMovies,
  getMoviesSuccess,
  getMoviesFailure,
  setWatchedMovie,
  getWatchedMovies,
  getWatchedMoviesSuccess,
} from './moviesSlice';
import {PayloadAction} from '@reduxjs/toolkit';
import {selectWatched} from '@reducers/movies/moviesSelectors';
import {storeData, getStoredData} from '@config/storage';

export function* loadMovies() {
  const endpoint = 'films';

  try {
    const {data}: AxiosResponse<IGetMoviesResponse> = yield call(
      api.get,
      endpoint,
    );
    yield put(getMoviesSuccess(data));
  } catch (error) {
    yield put(getMoviesFailure());
  }
}

function* saveWatched(_action: PayloadAction<{movieUrl: string}>) {
  try {
    const watchedMovies: string[] = yield select(selectWatched);

    yield call(storeData, '@swe:watchedMovies', watchedMovies);
  } catch (error) {
    console.log(error);
  }
}

function* loadStoredWatchedMovies() {
  try {
    const watchedMovies: string[] = yield call(
      getStoredData,
      '@swe:watchedMovies',
    );
    yield put(getWatchedMoviesSuccess({watchedMovies}));
  } catch (error) {
    console.log(error);
  }
}

export default function* movieSagas() {
  yield takeLatest(getMovies, loadMovies);
  yield takeEvery(setWatchedMovie, saveWatched);
  yield takeLatest(getWatchedMovies, loadStoredWatchedMovies);
}
