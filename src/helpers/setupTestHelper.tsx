import React, {ReactNode} from 'react';
import {render} from '@testing-library/react-native';
import ThemeProvider from '@providers/ThemeProvider';
import {Provider as RNPaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import configStore from 'redux-mock-store';
import {RootState, store} from '@config/store';

jest.useFakeTimers();

export function renderWithTheme(
  component: ReactNode,
  state: Partial<RootState> = {},
) {
  const mockStore = configStore<RootState>();
  const mockedStore = mockStore({...store.getState(), ...state});

  return render(
    <Provider store={mockedStore}>
      <RNPaperProvider>
        <ThemeProvider>{component}</ThemeProvider>
      </RNPaperProvider>
    </Provider>,
  );
}
