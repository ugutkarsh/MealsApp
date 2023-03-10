import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MealsNavigator from './navigation/MealsNavigator';

export default function App() {
  return (
    <><StatusBar barStyle="dark-content" hidden={false} backgroundColor="#00BCD4" translucent={true} />
      <NavigationContainer>
        <MealsNavigator />
      </NavigationContainer></>
  );
}



