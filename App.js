import { StyleSheet, Text, View, ActivityIndicator, Image } from 'react-native';
import React, { useEffect, useMemo, useState, useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from './src/components/SplashScreen';
import LoginScreen from './src/components/LoginScreen';
import Dashboard from './src/components/Dashboard';

import { AuthContext } from './src/components/context';

const Stack = createNativeStackNavigator();

const App = ({ navigation }) => {

  // const { signIn } = useContext(AuthContext);


  const [isLoading, setIsLoading] = useState(true);
  const [usertoken, setUserToken] = useState(null);

  const authContext = useMemo(() => ({
    signIn: (token) => {
      setUserToken(token);
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
    },
    signUp: () => {
      setUserToken(token);
      setIsLoading(false);
    },
  }));


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <View style={{ alignItems: 'center', marginTop: 350 }}>
        <ActivityIndicator size='large' />
      </View>
    )
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator screenOption={{ headerStyle: { backgroundColor: 'black' }, headerTintColor: 'black' }}>
          {usertoken === null ? (
            <Stack.Group>
              <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
              <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown: false }} />
            </Stack.Group>
          )
            :
            <Stack.Screen name='Dashboard' component={Dashboard} options={{ headerShown: false }} />

          }
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  )
}

const styles = StyleSheet.create({})

export default App;