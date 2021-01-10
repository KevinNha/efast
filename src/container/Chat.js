import React, { useLayoutEffect, useState, useEffect } from 'react'
import { View, Text, SafeAreaView, Button } from 'react-native'
import { FlatList, TextInput } from 'react-native-gesture-handler';
import ChatBubble from '../components/ChatBubble';
import firebase from '../firebase/config';
import 'firebase/firestore';
import { SendMessage } from '../network';

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
                                    senderName: m.senderName,
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
        if (msgText) {
            SendMessage(msgText, currentUserId, cid)
        }
        setMsgText("");
    }

    return (
        <SafeAreaView>
            <FlatList
                inverted
                data={allMessages}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({item}) => (
                    <ChatBubble
                        uid={item.senderId}
                        uname={item.senderName}
                        msg={item.msg}
                    />
                    // <Text>{item}</Text>
                )}
            />

            <View>
                <TextInput value={msgText} placeholder="Type Here" numberOfLines={10} onChangeText={(text) => setMsgText(text)} />
                <View>
                    <Button title="Send" onPress={() => handleOnSend()} />
                </View>
            </View>

            {/* <Text>{cid + " " + cname + " " + currentUserId}</Text> */}
        </SafeAreaView>
    )
}
