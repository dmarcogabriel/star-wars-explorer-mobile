import {runSaga, Saga} from 'redux-saga';
import {loadMovies} from '@reducers/movies/moviesSagas';
import api from '@config/api';
import {getMoviesSuccess, getMoviesFailure} from '@reducers/movies/moviesSlice';

describe('moviesSagas', () => {
  it('should pass to load movies', async () => {
    (api.get as jest.Mock).mockResolvedValueOnce({
      data: {
        results: [],
      },
    });
    const dispatched: any[] = [];
    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      loadMovies as Saga,
    ).toPromise();
    expect(dispatched[0]).toEqual(getMoviesSuccess({results: []}));
  });

  it('should fail to load movies', async () => {
    (api.get as jest.Mock).mockRejectedValueOnce({});

    const dispatched: any[] = [];
    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      loadMovies as Saga,
    ).toPromise();
    expect(dispatched[0]).toEqual(getMoviesFailure());
  });
});
