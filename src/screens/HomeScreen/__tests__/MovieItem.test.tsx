import React from 'react';
import MovieItem from '@screens/HomeScreen/MovieItem';
import {renderWithTheme} from '@helpers/setupTestHelper';
import {mockMovies} from '@__mocks__/movies';
import {fireEvent} from '@testing-library/react-native';
import * as reduxDispatch from '@hooks/useAppDispatch';

jest.mock('@hooks/useAppDispatch');

describe('MovieItem', () => {
  it('should render', async () => {
    const {getByTestId, getByText} = renderWithTheme(
      <MovieItem movie={mockMovies[0]} wasWatched={false} />,
    );
    expect(getByTestId('movieItem')).toBeTruthy();
    expect(getByText('1977')).toBeTruthy();
    expect(
      getByTestId('movieItemCheckbox').props.accessibilityState.checked,
    ).toBe(false);
  });

  it('should check movie', async () => {
    const {getByTestId} = renderWithTheme(
      <MovieItem movie={mockMovies[0]} wasWatched />,
    );

    expect(
      getByTestId('movieItemCheckbox').props.accessibilityState.checked,
    ).toBe(true);
  });

  it('should dispatch onPress check', async () => {
    jest.spyOn(reduxDispatch, 'useAppDispatch').mockReturnValueOnce(jest.fn());

    const {getByTestId} = renderWithTheme(
      <MovieItem movie={mockMovies[0]} wasWatched={false} />,
    );
    fireEvent.press(getByTestId('movieItemCheckbox'));
    expect(reduxDispatch.useAppDispatch).toHaveBeenCalled();
    const {results} = (reduxDispatch.useAppDispatch as jest.Mock).mock;
    expect(results[results.length - 1].value).toHaveBeenCalledWith({
      payload: {movieUrl: mockMovies[0].url},
      type: 'movie/setWatchedMovie',
    });
  });
});
