// import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
// import React, { useState, useEffect, useContext } from 'react';
// import NoticeScreen from './NoticeScreen';
// import NotificationScreen from './NotificationScreen';
// import HomeScreen from './HomeScreen';
// import { NavigationContainer } from '@react-navigation/native';
// import { useNavigation } from '@react-navigation/native';

// import axios from 'axios';
// import { AuthContext } from '../Login Screen/context';

// import Icon from 'react-native-vector-icons/Ionicons';
// import NavIcon from 'react-native-vector-icons/MaterialIcons';


// const StarterBoard = () => {
//     const navigation = useNavigation();

//     const [index, setIndex] = useState(1);

//     const RenderElement = () => {
//         if (index === 1) {
//             return <HomeScreen />
//         } else if (index === 2) {
//             return <NoticeScreen />
//         } else if (index === 3) {
//             return <NotificationScreen />
//         }
//     }


//     const onClickHome = () => {
//         if (index === 1) {
//             navigation.navigate('HomeScreen');
//         }
//         // else if (index !== 2) {
//         //     setIndex(index + 0);
//         // } else if (index !== 3) {
//         //     setIndex(index + 0);
//         // }
//     }

//     const onClickProfile = () => {
//         if (index === 2) {
//             navigation.navigate('ProfileScreen');
//             // }
//             // else if (index !== 2) {
//             //     setIndex(index + 0);
//             // } else if (index !== 3) {
//             //     setIndex(index + 0);
//             // }
//         }

//         const onClickNotification = () => {
//             if (index === 3) {
//                 navigation.navigate('NotificationScreen');
//             }
//             // else if (index != 1) {
//             //     setIndex(index + 0);
//             // } else if (index != 3) {
//             //     setIndex(index + 0);
//             // }
//         }



//         const { signOut } = useContext(AuthContext);

//         return (
//             <SafeAreaView style={{ flex: 1 }}>
//                 <View style={{ height: 900 }}>

//                     <RenderElement />

//                     <View style={styles.button}>
//                         <TouchableOpacity
//                             style={styles.buttonStylenotification}
//                             onPress={onClickHome}
//                         >
//                             <Icon name="home" size={30} style={styles.icon} ></Icon>
//                         </TouchableOpacity>

//                         <TouchableOpacity
//                             style={styles.buttonStyleprofile}
//                             onPress={onClickProfile}>
//                             <Icon name="person" size={30} style={styles.icon}></Icon>
//                         </TouchableOpacity>

//                         <TouchableOpacity
//                             style={styles.buttonStylenotification}
//                             onPress={onClickNotification}>
//                             <Icon name="notifications" size={30} style={styles.icon}></Icon>
//                         </TouchableOpacity>


//                         {/* <TouchableOpacity onPress={() => navigation.navigate('Signup')}></TouchableOpacity> */}

//                         <TouchableOpacity onPress={() => {
//                             signOut();
//                         }}
//                             style={styles.buttonStylelogout}>
//                             <NavIcon name="logout" size={30} style={{ color: 'black' }}></NavIcon>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </SafeAreaView>
//         )
//     }


//     const styles = StyleSheet.create({
//         buttonStyleprofile: {
//             alignItems: 'center',
//             height: 50,
//             borderRadius: 7,
//             fontFamily: 'Haas Grot Text R Web',
//         },
//         buttonStylenotification: {
//             alignItems: 'center',
//             height: 50,
//             borderRadius: 7,
//             fontFamily: 'Haas Grot Text R Web',
//         },
//         buttonStylelogout: {
//             alignItems: 'center',
//             height: 50,
//             borderRadius: 7,
//             fontFamily: 'Haas Grot Text R Web',
//         },

//         button: {
//             flexDirection: 'row',
//             // backgroundColor: 'grey',
//             position: 'relative',
//             marginTop: 630,
//             justifyContent: 'space-evenly',
//         },
//         icon: {
//             color: 'black',
//             marginTop: 8,
//         },
//     })

//     export default StarterBoard;


import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import NoticeScreen from './NoticeScreen';
import NotificationScreen from './NotificationScreen';
import HomeScreen from './HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import axios from 'axios';
import { AuthContext } from '../Login Screen/context';

import Icon from 'react-native-vector-icons/Ionicons';
import NavIcon from 'react-native-vector-icons/MaterialIcons';
import NoticeIcon from 'react-native-vector-icons/AntDesign';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const StarterBoard = () => {


    const navigation = useNavigation();

    // const [index, setIndex] = useState(1);
    const [isProfile, setIsProfile] = useState(true);

    // const RenderElement = () => {
    //     if (index == 1) {
    //         return <ProfileScreen />
    //     } else if (index == 2) {
    //         return <NotificationScreen />
    //     }
    // }

    const onClickProfile = () => {
        // if (index == 1) {
        //     navigation.navigate('ProfileScreen');
        // }

        setIsProfile(true)
        // else{
        //     setIndex(index--);
        // }

        // index === 1 ? navigation.navigate('ProfileScreen') : setIndex(index - 1)
    }

    const onClickNotification = () => {
        // if (index === 2)
        //     navigation.navigate('NotificationScreen');
        // else
        //     setIndex(index + 1);
        // index == 2 ? navigation.navigate('NotificationScreen') : setIndex(index + 1)
        setIsProfile(false)
    }


    const { signOut } = useContext(AuthContext);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ height: 900 }}>

                {/* <RenderElement /> */}
                {
                    isProfile ? <NoticeScreen /> : <NotificationScreen />
                }

                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.buttonStyleprofile}
                        onPress={onClickProfile}>
                        <NoticeIcon name="notification" size={30} style={styles.icon}></NoticeIcon>
                        <Text style={{ fontSize: 12 }}>
                            Notice
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonStylenotification}
                        onPress={onClickNotification}>
                        <Icon name="notifications" size={30} style={styles.icon}>
                        </Icon>
                        <Text style={{ fontSize: 12 }}>
                            Notification
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* <TouchableOpacity onPress={() => {
                        signOut();
                    }}
                        style={styles.buttonStylelogout}>
                        <NavIcon name="logout" size={30} style={styles.icon}></NavIcon>
                    </TouchableOpacity> */}

            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    buttonStyleprofile: {
        alignItems: 'center',
        height: 50,
        borderRadius: 7,
        fontFamily: 'Haas Grot Text R Web',
    },
    buttonStylenotification: {
        alignItems: 'center',
        height: 50,
        borderRadius: 7,
        fontFamily: 'Haas Grot Text R Web',
    },
    buttonStylelogout: {
        alignItems: 'center',
        height: 50,
        borderRadius: 7,
        fontFamily: 'Haas Grot Text R Web',
    },

    button: {
        flexDirection: 'row',
        // backgroundColor: 'grey',
        marginTop: 635,
        height: 60,
        width: windowWidth,
        justifyContent: 'space-evenly',
        position: 'absolute',
    },
    icon: {
        color: 'black',
        marginTop: 8,
    },
})

export default StarterBoard;
