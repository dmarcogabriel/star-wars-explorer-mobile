import React, {useEffect, useMemo} from 'react';
import {TouchableOpacity} from 'react-native';
import styled, {useTheme} from 'styled-components/native';
import {ActivityIndicator, Snackbar as RNPSnackbar} from 'react-native-paper';
import {useAppSelector} from '@hooks/useAppSelector';
import {useAppDispatch} from '@hooks/useAppDispatch';
import {selectMovies} from '@reducers/movies/moviesSelectors';
import Text from '@components/Text';
import {getMovies} from '@reducers/movies/moviesSlice';
import MovieList from './MoviesList';

export default function HomeScreen() {
  const dispatch = useAppDispatch();
  const theme = useTheme();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const {list, isLoading, error} = useAppSelector(selectMovies);

  const sortedList = useMemo(() => {
    return [...list].sort((a, b) => a.episode_id - b.episode_id);
  }, [list]);

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
      <MovieList movies={sortedList} />
      <Snackbar visible={error} onDismiss={() => {}} testID="errorMessage">
        <SnackbarContent>
          <SnackbarActionText>Something went wrong.</SnackbarActionText>
          <TouchableOpacity onPress={handleReload}>
            <SnackbarActionText isBold>Reload</SnackbarActionText>
          </TouchableOpacity>
        </SnackbarContent>
      </Snackbar>
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

const Snackbar = styled(RNPSnackbar)`
  position: absolute;
  bottom: 16px;
  background-color: ${({theme}) => theme.colors.feedback.danger};
`;

const SnackbarContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SnackbarActionText = styled(Text)`
  color: ${({theme}) => theme.colors.neutral.white};
`;
