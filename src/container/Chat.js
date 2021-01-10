import React, { useLayoutEffect, useState, useEffect } from 'react'
import { View, Text, SafeAreaView, Button } from 'react-native'
import { FlatList, TextInput } from 'react-native-gesture-handler';
import ChatBubble from '../components/ChatBubble';
import firebase from '../firebase/config';
import 'firebase/firestore';

export default function Chat({route, navigation}) {
    const {params} = route;
    const {cid, cname, currentUserId} = params;
    const [msgText, setMsgText] = useState("");
    const [allMessages, setAllMessages] = useState([]);
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: <Text>{cname}</Text>,
        });
    }, [navigation]);

    useEffect(() => {
        try {
            firebase
            .firestore()
            .collection("channels")
            .get()
            .then((querySnapshot) => {
                let msgs = [];
                querySnapshot.forEach((doc) => {
                    if (doc.id === cid) {
                        doc.data().messages.forEach((m) => {
                            if (m) {
                                msgs.push({
                                    senderId: m.senderId,
                                    msg: m.msg,
                                })
                            }
                        })
                    }
                });
                setAllMessages(msgs);
            })
        } catch (error) {
            console.log(error);
        }
    }, [])

    const handleOnSend = () => {
        
    }

    return (
        <SafeAreaView>
            <FlatList
                inverted
                data={[1, 2, 3]}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({item}) => (
                    // <ChatBubble
                    //     uid={senderId}
                    //     msg={item.msg}
                    // />
                    <Text>{item}</Text>
                )}
            />

            <View>
                <TextInput placeholder="Type Here" numberOfLines={10} onChangeText={(text) => setMsgText(text)} />
                <View>
                    <Button title="Send" onPress={() => handleOnSend()} />
                </View>
            </View>

            {/* <Text>{cid + " " + cname + " " + currentUserId}</Text> */}
        </SafeAreaView>
    )
}
