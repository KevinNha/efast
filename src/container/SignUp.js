// Set as initialRouteName later
import React, { useContext, useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { Store } from '../context/store';
import { LOADING_START, LOADING_STOP } from '../context/actions/types';
import { AddUser, SignUpRequest } from '../network';
import { setAsyncStorage, keys } from '../asyncStorage';
import firebase from '../firebase/config';

export default function SignUp({navigation}) {
    const globalState = useContext(Store);
    const {dispatchLoaderAction} = globalState;

    const [credentials, setCredentials] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
    })
    const handleOnChangeText = (key, value) => {
        setCredentials({
            ...credentials,
            [key]: value,
        });
    }
    const handleSignUp = () => {
        if (!credentials.name) {
            alert("Name is required");
        } else if (!credentials.email) {
            alert("Email is required");
        } else if (!credentials.password) {
            alert("Password is required");
        } else if (credentials.password !== credentials.password2) {
            alert("Password does not match");
        } else {
            dispatchLoaderAction({
                type: LOADING_START,
            });
            SignUpRequest(credentials.email, credentials.password)
                .then((res) => {
                    if (!res.additionalUserInfo) {
                        dispatchLoaderAction({
                            type: LOADING_STOP,
                        });
                        alert(res);
                        return;
                    }
                    let uid = firebase.auth().currentUser.uid;
                    AddUser(credentials.name, credentials.email, uid)
                        .then(() => {
                            setAsyncStorage(keys.uuid, uid);
                            dispatchLoaderAction({
                                type: LOADING_STOP,
                            });
                            navigation.replace("Dashboard");
                        })
                })
                .catch((err) => {
                    dispatchLoaderAction({
                        type: LOADING_STOP,
                    });
                    alert(err);
                });
        }
    }

    return (
        <View>
            <TextInput placeholder="Enter name" value={credentials.name} onChangeText={(text) => handleOnChangeText("name", text)} style={{marginVertical: 30, fontSize: 20}} />
            <TextInput placeholder="Enter email" value={credentials.email} onChangeText={(text) => handleOnChangeText("email", text)} style={{marginVertical: 30, fontSize: 20}} />
            <TextInput placeholder="Enter password" value={credentials.password} onChangeText={(text) => handleOnChangeText("password", text)} secureTextEntry={true} style={{marginVertical: 30, fontSize: 20}} />
            <TextInput placeholder="Confirm password" value={credentials.password2} onChangeText={(text) => handleOnChangeText("password2", text)} secureTextEntry={true} style={{marginVertical: 30, fontSize: 20}} />
            <Button title="SignUp" onPress={() => handleSignUp()} />
            <Text style={{alignSelf: "center", marginVertical: 20}} onPress={() => navigation.navigate('Login')}>Login</Text>
        </View>
    )
}