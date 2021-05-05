import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {MoviePoster} from './MoviePoster';
import {Movie} from '../interfaces/movieInterface';

interface Props {
  title?: string;
  movies: Movie[];
}

export const HorizontalSlider = ({title = 'Sin Categoria', movies}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={movies}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <MoviePoster
            movie={item}
            width={140}
            height={200}
            marginHorizontal={8}
          />
        )}
        keyExtractor={(item: Movie) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    height: 260,
  },
  title: {
    fontSize: 30,
    marginHorizontal: 10,
    fontWeight: '700',
  },
});
