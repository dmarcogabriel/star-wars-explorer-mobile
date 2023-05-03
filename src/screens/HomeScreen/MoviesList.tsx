import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import styled from 'styled-components/native';
import {IMovie} from '@interfaces/movieInterface';
import {useAppSelector} from '@hooks/useAppSelector';
import {selectWatched} from '@reducers/movies/moviesSelectors';
import MovieItem from './MovieItem';

interface IProps {
  movies: IMovie[];
}

export default function MoviesList({movies}: IProps) {
  const watched = useAppSelector(selectWatched);

  const renderItem: ListRenderItem<IMovie> = ({item}) => (
    <MovieItem
      movie={item}
      wasWatched={watched.some(movieUrl => movieUrl === item.url)}
    />
  );

  return (
    <MoviesListContainer
      testID="moviesList"
      data={movies}
      renderItem={renderItem}
      keyExtractor={movie => movie.url}
    />
  );
}

const MoviesListContainer = styled.FlatList`` as unknown as typeof FlatList;
