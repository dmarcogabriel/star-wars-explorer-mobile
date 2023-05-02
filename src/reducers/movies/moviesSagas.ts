import {AxiosResponse} from 'axios';
import {put, call, takeLatest} from 'redux-saga/effects';
import api from '@config/api';
import {IGetMoviesResponse} from '@interfaces/movieStoreInterface';
import {getMovies, getMoviesSuccess, getMoviesFailure} from './moviesSlice';

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

export default function* watchAll() {
  yield takeLatest(getMovies, loadMovies);
}
