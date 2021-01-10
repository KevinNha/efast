import React, { useContext } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { Store } from '../context/store';

export default function Loader() {
    const globalState = useContext(Store);
    const {mapLoaderState} = globalState;
    const {loading} = mapLoaderState;
    return loading ? (
        // <View style={{zIndex: 1, elevation: 2, position: "absolute", alignItems: "center", justifyContent: "center"}}>
        <View>
            {/* <View style={{height: 44, width: 44, display: "flex",alignContent: "center", alignItems: "center", justifyContent: "center"}}> */}
            {/* <View> */}
                <ActivityIndicator
                    size="large"
                    animating={loading}
                    />
            {/* </View> */}
        </View>
    ) : null;
}
