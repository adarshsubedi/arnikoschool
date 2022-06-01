import { StyleSheet, Text, View, ActivityIndicator, Image } from 'react-native';
import React, { useEffect, useMemo, useState, useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from './src/components/SplashScreen';
import LoginScreen from './src/components/Screens/Login Screen/LoginScreen';
import Dashboard from './src/components/Dashboard';

import ProfileScreen from './src/components/Screens/StarterBoard/ProfileScreen';
import NotificationScreen from './src/components/Screens/StarterBoard/NotificationScreen';

import { AuthContext } from './src/components/Screens/Login Screen/context';
import SignupScreen from './src/components/Screens/Signup Screens/SignupScreen';
import BottomTabNav from './src/components/BottomTabNav/BottomTabNav';
import Icon from './src/components/Icon/Icon';

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
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#000E28' },
          headerTintColor: 'white', headerTintColor: 'white'
        }}>
          {usertoken === null || usertoken === undefined ? (
            <Stack.Group>
              <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown: false }} />
              <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
              <Stack.Screen name='Signup' component={SignupScreen} options={{ headerShown: false }} />


              {/* <Stack.Screen name='BottomTabNav' component={BottomTabNav} options={{ headerShown: false }} /> */}
            </Stack.Group>
          )
            :
            <>
              <Stack.Screen name='Dashboard' component={Dashboard}
                options={{
                  title: 'Home', //Set Header Title
                  headerStyle: {
                    backgroundColor: '#14183d', //Set Header color
                  },
                  headerTintColor: 'white', //Set Header text color
                  headerTitleStyle: {
                    fontWeight: 'bold', //Set Header text style
                  },
                  headerRight: () => <Icon />,
                }} />

            </>

          }
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  )
}

const styles = StyleSheet.create({})

export default App;