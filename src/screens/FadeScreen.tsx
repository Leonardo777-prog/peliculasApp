import React, {useRef} from 'react';
import {Animated, Button, View} from 'react-native';
import {useFade} from '../hooks/useFade';

export const FadeScreen = () => {
  // para hacer aimaciones usamos un componente que se llama Animated
  const {opacity, fadeIn, fadeOut} = useFade();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        style={{
          backgroundColor: 'white',
          width: 100,
          height: 100,
          borderColor: 'black',
          borderWidth: 5,
          opacity: opacity,
          marginBottom: 1,
        }}
      />

      <Button title="Fade In" onPress={fadeIn} />
      <Button title="Fade Out" onPress={fadeOut} />
    </View>
  );
};
