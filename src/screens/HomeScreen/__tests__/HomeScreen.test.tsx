import React from 'react';
import HomeScreen from '../HomeScreen';
import {renderWithTheme} from '@helpers/setupTestHelper';
import * as reduxSelector from '@hooks/useAppSelector';
import {initialState} from '@reducers/movies/moviesSlice';
import {fireEvent} from '@testing-library/react-native';

jest.mock('@hooks/useAppSelector');
let mockDispatch = jest.fn();
jest.mock('@hooks/useAppDispatch', () => ({
  useAppDispatch() {
    return mockDispatch;
  },
}));

describe('HomeScreen', () => {
  it('should render', () => {
    jest.spyOn(reduxSelector, 'useAppSelector').mockReturnValueOnce({
      ...initialState,
    });
    const {getByTestId, getByText} = renderWithTheme(<HomeScreen />);

    expect(getByTestId('homeScreen')).toBeTruthy();
    expect(getByText(/Star Wars Explorer/)).toBeTruthy();
    expect(getByText(/Watch in the right order!/)).toBeTruthy();
  });

  it('should render loading', () => {
    jest.spyOn(reduxSelector, 'useAppSelector').mockReturnValueOnce({
      ...initialState,
      isLoading: true,
    });
    const {getByTestId, queryByText} = renderWithTheme(<HomeScreen />);

    expect(getByTestId('homeScreenLoading')).toBeTruthy();
    expect(queryByText(/Something went wrong./)).toBeFalsy();
  });

  it('should show error snackbar', () => {
    jest.spyOn(reduxSelector, 'useAppSelector').mockReturnValueOnce({
      ...initialState,
      error: true,
    });
    const {queryByText, getByText} = renderWithTheme(<HomeScreen />);

    expect(queryByText(/Something went wrong./)).toBeDefined();
    fireEvent.press(getByText(/Reload/));
    expect(mockDispatch).toHaveBeenLastCalledWith({
      payload: undefined,
      type: 'movie/getMovies',
    });
  });
});
