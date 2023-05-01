import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import styled from 'styled-components/native';
import {IMovie} from '@interfaces/movieInterface';
import MovieItem from './MovieItem';

interface IProps {
  movies: IMovie[];
}

export default function MoviesList({movies}: IProps) {
  const renderItem: ListRenderItem<IMovie> = ({item}) => (
    <MovieItem movie={item} />
  );

  return (
    <MoviesListContainer
      data={movies}
      renderItem={renderItem}
      keyExtractor={movie => movie.url}
    />
  );
}

const MoviesListContainer = styled.FlatList`` as unknown as typeof FlatList;
