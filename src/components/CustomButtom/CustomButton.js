import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import NavIcon from 'react-native-vector-icons/MaterialIcons';


import axios from 'axios';
import { AuthContext } from '../Screens/Login Screen/context';


const onPress = () => {
    navigation.navigate('Welcome');
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CustomButton = ({ onPress, backgroundColor, color, borderColor }) => {

    const { signOut } = useContext(AuthContext);

    return (
        <View>
            <View style={styles.btn}>
                <TouchableOpacity >
                    <Icon name="person" size={30}></Icon>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="notifications" size={30}></Icon>
                </TouchableOpacity>
                {/* <TouchableOpacity>
                    <Icon name="person" size={30}></Icon>
                </TouchableOpacity> */}
                <TouchableOpacity onPress={() => {
                    signOut();
                }}>
                    <NavIcon name="logout" size={30}></NavIcon>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    btn: {
        backgroundColor: 'grey',
        height: 50,
        flexDirection: 'row',
        width: windowWidth,
        marginTop: 560,
        justifyContent: 'space-evenly',
        // marginTop: 5,
        position: 'relative',
    },
});

export default CustomButton;
