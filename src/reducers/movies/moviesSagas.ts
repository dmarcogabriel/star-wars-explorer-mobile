import {AxiosResponse} from 'axios';
import {takeEvery, put, call} from 'redux-saga/effects';
import api from '@config/api';
import {IGetMoviesResponse} from '@interfaces/movieStoreInterface';
import {getMovies, getMoviesSuccess, getMoviesFailure} from './moviesSlice';

function* loadMovies() {
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
  yield takeEvery(getMovies, loadMovies);
}
