import React, { useContext, useState, useEffect } from 'react'
import { View, Text, SafeAreaView, FlatList, Button, TextInput, Keyboard } from 'react-native'
import firebase from '../firebase/config';
import 'firebase/firestore';
import {uuid} from '../utils/constants';
import { Store } from '../context/store';
import { LOADING_START, LOADING_STOP } from '../context/actions/types';
import { CreateChannel } from '../network/channel';

import { createDrawerNavigator } from '@react-navigation/drawer';

export default function Dashboard({navigation}) {
    const globalState = useContext(Store);
    const {dispatchLoaderAction} = globalState;

    const [newChannelName, setNewChannelName] = useState("");

    // const [allChannels, setAllChannels] = useState([]);

    // const onChannelPress = (cid, cname) => {
    //     navigation.navigate("Chat", {
    //         cid,
    //         cname,
    //         currentUserId: uuid,
    //     })
    // }

    const handleAddChannel = () => {
        if (newChannelName.trim()) {
            dispatchLoaderAction({
                type: LOADING_START,
            });
            CreateChannel(newChannelName.trim(), uuid)
            .then(() => {
                dispatchLoaderAction({
                    type: LOADING_STOP,
                });
                setNewChannelName("");
                Keyboard.dismiss();
                navigation.openDrawer();
            })
            .catch((err) => {
                dispatchLoaderAction({
                    type: LOADING_STOP,
                });
                alert(err);
            });
        }
    }

    // useEffect(() => {
    //     dispatchLoaderAction({
    //         type: LOADING_START,
    //     });
    //     try {
    //         firebase
    //         .firestore()
    //         .collection("channels")
    //         .onSnapshot((querySnapshot) => {
    //         // })
    //         // .get()
    //         // .then((querySnapshot) => {
    //             let channels = [];
    //             querySnapshot.forEach((doc) => {
    //                 if (doc.data().members) {
    //                     // TODO - REMOVE THIS
    //                     // if (doc.data().members.includes(uuid)) {
    //                         channels.push({
    //                             id: doc.id,
    //                             name: doc.data().name,
    //                             members: doc.data().members,
    //                         })
    //                     // }
    //                 }
    //             });
    //             setAllChannels(channels);
    //             dispatchLoaderAction({
    //                 type: LOADING_STOP,
    //             });
    //         })
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }, [])

    return (
        <SafeAreaView>
            {/* <FlatList
                alwaysBounceVertical={false}
                data={allChannels}
                keyExtractor={(_, index) => index.toString()}
                // ListHeaderComponent={<Text>{}</Text>}
                renderItem={({item}) => (
                    <Text style={{marginVertical: 30}} onPress={() => onChannelPress(item.id, item.name)} >{item.name}</Text>
                )} /> */}
            <Text style={{fontSize: 15}}>Your New Channel Name: </Text>
            <TextInput placeholder="Channel Name" value={newChannelName} onChangeText={(text)=>{setNewChannelName(text)}} style={{fontSize: 20, marginVertical: 20}} />
            <Button title="Add Channel" onPress={()=>handleAddChannel()} />
        </SafeAreaView>
    )
}
