import React, { useContext, useState, useEffect } from 'react'
import { View, Text, SafeAreaView, FlatList, Button } from 'react-native'
import firebase from '../firebase/config';
import 'firebase/firestore';
import {uuid} from '../utils/constants';
import { Store } from '../context/store';
import { LOADING_START, LOADING_STOP } from '../context/actions/types';
import { CreateChannel } from '../network/channel';

export default function Dashboard({navigation}) {
    const globalState = useContext(Store);
    const {dispatchLoaderAction} = globalState;

    const [allChannels, setAllChannels] = useState([]);

    const onChannelPress = (cid, cname) => {
        navigation.navigate("Chat", {
            cid,
            cname,
            currentUserId: uuid,
        })
    }

    const handleAddChannel = () => {
        dispatchLoaderAction({
            type: LOADING_START,
        });
        CreateChannel("newChannelName", uuid)
            .then(() => {
                dispatchLoaderAction({
                    type: LOADING_STOP,
                });
                // navigation.replace("Dashboard");
            })
            .catch((err) => {
                dispatchLoaderAction({
                    type: LOADING_STOP,
                });
                alert(err);
            });
    }

    useEffect(() => {
        dispatchLoaderAction({
            type: LOADING_START,
        });
        try {
            firebase
            .firestore()
            .collection("channels")
            .get()
            .then((querySnapshot) => {
                let channels = [];
                querySnapshot.forEach((doc) => {
                    if (doc.data().members) {
                        if (doc.data().members.includes(uuid)) {
                            channels.push({
                                id: doc.id,
                                name: doc.data().name,
                                members: doc.data().members,
                            })
                        }
                    }
                });
                setAllChannels(channels);
                dispatchLoaderAction({
                    type: LOADING_STOP,
                });
            })
        } catch (error) {
            console.log(error);
        }
    }, [])

    return (
        <SafeAreaView>
            <FlatList
                alwaysBounceVertical={false}
                data={allChannels}
                keyExtractor={(_, index) => index.toString()}
                // ListHeaderComponent={<Text>{}</Text>}
                renderItem={({item}) => (
                    <Text style={{marginVertical: 30}} onPress={() => onChannelPress(item.id, item.name)} >{item.id + ", " + item.name}</Text>
                )} />
            <Button title="Add Channel" onPress={()=>handleAddChannel()} />
        </SafeAreaView>
    )
}
