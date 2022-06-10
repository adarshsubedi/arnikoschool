import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
// import NotificationScreen from '../NotificationScreen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CardView = ({ title, content }) => {
    return (
        <View style={styles.container}>
            <>
                <View style={styles.card}>
                    <Text style={{ fontSize: 20, marginLeft: 10, color: 'black' }}>
                        {title}
                    </Text>
                    <Text style={{ marginLeft: 10 }}>
                        {content}
                    </Text>
                    <Text style={{ marginRight: 10, textAlign: 'right', marginTop: 25 }}>
                        Date: 06/06/2022
                    </Text>
                </View>
            </>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        // justifyContent: 'center',
        // alignContent: 'center',
        backgroundColor: 'orange',
        height: 100,
        marginTop: 50,
        elevation: 50,
        opacity: 0.5,
        marginHorizontal: 20,
        marginLeft: 10,
    },
})

export default CardView;