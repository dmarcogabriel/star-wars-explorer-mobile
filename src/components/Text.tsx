import styled, {css} from 'styled-components/native';
import {Text} from 'react-native-paper';

interface IProps {
  isBold?: boolean;
}

export default styled(Text)<IProps>`
  color: ${({theme}) => theme.colors.neutral.black};
  ${({isBold}) =>
    isBold &&
    css`
      font-weight: bold;
    `};
`;
