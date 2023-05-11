import React, {useEffect, useMemo} from 'react';
import styled, {useTheme} from 'styled-components/native';
import {ActivityIndicator} from 'react-native-paper';
import {useAppSelector} from '@hooks/useAppSelector';
import {useAppDispatch} from '@hooks/useAppDispatch';
import {selectMovies} from '@reducers/movies/moviesSelectors';
import Text from '@components/Text';
import {getMovies, getWatchedMovies} from '@reducers/movies/moviesSlice';
import Snackbar from '@components/Snackbar';
import MovieList from './MoviesList';

export default function HomeScreen() {
  const dispatch = useAppDispatch();
  const theme = useTheme();

  useEffect(() => {
    dispatch(getMovies());
    dispatch(getWatchedMovies());
  }, [dispatch]);

  const {movies, isLoading, hasError} = useAppSelector(selectMovies);

  const sortedMovies = useMemo(() => {
    return [...movies].sort(
      (a, b) => parseInt(a.release_date, 10) - parseInt(b.release_date, 10),
    );
  }, [movies]);

  const handleReload = () => dispatch(getMovies());

  return (
    <Container testID="homeScreen">
      <Title>Star Wars Explorer</Title>
      <Subtitle>Watch in the right order!</Subtitle>
      {isLoading && (
        <ActivityIndicator
          testID="homeScreenLoading"
          color={theme.colors.branding['brand-primary-main']}
        />
      )}
      <MovieList movies={sortedMovies} />
      <Snackbar
        isVisible={hasError}
        message="Something went wrong."
        feedbackColor="danger"
        rightActionText="Reload"
        onDismiss={handleReload}
        onRightAction={handleReload}
      />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.neutral.black};
  padding: 16px;
`;

const Title = styled(Text).attrs({variant: 'titleLarge'})`
  color: ${({theme}) => theme.colors.branding['brand-primary-dark']};
  margin-bottom: 4px;
`;

const Subtitle = styled(Text).attrs({variant: 'displayMedium'})`
  margin: 4px 0;
  color: ${({theme}) => theme.colors.branding['brand-primary-main']};
`;
