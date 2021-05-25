import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Cast, CastMovie} from '../interfaces/movieCastInterface';
import {MovieFull} from '../interfaces/movieInterface';

interface MovieDetails {
  isLoading: boolean;
  movieFull?: MovieFull;
  cast: Cast[];
}

export const useMovieDetails = (id: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetail = async () => {
    const movieDetailsPromise = movieDB.get<MovieFull>(`/${id}`);
    const castPromise = movieDB.get<CastMovie>(`/${id}/credits`);
    const [movieDetailRes, castRes] = await Promise.all([
      movieDetailsPromise,
      castPromise,
    ]);
    setState({
      isLoading: false,
      movieFull: movieDetailRes.data,
      cast: castRes.data.cast,
    });
  };
  useEffect(() => {
    getMovieDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    ...state,
  };
};
