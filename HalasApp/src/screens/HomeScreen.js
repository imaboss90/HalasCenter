// src/screens/HomeScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const HomeScreen = () => {
  // TODO: Fetch news data and gym activity from your backend or API
  
  return (
    <View style={{ padding: 20 }}>
      <Text>News Feed:</Text>
      {/* Display list of news articles here */}
      
      <Text>Recent Gym Activity:</Text>
      {/* Display recent gym check-ins and interactions here */}
    </View>
  );
};

export default HomeScreen;
