import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import CardView from './Card View/CardView';

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;


const NotificationScreen = () => {

  const Add = () => {

  };

  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={e => setTitle(e)}
            placeholder={'Title'}
            placeholderTextColor='black'
            color='black'
          />

          <TextInput
            style={styles.input}
            value={content}
            onChangeText={e => setContent(e)}
            placeholder={'Content'}
            placeholderTextColor='black'
            color='black'
          />

          <TouchableOpacity
            style={styles.btn}
            onPress={() => { }} >

            <Text style={{
              fontSize: 17,

              textAlign: 'center',
              borderRadius: 7,
              margin: 12,
              fontWeight: 'bold',
              color: 'white',
            }}>Add</Text>
          </TouchableOpacity>
        </View>

        <View>
          <CardView
            title={title}
            content={content}
          />
        </View>
      </View>
    </ScrollView >
  )
}


const styles = StyleSheet.create({
  container: {
    // height: windowHeight,
    // width: windowWidth,
  },
  btn: {
    backgroundColor: '#14183d',
    height: 45,
    margin: 15,
    borderRadius: 7,

  },

})

export default NotificationScreen;