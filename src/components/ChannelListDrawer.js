import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import ChannelList from './ChannelList/ChannelList'

export function ChannelListDrawer(props) {
  return (
    <SafeAreaView>
      <ChannelList />
    </SafeAreaView>
  )
}

