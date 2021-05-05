import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {MovieDBResponse, Movie} from '../interfaces/movieInterface';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  const getMovies = async () => {
    const nowPlayingPromise = movieDB.get<MovieDBResponse>('/now_playing');
    const popularPromise = movieDB.get<MovieDBResponse>('/popular');
    const topRatedPromise = movieDB.get<MovieDBResponse>('/top_rated');
    const upcomingPromise = movieDB.get<MovieDBResponse>('/upcoming');

    const resPeliculas = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upcomingPromise,
    ]);

    setMoviesState({
      nowPlaying: resPeliculas[0].data.results,
      popular: resPeliculas[1].data.results,
      topRated: resPeliculas[2].data.results,
      upcoming: resPeliculas[3].data.results,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return {
    ...moviesState,
    isLoading,
  };
};
