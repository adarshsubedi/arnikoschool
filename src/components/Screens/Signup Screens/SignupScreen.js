import { StyleSheet, Text, View, Dimensions, TextInput, Image, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SignupScreen = (props) => {
    const { navigation } = props
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <Image source={require('../../images/logo.png')}
                        style={{ height: 250, width: 350, alignSelf: 'center', marginTop: 270, opacity: 0.2, position: 'absolute' }}
                    />
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Icon name='chevron-back' size={30}
                            style={{
                                color: 'black',
                                paddingLeft: 13,
                                paddingTop: 20,

                            }}>
                        </Icon>
                    </TouchableOpacity>

                    <Text style={styles.signup}>
                        Sign up
                    </Text>
                    <Text style={styles.txt}>
                        Enter your basic information. It{'\n'} only takes a minute.
                    </Text>
                    <View>
                        <TextInput style={styles.input}
                            placeholder={'Full name'}
                            placeholderTextColor='black'
                            fontFamily='Public Sans'
                            color='white'
                        />
                        <TextInput style={styles.input}
                            placeholder={'Email address'}
                            placeholderTextColor='black'
                            color='black'
                            fontFamily='Public Sans'
                        />
                        {/* <View style={styles.iconplace}>
                            <TextInput
                                style={{
                                    flex: 1,
                                }}
                                placeholder={'Date of birth'}
                                placeholderTextColor='white'
                                fontFamily='Public Sans'
                                color='white'
                                // inlineImageLeft='calendar'
                                 />

                            <Icon name='calendar' size={20}
                                style={{
                                    color: 'white',
                                    alignSelf: 'center',
                                    paddingLeft: 15,
                                    paddingRight: 15,
                                }} />
                        </View> */}

                        <TextInput style={styles.input}
                            placeholder={'Password'}
                            placeholderTextColor='black'
                            color='black'
                        />
                        <TextInput style={styles.input}
                            placeholder={'Re-enter password'}
                            placeholderTextColor='black'
                            color='black'
                        />

                    </View>

                    {/* <View style={styles.iconplace}>
                        <TextInput
                            style={{
                                flex: 1,
                            }}
                            placeholder={'Preferred pronoun'}
                            placeholderTextColor='black'
                            color='black' />

                        <Icon name='chevron-down' size={15}
                            style={{
                                color: 'white',
                                alignSelf: 'center',
                                paddingLeft: 15,
                                paddingRight: 15,
                            }} />
                    </View> */}


                    <TouchableOpacity onPress={() => navigation.navigate('Location')}
                        style={styles.signupbtn}>
                        <Text style={styles.signuptxt}>
                            Sign up
                        </Text>
                    </TouchableOpacity>

                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView >
    )
}


const styles = StyleSheet.create({
    container: {
        height: windowHeight,
        width: windowWidth,
        backgroundColor: 'white',
    },
    signup: {
        fontSize: 36,
        fontFamily: 'Prompt',
        fontWeight: 'bold',
        left: 15,
        paddingTop: 10,
    },
    txt: {
        fontSize: 18,
        fontFamily: 'Prompt',
        lineHeight: 30,
        height: 55,
        margin: 15,

    },
    input: {
        borderColor: '#637381',
        borderWidth: 1,
        marginHorizontal: 10,
        borderRadius: 7,
        margin: 7,
        padding: 10,
    },
    // iconplace: {
    //     borderColor: '#637381',
    //     borderWidth: 1,
    //     marginHorizontal: 10,
    //     borderRadius: 7,
    //     margin: 7,
    //     paddingLeft: 10,
    //     flexDirection: 'row',
    // },
    // horizontal: {
    //     flexDirection: 'row',
    // },
    // code: {
    //     borderColor: '#637381',
    //     borderWidth: 1,
    //     marginHorizontal: 10,
    //     borderRadius: 7,
    //     margin: 7,
    //     width: 80,
    //     padding: 10,
    // },
    // number: {
    //     borderColor: '#637381',
    //     borderWidth: 1,
    //     marginHorizontal: 10,
    //     borderRadius: 7,
    //     margin: 7,
    //     width: 240,
    //     padding: 10,
    // },

    signupbtn: {
        marginHorizontal: 15,
        height: 50,
        backgroundColor: '#14183d',
        margin: 20,
        borderRadius: 7,
        marginTop: 230,
    },
    signuptxt: {
        color: 'white',
        padding: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    },

})

export default SignupScreen;