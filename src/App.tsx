import React from 'react';
import {Provider} from 'react-redux';
import {Provider as RNPaperProvider} from 'react-native-paper';
import {store} from '@config/store';
import ThemeProvider from '@providers/ThemeProvider';
import HomeScreen from '@screens/HomeScreen';
import StatusBar from '@components/Statusbar';

export default function App() {
  return (
    <Provider store={store}>
      <RNPaperProvider>
        <ThemeProvider>
          <StatusBar />
          <HomeScreen />
        </ThemeProvider>
      </RNPaperProvider>
    </Provider>
  );
}
