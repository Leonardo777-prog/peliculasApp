import React, {useContext, useEffect} from 'react';
import {StyleSheet, Text, Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {GradientContext} from '../contexts/GradientContext';
import {useFade} from '../hooks/useFade';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const GradientBackground = ({children}: Props) => {
  const {colors, prevColors, setPrevColorsImage} = useContext(GradientContext);
  const coloresPrev = Object.values(prevColors);
  const colores = Object.values(colors);

  const {opacity, fadeIn, fadeOut} = useFade();

  useEffect(() => {
    fadeIn(() => {
      setPrevColorsImage(colors);
      fadeOut();
    });
  }, [colors]);

  return (
    <LinearGradient
      colors={[...coloresPrev, 'white']}
      style={styles.linearGradient}
      start={{x: 0.1, y: 0.1}}
      end={{x: 0.7, y: 0.7}}>
      <Animated.View style={{...StyleSheet.absoluteFillObject, opacity}}>
        <LinearGradient
          colors={[...colores, 'white']}
          style={styles.linearGradient}
          start={{x: 0.1, y: 0.1}}
          end={{x: 0.7, y: 0.7}}
        />
      </Animated.View>
      {children}
    </LinearGradient>
  );
};

// Within your render function

// Later on in your styles..
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});
