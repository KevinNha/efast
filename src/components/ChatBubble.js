import React from 'react';
import { View, Text } from 'react-native';
import { Card, CardItem } from "native-base";
import { uuid } from "../utils/constants";

export default function ChatBubble({ uid, uname, msg }) {
    let isCurrentUser = uid === uuid;
    return (
        <Card
            transparent
        >
            <View>
                <Text>{uname}</Text>
                <Text>{msg}</Text>
            </View>
        </Card>
    )
}
