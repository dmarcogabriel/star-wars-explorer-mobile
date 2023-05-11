import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Snackbar as RNPSnackbar} from 'react-native-paper';
import styled from 'styled-components/native';
import Text from '@components/Text';
import {IColors} from '@config/colors';

type IColorsFeedback = keyof IColors['feedback'];

interface IProps {
  message: string;
  feedbackColor: IColorsFeedback;
  isVisible: boolean;
  rightActionText?: string;
  onDismiss: () => void;
  onRightAction?: () => void;
}

export default function Snackbar({
  message,
  isVisible,
  feedbackColor,
  rightActionText,
  onDismiss,
  onRightAction,
}: IProps) {
  return (
    <Container
      visible={isVisible}
      onDismiss={onDismiss}
      testID="snackbar"
      feedbackColor={feedbackColor}>
      <SnackbarContent>
        <SnackbarActionText>{message}</SnackbarActionText>
        {rightActionText && onRightAction && (
          <TouchableOpacity onPress={onRightAction}>
            <SnackbarActionText isBold>{rightActionText}</SnackbarActionText>
          </TouchableOpacity>
        )}
      </SnackbarContent>
    </Container>
  );
}

const Container = styled(RNPSnackbar)<{feedbackColor: IColorsFeedback}>`
  position: absolute;
  bottom: 16px;
  background-color: ${({theme, feedbackColor = 'success'}) =>
    theme.colors.feedback[feedbackColor]};
`;

const SnackbarContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SnackbarActionText = styled(Text)`
  color: ${({theme}) => theme.colors.neutral.white};
`;
