import React from 'react';
import {StatusBar as RNStatusBar} from 'react-native';
import {useTheme} from 'styled-components';

export default function AppStatusBar() {
  const {colors} = useTheme();

  return (
    <RNStatusBar
      backgroundColor={colors.neutral.black}
      barStyle="light-content"
    />
  );
}
