import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import React, { useEffect } from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SplashScreen = (props) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login')
        }, 1000);
    })


    const { navigation } = props
    return (
        <View style={styles.container}>
            <Image source={require('./images/arnikologo.png')}
                style={{ height: 100, width: 300, alignSelf: 'center', marginTop: 300 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: windowHeight,
        width: windowWidth,
        backgroundColor: '#000E28',
    },
})

export default SplashScreen;