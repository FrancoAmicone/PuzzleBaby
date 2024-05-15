import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './pages/HomeScreen';
import PuzzleTopicScreen from './pages/PuzzleTopicScreen';
import PuzzlePlayScreen from './pages/PuzzlePlayScreen';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PuzzleTopicScreen" component={PuzzleTopicScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PuzzlePlayScreen" component={PuzzlePlayScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
