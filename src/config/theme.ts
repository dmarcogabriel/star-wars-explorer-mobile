import {DefaultTheme} from 'react-native-paper';

const theme: typeof DefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#F5D000',
    secondary: '#1F5F84',
    secondaryContainer: '#403C63',
    tertiary: '#622E6E',
    background: '#211C20',
  },
};

export default theme;
