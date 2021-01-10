import React from 'react';
import { View, Text } from 'react-native';
import { Card, CardItem } from "native-base";
import { uuid } from "../utils/constants";

export default function ChatBubble({ uid, msg }) {
    let isCurrentUser = uid === uuid;
    return (
        <Card
            transparent
        >
            <View>
                <Text>{msg}</Text>
            </View>
        </Card>
    )
}
