import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from './src/components/SplashScreen';
import LoginScreen from './src/components/LoginScreen';

const Stack = createNativeStackNavigator();

const App = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SplashScreen' screenOption={{ headerStyle : {backgroundColor: 'black'}, headerTintColor: 'black' }}>
        <Stack.Screen name= 'SplashScreen' component={SplashScreen} options={{ headerShown: false }}/>
        <Stack.Screen name= 'Login' component={LoginScreen} options={{ headerShown: false }}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})

export default App;