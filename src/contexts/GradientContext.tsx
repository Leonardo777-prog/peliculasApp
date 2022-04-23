// para hacer un context nesesito barias piesas, se nesesita un state inicial, un provider

import React, {createContext, useState} from 'react';

// creamos el context
// TODO: tipar el context

interface Props {
  children: JSX.Element | JSX.Element[];
}

interface ImageColors {
  primary: string;
  secondary: string;
}
interface ContextProps {
  colors: ImageColors;
  prevColors: ImageColors;
  setColorsImage: (colors: ImageColors) => void;
  setPrevColorsImage: (colors: ImageColors) => void;
}

export const GradientContext = createContext({} as ContextProps);

// el provedor del context es un componente que se encarga de proveer el context

export const GradientProvider = ({children}: Props) => {
  const [colors, setColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const [prevColors, setPrevColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const setColorsImage = (colors: ImageColors) => {
    setColors(colors);
  };

  const setPrevColorsImage = (colors: ImageColors) => {
    setPrevColors(colors);
  };

  return (
    <GradientContext.Provider
      value={{colors, prevColors, setColorsImage, setPrevColorsImage}}>
      {children}
    </GradientContext.Provider>
  );
};
