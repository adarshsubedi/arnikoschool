import { StyleSheet, Text, ActivityIndicator, View, Image, Dimensions, ScrollView, TouchableOpacity, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState, useEffect, useMemo, useContext } from 'react';
import axios from 'axios';
import Dashboard from './Dashboard';

import { AuthContext } from './context';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const LoginScreen = (props) => {

    const { navigation } = props

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn } = useContext(AuthContext);

    // const [isLoading, setIsLoading] = useState(true);
    // const [usertoken, setUserToken] = useState(null);

    // const AuthContext = useMemo(() => ({
    //     signIn: () => {
    //         setUserToken('hsgdf');
    //         setIsLoading(false);
    //     },
    //     signOut: () => {
    //         setUserToken(null);
    //         setIsLoading(false);
    //     },
    //     signUp: () => {
    //         setUserToken('hsgdf');
    //         setIsLoading(false);
    //     },
    // }));

    // useEffect(() => {
    //     setTimeout(() => {
    //         setIsLoading(false);
    //     }, 1000);
    // }, []);

    // if (isLoading) {
    //     return (
    //         <View style={{ alignItems: 'center', marginTop: 350 }}>
    //             <ActivityIndicator size='large' />
    //         </View>
    //     )
    // }

    const callGetUsersList = () => {
        axios.post('https://school.dev.itlekh.com/api/login-custom', {
            email: email,
            password: password,
        }).then((res) => {
            console.log("Response: ", res.data);
        }).catch((err) => {
            console.log('Error:', err);
        });
    }

    return (
        <ScrollView>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.container}>

                        <Text style={styles.login}>
                            Arniko School
                        </Text>

                        <Image source={require('./images/logo.png')}
                            style={{ height: 200, width: 300, alignSelf: 'center', marginTop: 40, marginBottom: 40, }}
                        />

                        <Text style={styles.txt}>
                            Enter your email and password to log in.
                        </Text>
                        <View>
                            <TextInput
                                style={styles.input}
                                value={email}
                                onChangeText={e => setEmail(e)}
                                placeholder={'Email'}
                                placeholderTextColor='black'
                                color='black'
                            />

                            <TextInput style={styles.input}
                                secureTextEntry={true}
                                onChangeText={e => setPassword(e)}
                                value={password}
                                style={styles.input}
                                placeholder={'Password'}
                                placeholderTextColor='black'
                                color='black'


                            />
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
                            <Text style={styles.forget}>
                                Forgot Password?
                            </Text>
                        </TouchableOpacity>

                        <View>

                            <TouchableOpacity
                                style={styles.btn}
                                onPress={() => {
                                    callGetUsersList();
                                    signIn();

                                }} >
                                <Text style={{
                                    fontSize: 17,
                                    fontFamily: 'Public Sans',
                                    textAlign: 'center',
                                    borderRadius: 7,
                                    margin: 12,
                                    fontWeight: 'bold',
                                    color: 'white',
                                }}>Log in</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.footer}>
                            <Text style={styles.account}>
                                Don't have an account?
                            </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                                <Text style={styles.signup}>
                                    Sign up now
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView >
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: windowHeight,
        width: windowWidth,
        backgroundColor: 'white',
    },
    login: {
        fontSize: 40,
        fontFamily: 'Prompt',
        fontWeight: 'bold',
        color: 'white',
        paddingTop: 30,
        textAlign: 'center',
        color: '#14183d',
        fontWeight: 'bold',
    },
    txt: {
        fontSize: 18,
        fontFamily: 'Prompt',
        color: 'white',
        margin: 15,
        color: '#14183d',
        fontWeight: 'bold',


    },
    forget: {
        fontFamily: 'Public Sans',
        fontSize: 18,
        // borderBottomColor: '#00AB55',

        // borderBottomWidth: 1,
        color: '#14183d',
        height: 30,
        textAlign: 'right',
        margin: 15,
        fontWeight: 'bold',
    },
    btn: {
        backgroundColor: '#14183d',
        height: 45,
        margin: 15,
        borderRadius: 7,

    },
    account: {
        fontFamily: 'Public Sans',
        fontSize: 16,
        color: '#14183d',
    },
    signup: {
        fontFamily: 'Public Sans',
        fontSize: 16,
        color: '#14183d',
        borderBottomColor: '#14183d',
        borderBottomWidth: 1,

    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',

    },
    input: {
        borderColor: '#637381',
        borderWidth: 1,
        marginHorizontal: 10,
        borderRadius: 7,
        margin: 7,
        padding: 10,
        color: 'black',
    },
})

export default LoginScreen;