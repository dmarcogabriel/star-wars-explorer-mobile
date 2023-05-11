import React from 'react';
import {fireEvent} from '@testing-library/react-native';
import {renderWithTheme} from '@helpers/setupTestHelper';
import HomeScreen from '@screens/HomeScreen';
import {mockMovies} from '@__mocks__/movies';
import {initialState} from '@reducers/movies/moviesSlice';
import * as appDispatch from '@hooks/useAppDispatch';

jest.mock('@hooks/useAppDispatch');

let mockDispatch = jest.fn();
beforeAll(() => {
  jest.spyOn(appDispatch, 'useAppDispatch').mockReturnValue(mockDispatch);
});

afterEach(jest.clearAllMocks);

describe('HomeScreen', () => {
  it('should render a list of sorted movies', () => {
    const {getAllByTestId} = renderWithTheme(<HomeScreen />, {
      movie: {
        ...initialState,
        movies: mockMovies,
      },
    });

    const episodeNumbers = getAllByTestId('movieEpisodeNumber');

    expect(getAllByTestId('movieItem')).toHaveLength(mockMovies.length);
    expect(episodeNumbers[0]).toHaveTextContent('4');
    expect(episodeNumbers[2]).toHaveTextContent('6');
  });

  it('should show loading feedback', () => {
    const {getByTestId} = renderWithTheme(<HomeScreen />, {
      movie: {
        ...initialState,
        isLoading: true,
      },
    });

    expect(getByTestId('homeScreenLoading')).toBeTruthy();
  });

  it('should show error feedback', () => {
    const {getByText, queryByTestId} = renderWithTheme(<HomeScreen />, {
      movie: {
        ...initialState,
        hasError: true,
      },
    });

    expect(queryByTestId('homeScreenLoading')).toBeFalsy();
    expect(getByText(/Something went wrong./)).toBeTruthy();

    fireEvent.press(getByText(/Something went wrong./));

    expect(mockDispatch).toHaveBeenNthCalledWith(1, {
      payload: undefined,
      type: 'movie/getMovies',
    });
    expect(mockDispatch).toHaveBeenNthCalledWith(2, {
      payload: undefined,
      type: 'movie/getWatchedMovies',
    });
  });
});
