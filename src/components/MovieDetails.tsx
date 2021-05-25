import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Cast} from '../interfaces/movieCastInterface';
import {MovieFull} from '../interfaces/movieInterface';

interface Props {
  moveFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({moveFull}: Props) => {
  return (
    <>
      {/* detalles */}
      <View style={styles.marginContainer}>
        <View style={styles.clasificacion}>
          <Icon name="star-outline" color="gray" size={25} />
          <Text> {moveFull.vote_average}</Text>
          <Text>{moveFull.genres.map(g => g.name).join(', ')}</Text>
        </View>
      </View>
      {/* historia */}
      <Text
        style={{
          fontSize: 20,
          marginTop: 20,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        Histora
      </Text>
      <Text style={{fontSize: 16}}>{moveFull.overview}</Text>
      <Text style={{fontSize: 16}}>{moveFull.budget}</Text>
      {/* cast */}
    </>
  );
};

const styles = StyleSheet.create({
  marginContainer: {
    marginTop: 20,
  },
  clasificacion: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
