import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {Movie} from '../interfaces/movieInterface';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
  marginHorizontal?: number;
}

export const MoviePoster = ({
  movie,
  height = 420,
  width = 300,
  marginHorizontal = 0,
}: Props) => {
  const {poster_path} = movie;
  const uri = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{height, width, marginHorizontal}}
      onPress={() => {
        navigation.navigate('DetailScreen', movie);
      }}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri,
          }}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 1.46,
    shadowRadius: 11.14,

    elevation: 17,
  },
  image: {
    flex: 1,
    borderRadius: 15,
  },
});
