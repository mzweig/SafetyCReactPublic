/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import Button1Screen from './src/screens/Button1Screen';
import Button2Screen from './src/screens/Button2Screen';
import Button3Screen from './src/screens/Button3Screen';
import Button4Screen from './src/screens/Button4Screen';
import Button5Screen from './src/screens/Button5Screen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Button1" component={Button1Screen} />
        <Stack.Screen name="Button2" component={Button2Screen} />
        <Stack.Screen name="Button3" component={Button3Screen} />
        <Stack.Screen name="Button4" component={Button4Screen} />
        <Stack.Screen name="Button5" component={Button5Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
