import React from 'react';
import {fireEvent} from '@testing-library/react-native';
import {renderWithTheme} from '@helpers/setupTestHelper';
import MovieItem from '@screens/HomeScreen/MovieItem';
import {mockMovies} from '@__mocks__/movies';
import * as appDispatch from '@hooks/useAppDispatch';

jest.mock('@hooks/useAppDispatch');

afterEach(jest.clearAllMocks);

describe('MovieItem', () => {
  const [mockMovie] = mockMovies;

  it('should show checked watched movie', () => {
    const {getByTestId} = renderWithTheme(
      <MovieItem movie={mockMovie} wasWatched={false} />,
    );

    expect(
      getByTestId('movieItemCheckbox').props.accessibilityState.checked,
    ).toBe(false);
  });

  it('should show unchecked watched movie', () => {
    const {getByTestId} = renderWithTheme(
      <MovieItem movie={mockMovie} wasWatched />,
    );

    expect(
      getByTestId('movieItemCheckbox').props.accessibilityState.checked,
    ).toBe(true);
  });

  it('should dispatch setWatchedMovie', () => {
    const mockDispatch = jest.fn();
    jest.spyOn(appDispatch, 'useAppDispatch').mockReturnValueOnce(mockDispatch);

    const {getByTestId} = renderWithTheme(
      <MovieItem movie={mockMovie} wasWatched />,
    );

    fireEvent.press(getByTestId('movieItemCheckbox'));

    expect(mockDispatch).toHaveBeenCalledWith({
      payload: {movieUrl: mockMovie.url},
      type: 'movie/setWatchedMovie',
    });
  });
});
