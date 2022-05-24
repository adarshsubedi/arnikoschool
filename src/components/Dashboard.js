import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import axios from 'axios';

const callGetUsersList = () => {
    axios.get('https://crudcrud.com/api/14d95b275d154f48b4448b8bda010b9d/users').then((response) => {
        console.log(
            'Response:', response?.data);
    }).catch((error) => {
        console.log('Error:', error);
    });
}

const callAddUser = () => {
    let params = {userID: 7, name: 'User2', lastname: 'name'};
    axios.post('https://crudcrud.com/api/14d95b275d154f48b4448b8bda010b9d/users',
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
                <Text style={{textAlign: 'center', marginTop: 50, fontSize: 30}}>fetch Me</Text>
            </TouchableOpacity>


        </View>
    )
}

const styles = StyleSheet.create({})

export default Dashboard;