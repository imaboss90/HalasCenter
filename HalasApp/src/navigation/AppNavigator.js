// src/navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import Elevation from '../screens/Elevation';
import Milestones from '../screens/Milestones';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Elevate" component={Elevation} />
      <Stack.Screen name="Goals" component={Milestones} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
