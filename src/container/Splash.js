import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { getAsyncStorage, keys } from '../asyncStorage'
import { setUniqueValue } from '../utils/constants';

export default function Splash({navigation}) {
    useEffect(() => {
        const redirect = setTimeout(() => {
            getAsyncStorage(keys.uuid)
                .then((uuid) => {
                    if (uuid) {
                        setUniqueValue(uuid);
                        navigation.replace("Dashboard");
                    } else {
                        navigation.replace("Login");
                    }
                })
                .catch((err) => {
                    console.log(err);
                    navigation.replace("login");
                });
        }, 3000);
        return () => clearTimeout(redirect);
    }, [navigation])
    return (
        <View>
            

        </View>
    )
}
