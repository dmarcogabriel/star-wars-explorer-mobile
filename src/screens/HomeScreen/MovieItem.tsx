import React from 'react';
import styled, {useTheme} from 'styled-components/native';
import {Card, Checkbox} from 'react-native-paper';
import {IMovie} from '@interfaces/movieInterface';
import Text from '@components/Text';
import {useAppDispatch} from '@hooks/useAppDispatch';
import {setWatchedMovie} from '@reducers/movies/moviesSlice';

interface IProps {
  movie: IMovie;
  wasWatched: boolean;
}

export default function MovieItem({movie, wasWatched}: IProps) {
  const dispatch = useAppDispatch();
  const {colors} = useTheme();

  const handleWatchMovie = () => {
    dispatch(setWatchedMovie({movieUrl: movie.url}));
  };

  return (
    <Container testID="movieItem">
      <InfoWrapper>
        <Text variant="labelLarge">{'Episode number: '}</Text>
        <Text variant="labelMedium" isBold>
          {movie.episode_id}
        </Text>
      </InfoWrapper>
      <Text variant="labelLarge">Title</Text>
      <Text variant="headlineMedium">{movie.title}</Text>
      <InfoWrapper justifyContent="space-between">
        <InfoWrapper>
          <Text variant="labelSmall">{'Released at '}</Text>
          <Text variant="labelMedium" isBold>
            {movie.release_date.split('-')[0]}
          </Text>
        </InfoWrapper>
        <InfoWrapper>
          <Text variant="labelSmall">{'Watched '}</Text>
          <Checkbox
            testID="movieItemCheckbox"
            status={wasWatched ? 'checked' : 'unchecked'}
            onPress={handleWatchMovie}
            color={colors.feedback.success}
            uncheckedColor={colors.neutral['gray-200']}
          />
        </InfoWrapper>
      </InfoWrapper>
    </Container>
  );
}

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
