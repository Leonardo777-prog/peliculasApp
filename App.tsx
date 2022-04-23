import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigation} from './src/navigation/StackNavigarion';
import {FadeScreen} from './src/screens/FadeScreen';
import {GradientProvider} from './src/contexts/GradientContext';

const App = () => {
  return (
    <NavigationContainer>
      <GradientProvider>
        <StackNavigation />
        {/* <FadeScreen/> */}
      </GradientProvider>
    </NavigationContainer>
  );
};

export default App;
