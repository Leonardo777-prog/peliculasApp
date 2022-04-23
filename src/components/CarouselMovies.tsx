import React, {useContext, useEffect} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {MoviePoster} from './MoviePoster';
import {Movie} from '../interfaces/movieInterface';
import {getImageColors} from '../helpers/getColores';
import {GradientContext} from '../contexts/GradientContext';
interface Props {
  movies: Movie[];
}

type PropsRenderCarousel = {
  item: Movie;
  index: number;
};

export const CarouselMovies = ({movies}: Props) => {
  const {width: windowsWidt} = Dimensions.get('window');

  const {setColorsImage} = useContext(GradientContext);

  const getPosterColors = async (index: number) => {
    const id = movies[index]?.id.toString();
    const uri = `https://image.tmdb.org/t/p/w500${movies[index]?.poster_path}`;
    const [primary, secondary] = await getImageColors(uri);
    setColorsImage({primary, secondary});
  };

  useEffect(() => {
    if (movies.length > 0) {
      getPosterColors(0);
    }
  }, []);

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
      onSnapToItem={index => getPosterColors(index)}
    />
  );
};

const styles = StyleSheet.create({
  section: {
    marginVertical: 20,
  },
});
