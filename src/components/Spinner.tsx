import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export const Spinner = () => {
  return (
    <View style={styles.conteiner}>
      <ActivityIndicator color="#0b94f0" size={50} animating={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
