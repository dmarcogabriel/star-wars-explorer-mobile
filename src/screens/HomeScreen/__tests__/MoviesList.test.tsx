import React from 'react';
import {renderWithTheme} from '@helpers/setupTestHelper';
import {mockMovies} from '@__mocks__/movies';
import MoviesList from '@screens/HomeScreen/MoviesList';
import {initialState} from '@reducers/movies/moviesSlice';

describe('MoviesList', () => {
  it('should render', async () => {
    const {getByTestId} = renderWithTheme(<MoviesList movies={mockMovies} />);
    expect(getByTestId('moviesList')).toBeDefined();
  });

  it('should render movies list', async () => {
    const {getAllByTestId} = renderWithTheme(
      <MoviesList movies={mockMovies} />,
    );
    expect(getAllByTestId('movieItem')).toHaveLength(1);
  });

  it('should render movies with watched movie', async () => {
    const {getAllByTestId} = renderWithTheme(
      <MoviesList movies={mockMovies} />,
      {
        movie: {
          ...initialState,
          watched: [mockMovies[0].url],
        },
      },
    );
    expect(
      getAllByTestId('movieItemCheckbox')[0].props.accessibilityState.checked,
    ).toBe(true);
  });
});
