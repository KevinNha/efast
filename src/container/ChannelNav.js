import React, { useContext, useState, useEffect } from 'react'
import { View, Text, SafeAreaView, FlatList, Button } from 'react-native'
import firebase from '../firebase/config';
import 'firebase/firestore';
import {uuid} from '../utils/constants';
import { Store } from '../context/store';
import { LOADING_START, LOADING_STOP } from '../context/actions/types';
import { CreateChannel } from '../network/channel';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from './Dashboard';
import { Chat } from '.';
const Drawer = createDrawerNavigator();

export default function ChannelNav({navigation}) {
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

    // const handleAddChannel = () => {
    //     dispatchLoaderAction({
    //         type: LOADING_START,
    //     });
    //     CreateChannel("newChannelName", uuid)
    //         .then(() => {
    //             dispatchLoaderAction({
    //                 type: LOADING_STOP,
    //             });
    //             // navigation.replace("Dashboard");
    //         })
    //         .catch((err) => {
    //             dispatchLoaderAction({
    //                 type: LOADING_STOP,
    //             });
    //             alert(err);
    //         });
    // }

    useEffect(() => {
        dispatchLoaderAction({
            type: LOADING_START,
        });
        try {
            firebase
            .firestore()
            .collection("channels")
            .onSnapshot((querySnapshot) => {
            // })
            // .get()
            // .then((querySnapshot) => {
                let channels = [];
                querySnapshot.forEach((doc) => {
                    if (doc.data().members) {
                        // TODO - REMOVE THIS
                        // if (doc.data().members.includes(uuid)) {
                            channels.push({
                                id: doc.id,
                                name: doc.data().name,
                                members: doc.data().members,
                            })
                        // }
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
        <Drawer.Navigator
            
            // drawerContent={ChannelListDrawer}
            // drawerStyle={styles.drawerNavigator}
            options={{
                // title: 'Home',
                drawerIcon: ({focused, size}) => (
                    <Ionicons
                    name="menu"
                    size={size}
                    color={focused ? '#7cc' : '#ccc'}
                    />
                ),
            }}
        >
            <Drawer.Screen name="ADD New Channel" component= {Dashboard} />
            {
                allChannels.map((channel) => 
                    {
                        if (channel.name) {
                            return <Drawer.Screen key={channel.id} name={channel.id} component={Chat} initialParams={{ cid: channel.id, cname: channel.name, currentUserId: uuid }} options={({navigation}) => ({ title: channel.name }) } />
                        } else {
                            return <Drawer.Screen key={channel.id} name={channel.id} component={Chat} initialParams={{ cid: channel.id, cname: channel.name, currentUserId: uuid }} options={{ title: " " }} />
                        }
                    }
                )
            }
        </Drawer.Navigator>
    )
}