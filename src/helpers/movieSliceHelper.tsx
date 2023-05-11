export const movieIsWatchedById = (id: string, watchedMovies: string[]) =>
  watchedMovies.some(watchedId => watchedId === id);

export const filterMovieById = (id: string, watchedMovies: string[]) =>
  watchedMovies.filter(watchedId => watchedId !== id);
