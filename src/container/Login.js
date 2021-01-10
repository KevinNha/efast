// Set as initialRouteName later
import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, KeyboardAvoidingView, Keyboard } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { keys, setAsyncStorage } from '../asyncStorage';
import { LOADING_START, LOADING_STOP } from '../context/actions/types';
import { Store } from '../context/store';
import { LoginRequest } from '../network';
import { setUniqueValue } from '../utils/constants';

export default function Login({navigation}) {
    const globalState = useContext(Store);
    const {dispatchLoaderAction} = globalState;

    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    })
    const handleOnChangeText = (key, value) => {
        setCredentials({
            ...credentials,
            [key]: value,
        });
    }
    const handleLogin = () => {
        if (!credentials.email) {
            alert("Email is required");
        } else if (!credentials.password) {
            alert("Password is required");
        } else {
            dispatchLoaderAction({
                type: LOADING_START,
            });
            LoginRequest(credentials.email, credentials.password)
                .then((res) => {
                    if (!res.additionalUserInfo) {
                        dispatchLoaderAction({
                            type: LOADING_STOP,
                        });
                        alert(res);
                        return;
                    }
                    setAsyncStorage(keys.uuid, res.user.uid);
                    setUniqueValue(res.user.uid);
                    dispatchLoaderAction({
                        type: LOADING_STOP,
                    });
                    navigation.replace("Dashboard");
                })
                .catch((err) => {
                    dispatchLoaderAction({
                        type: LOADING_STOP,
                    });
                    alert(err);
                })
        }
    }

    return (
        <View>
            <TextInput placeholder="Enter email" value={credentials.email} onChangeText={(text) => handleOnChangeText("email", text)} style={{marginVertical: 30, fontSize: 20}} />
            <TextInput placeholder="Enter password" value={credentials.password} onChangeText={(text) => handleOnChangeText("password", text)} secureTextEntry={true} style={{marginVertical: 30, fontSize: 20}} />
            <Button title="Login" onPress={() => handleLogin()} />
            <Text style={{alignSelf: "center", marginVertical: 20}} onPress={() => navigation.navigate('SignUp')}>Sign Up</Text>
        </View>
    )
}