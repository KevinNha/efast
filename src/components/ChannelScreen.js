import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Platform } from 'react-native';

import ChannelHeader from './ChannelHeader'

function ChannelScreen({navigation, route}) {
  const [channel, setChannel] = useState(null);
  useEffect(() => {
    if (!channel) {
      navigation.openDrawer();
    }
    const channelId = route.params ? route.params.channelId : null;
    
  }, [route.params]);

  return (
    <SafeAreaView style={styles.channelScreenSaveAreaView}>
      <Text style={styles.channelScreenContainer}>
        <ChannelHeader
          navigation={navigation}
          channel={channel}
        />
      </Text>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  channelText: {
    paddingTop: 30,
    paddingLeft: 30
  },
  channelScreenSaveAreaView: {
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? 30 : 0,
    paddingLeft: Platform.OS === 'android' ? 10 : 0
  },
  channelScreenContainer: {flexDirection: 'column', height: '100%'}
})
export default ChannelScreen