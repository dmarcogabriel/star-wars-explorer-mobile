import moviesReducer, {
  getMovies,
  getMoviesFailure,
  getMoviesSuccess,
  setWatchedMovie,
  initialState,
} from '@reducers/movies/moviesSlice';
import {mockMovies} from '@__mocks__/movies';

describe('moviesSlice', () => {
  test('getMovies reducer', () => {
    const action = getMovies();
    expect(moviesReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  test('getMoviesSuccess reducer', () => {
    const action = getMoviesSuccess({results: mockMovies});
    expect(moviesReducer(initialState, action)).toEqual({
      ...initialState,
      list: mockMovies,
    });
  });

  test('getMoviesFailure reducer', () => {
    const action = getMoviesFailure();
    expect(moviesReducer(initialState, action)).toEqual({
      ...initialState,
      error: true,
    });
  });

  test('setWatchedMovie reducer', () => {
    const action = setWatchedMovie({movieUrl: 'movie 1'});
    expect(moviesReducer(initialState, action)).toEqual({
      ...initialState,
      watched: ['movie 1'],
    });
  });
});
