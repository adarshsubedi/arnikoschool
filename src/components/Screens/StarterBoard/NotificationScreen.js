import { StyleSheet, Text, View, ImageBackground, Dimensions, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import CardView from './Card View/CardView';

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;


const NotificationScreen = () => {

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <CardView />

        </View>
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    // height: windowHeight,
    // width: windowWidth,
  },

})

export default NotificationScreen;