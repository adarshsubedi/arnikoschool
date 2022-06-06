import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import DasIcon from 'react-native-vector-icons/MaterialIcons';

const Icons = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
            // onPress={() => navigation.navigate('Login')}
            >
                <Icon name='person' size={25}
                    style={{
                        color: 'white',
                        paddingRight: 5,
                        // paddingTop: 20,
                        // alignItems: 'center',
                        // alignContent: 'center',

                    }}>
                </Icon>
            </TouchableOpacity>

            {/* <TouchableOpacity
            // onPress={() => navigation.navigate('Login')}
            >
                <DasIcon name='logout' size={30}
                    style={{
                        color: 'white',
                        paddingLeft: 20,
                        paddingRight: 5,
                        // paddingTop: 20,
                        // alignItems: 'center',
                        // alignContent: 'center',

                    }}>
                </DasIcon>
            </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
})

export default Icons;