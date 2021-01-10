import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';

const ChannelHeader = ({navigation, channel, client}) => {
    let channelTitle = 'nwHacks'

    if (channel && channel.data && channel.data.name) {
        channelTitle = channel.data.name;
    }

    const memberIds = channel && channel.state ? Object.keys(channel.state.members) : [];

    if (channel && memberIds.length === 2) {
        const otherUserId = memberIds[0] === client.user.id ? memberIds[1] : memberIds[0];

        channelTitle = channel.state.members[otherUserId].user.name;
    }

    return (
        <View style={styles.container}>
          <View style={styles.leftContent}>
            <Channel />
            <Text style={styles.channelTitle}>{channelTitle}</Text>
          </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 15,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderBottomColor: 'grey',
    },
    leftContent: {
        flexDirection: 'row',
    },
    channelTitle: {
        color: 'black',
        marginLeft: 10,
        fontWeight: '900',
        fontSize: 17,
    },
});

export default ChannelHeader;