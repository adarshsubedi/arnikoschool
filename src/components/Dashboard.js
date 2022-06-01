import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './Screens/Login Screen/context';
import Index from './Screens/StarterBoard/Index';


const Dashboard = () => {

    const { signOut } = useContext(AuthContext);

    return (
        <View>
            <View>
                <Index />
            </View>
        </View >
    )
}

const styles = StyleSheet.create({})

export default Dashboard;