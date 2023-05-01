import React, {type PropsWithChildren} from 'react';
import {ThemeProvider as StyledComponentsThemeProvider} from 'styled-components';
import theme from '@config/theme';

export default function ThemeProvider({children}: PropsWithChildren) {
  return (
    <StyledComponentsThemeProvider theme={theme}>
      {children}
    </StyledComponentsThemeProvider>
  );
}
