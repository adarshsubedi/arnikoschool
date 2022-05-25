import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import axios from 'axios';

const callGetUsersList = () => {
    axios.get('https://school.dev.itlekh.com/api/login-custom').then((response) => {
        console.log(
            'Response:', response?.data);
    }).catch((error) => {
        console.log('Error:', error);
    });
}

const callAddUser = () => {
    // let params = {userID: 10, name: 'Hello', lastname: 'suvanga'};
    axios.post('https://school.dev.itlekh.com/api/login-custom',
    params,
    )
    .then((response) => {
        console.log(
            'Response:', response?.data);
    }).catch((error) => {
        console.log('Error:', error);
    });
}

const Dashboard = () => {
    return (
        <View>

            <TouchableOpacity onPress={() => {
                callGetUsersList();
            }} >
                <Text style={{textAlign: 'center', marginTop: 50, fontSize: 30}}>Login</Text>
            </TouchableOpacity>


        </View>
    )
}

const styles = StyleSheet.create({})

export default Dashboard;