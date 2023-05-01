import {IColors} from '@config/colors';

import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: IColors;
  }
}
