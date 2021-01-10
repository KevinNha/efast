import React, { useEffect, useState } from 'react';
import { ChannelHeader } from './ChannelHeader';
import Channel from './src/components/Channel/ChannelHeader';

ChannelScreen = ({navigation, route}) => {
    const [channel, setChannel] = useState(null);
    useEffect(() => {
        const channelId = route.params ? route.params.channelId : null;
        const _channel = chatClient.channel('messaging', channelId);
        setChannel(_channel);
    }, [route.params]);

    return (
        <SafeAreaView style={styles.channelScreenSaveAreaView}>
          <View style={styles.channelScreenContainer}>
            <ChannelHeader/>
          </View>
        </SafeAreaView>
    )
}