import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const BottomTabNav = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>

      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        height: windowHeight,
        width: windowWidth,
        backgroundColor: 'white',
    },
})

export default BottomTabNav;