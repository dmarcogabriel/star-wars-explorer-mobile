import React, {memo} from 'react';
import styled from 'styled-components/native';
import {Card, Checkbox} from 'react-native-paper';
import {IMovie} from '@interfaces/movieInterface';
import Text from '@components/Text';

interface IProps {
  movie: IMovie;
}

const MovieItem = memo(({movie}: IProps) => (
  <Container>
    <InfoWrapper>
      <StyledText variant="labelLarge">{'Episode number: '}</StyledText>
      <StyledText variant="labelMedium" isBold>
        {movie.episode_id}
      </StyledText>
    </InfoWrapper>
    <StyledText variant="labelLarge">Title</StyledText>
    <StyledText variant="headlineMedium">{movie.title}</StyledText>
    <InfoWrapper justifyContent="space-between">
      <InfoWrapper>
        <StyledText variant="labelSmall">{'Released at '}</StyledText>
        <StyledText variant="labelMedium" isBold>
          {movie.release_date.split('-')[0]}
        </StyledText>
      </InfoWrapper>
      <InfoWrapper>
        <StyledText variant="labelSmall">{'Watched '}</StyledText>
        <Checkbox status="unchecked" />
      </InfoWrapper>
    </InfoWrapper>
  </Container>
));

const Container = styled(Card)`
  padding: 16px;
  background-color: ${({theme}) => theme.colors.neutral['gray-100']};
  margin: 8px 0;
`;

const InfoWrapper = styled.View<{justifyContent?: string}>`
  flex-direction: row;
  align-items: center;
  justify-content: ${({justifyContent = 'flex-start'}) => justifyContent};
`;

const StyledText = styled(Text)``;

export default MovieItem;
