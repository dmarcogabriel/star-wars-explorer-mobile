import React from 'react';
import {useAppSelector} from '@hooks/useAppSelector';
import {selectMovies} from '@reducers/movies/moviesSelectors';
import Text from '@components/Text';
import styled from 'styled-components/native';
import MovieList from './MoviesList';

export default function HomeScreen() {
  const {list} = useAppSelector(selectMovies);

  return (
    <Container>
      <Title>Star Wars Explorer</Title>
      <Subtitle>Select an order to watch!</Subtitle>
      <MovieList movies={list} />
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
