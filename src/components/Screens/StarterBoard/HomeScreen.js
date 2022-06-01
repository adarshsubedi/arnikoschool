import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {

  const navigation = useNavigation();

  return (
    <View>
      <Text>
        HomeScreen
      </Text>


    </View>
  );
};


const styles = StyleSheet.create({

})

export default HomeScreen;