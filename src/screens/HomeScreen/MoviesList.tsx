import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import styled from 'styled-components/native';
import {IMovie} from '@interfaces/movieInterface';
import {useAppSelector} from '@hooks/useAppSelector';
import {selectWatched} from '@reducers/movies/moviesSelectors';
import MovieItem from './MovieItem';
import {movieIsWatchedById} from '@helpers/movieSliceHelper';

interface IProps {
  movies: IMovie[];
}

export default function MoviesList({movies}: IProps) {
  const watchedMovies = useAppSelector(selectWatched);

  const renderItem: ListRenderItem<IMovie> = ({item: movie}) => (
    <MovieItem
      movie={movie}
      wasWatched={movieIsWatchedById(movie.url, watchedMovies)}
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
