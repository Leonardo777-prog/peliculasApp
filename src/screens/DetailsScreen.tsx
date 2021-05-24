import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/StackNavigarion';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

const heightScreen = Dimensions.get('window').height;

export const DetailScreen = ({route}: Props) => {
  const movie = route.params;
  const {poster_path} = movie;
  const uri = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: heightScreen * 0.7,

    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 11.46,
    shadowRadius: 11.14,

    elevation: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  image: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
