import React from 'react';
import {StatusBar as RNStatusBar} from 'react-native';
import {useTheme} from 'react-native-paper';

export default function AppStatusBar() {
  const {colors} = useTheme();

  return (
    <RNStatusBar backgroundColor={colors.background} barStyle="light-content" />
  );
}
