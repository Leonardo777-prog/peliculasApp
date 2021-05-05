import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {MoviePoster} from './MoviePoster';
import {Movie} from '../interfaces/movieInterface';

interface Props {
  movies: Movie[];
}

type PropsRenderCarousel = {
  item: Movie;
  index: number;
};

export const CarouselMovies = ({movies}: Props) => {
  const {width: windowsWidt} = Dimensions.get('window');
  return (
    <Carousel
      data={movies}
      renderItem={({item}: PropsRenderCarousel) => (
        <View style={styles.section}>
          <MoviePoster movie={item} />
        </View>
      )}
      sliderWidth={windowsWidt}
      itemWidth={300}
    />
  );
};

const styles = StyleSheet.create({
  section: {
    marginVertical: 20,
  },
});
