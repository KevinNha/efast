import React from 'react';
import { SafeAreaView, Text} from 'react-native';

import ChannelList from './ChannelList'

function ChannelListDrawer(props) {
  return (
    <SafeAreaView>
      <ChannelList />
    </SafeAreaView>
  )
}

export default ChannelListDrawer;
