import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native'
import {styles} from '../../App';

export default function ChannelScreen({navigation, route}) {
    const [channel, setChannel] = useState(null);
    useEffect(() => {
      if (!channel) {
        navigation.openDrawer();
      }
      const channelId = route.params ? route.params.channelId : null;
      const _channel = chatClient.channel('messaging', channelId);
      setChannel(_channel);
      
    }, [route.params]);
  
    return (
      <SafeAreaView style={styles.channelScreenSaveAreaView}>
        <View style={styles.channelScreenContainer}>
          {/* <ChannelHeader
            navigation={navigation}
            channel={channel}
            client={chatClient}
          /> */}
          <View style={styles.chatContainer}>
            {/* <Chat client={chatClient} style={streamChatTheme}> */}
              {/* <Channel channel={channel}> */}
                {/* <MessageList 
                  Input={InputBox}
                  Message={MessageEFast} 
                  DateSeparator={DateSeparator}
                />
                <MessageInput 
                 additionalTextInputProps={{
                   placeholderTextColor: '#979A9A',
                   placeholder:
                     channel && channel.data.name
                       ? 'Message #' +
                         channel.data.name.toLowerCase().replace(' ', '_')
                       : 'Message',
                 }}
                /> */}
              {/* </Channel> */}
            {/* </Chat> */}
          </View>
        </View>
      </SafeAreaView>
    );
    
  }