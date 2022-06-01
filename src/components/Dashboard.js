import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './Screens/Login Screen/context';


const Dashboard = () => {

    const { signOut } = useContext(AuthContext);

    return (
        <View>

            {/* <TouchableOpacity onPress={() => {
                signOut()
                
            }} >
                <Text style={{ textAlign: 'center', marginTop: 50, fontSize: 30 }}>Logout</Text>
            </TouchableOpacity> */}

            <View>
                <TouchableOpacity onPress={() => {
                    signOut();
                }}>
                    <Text style={{ marginTop: 50, textAlign: 'center', fontSize: 30 }}>
                        Logout
                    </Text>
                </TouchableOpacity>
            </View>


        </View >
    )
}

const styles = StyleSheet.create({})

export default Dashboard;