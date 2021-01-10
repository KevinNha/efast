import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { StyleSheet, Text, SafeAreaView, View, Platform } from 'react-native';

import ChannelListDrawer from './src/components/ChannelListDrawer';
import ChannelHeader from './src/components/ChannelHeader'


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
          client={null}
        />
      </Text>
    </SafeAreaView>
  )
}


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <View style={styles.drawerContainer}>
          <Drawer.Navigator
            drawerContent={ChannelListDrawer}
            drawerStyle={styles.drawerNavigator}>
            <Drawer.Screen name="ChannelScreen" component={ChannelScreen} />
          </Drawer.Navigator>
          {/* <Chat.Navigator> 
            <Chat.Screen name="Chat" component={Chat}/>
          </Chat.Navigator> */}
          {/* <ChatScreen/> */}
        </View>
      </NavigationContainer>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  drawerContainer: {
    flex: 1,
  },
  drawerNavigator: {
    backgroundColor: 'black',
    width: 350,
    color: 'white',
  },
  channelScreenSaveAreaView: {
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
  channelScreenContainer: {flexDirection: 'column', height: '100%'}
})