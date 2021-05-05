import React from 'react';
import {ScrollView} from 'react-native';
import {useMovies} from '../hooks/useMovies';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Spinner} from '../components/Spinner';
import {HorizontalSlider} from '../components/HorizontalSlider';
import {CarouselMovies} from '../components/CarouselMovies';

export const HomeScreen = () => {
  const {isLoading, nowPlaying, popular, upcoming, topRated} = useMovies();
  const {top} = useSafeAreaInsets();
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <ScrollView style={{marginTop: top + 20}}>
      <CarouselMovies movies={nowPlaying} />
      <HorizontalSlider movies={popular} title="Populares" />
      <HorizontalSlider movies={topRated} title="Más Vistas" />
      <HorizontalSlider movies={upcoming} title="Estrenos" />
    </ScrollView>
  );
};
