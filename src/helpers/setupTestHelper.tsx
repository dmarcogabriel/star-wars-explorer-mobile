import React, {ReactNode} from 'react';
import {render} from '@testing-library/react-native';
import ThemeProvider from '@providers/ThemeProvider';
import {Provider as RNPaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {initialState} from '@reducers/movies/moviesSlice';
import configStore from 'redux-mock-store';
import {mockMovies} from '@__mocks__/movies';

jest.useFakeTimers();

export function renderWithTheme(component: ReactNode) {
  const mockStore = configStore();
  const store = mockStore({movie: {...initialState, list: mockMovies}});

  return render(
    <Provider store={store}>
      <RNPaperProvider>
        <ThemeProvider>{component}</ThemeProvider>
      </RNPaperProvider>
    </Provider>,
  );
}
