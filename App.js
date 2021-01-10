import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
// import { StreamChat } from 'stream-chat';
import { StyleSheet, Text, SafeAreaView, View, Platform } from 'react-native';
import { ChannelList } from './src/components/ChannelList/ChannelList'
// import { MessageEFast } from './src/components/MessageEFast';
// import {DateSeparator} from './src/components/DateSeparator';
// import streamChatTheme from './src/components/stream-chat-theme';
import {InputBox} from './src/components/InputBox';

import ChannelListDrawer from './src/components/ChannelListDrawer';
import { ChannelHeader } from './src/components/ChannelHeader'


import { Login, SignUp, Dashboard, Splash, Chat } from './src/container';
import Loader from './src/components/Loader';
import { StoreProvider } from './src/context/store';

import fire from './src/firebase/config';

// import {
//   // Chat,
//   MessageList,
//   MessageInput,
//   Channel,
// } from 'stream-chat-react-native';

// function ChannelScreen({navigation, route}) {
//   const [channel, setChannel] = useState(null);
//   useEffect(() => {
//     if (!channel) {
//       navigation.openDrawer();
//     }
//     const channelId = route.params ? route.params.channelId : null;
//     const _channel = chatClient.channel('messaging', channelId);
//     setChannel(_channel);
    
//   }, [route.params]);

//   return (
//     <SafeAreaView style={styles.channelScreenSaveAreaView}>
//       <View style={styles.channelScreenContainer}>
//         <ChannelHeader
//           navigation={navigation}
//           channel={channel}
//           client={chatClient}
//         />
//         <View style={styles.chatContainer}>
//           <Chat client={chatClient} style={streamChatTheme}>
//             <Channel channel={channel}>
//               <MessageList 
//                 Input={InputBox}
//                 Message={MessageEFast} 
//                 DateSeparator={DateSeparator}
//               />
//               <MessageInput 
//                additionalTextInputProps={{
//                  placeholderTextColor: '#979A9A',
//                  placeholder:
//                    channel && channel.data.name
//                      ? 'Message #' +
//                        channel.data.name.toLowerCase().replace(' ', '_')
//                      : 'Message',
//                }}
//               />
//             </Channel>
//           </Chat>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// }


// //chatClient
// const chatClient = new StreamChat('q95x9hkbyd6p');
// const userToken = 
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidmlzaGFsIn0.LpDqH6U8V8Qg9sqGjz0bMQvOfWrWKAjPKqeODYM0Elk';
// const user = {
//   id: 'vishal',
//   name: 'Vishal',
// };

// chatClient.setUser(user, userToken);

// const ChannelListDrawer = (props) => {
//   return (
//     <ChannelList
//       client={chatClient}
//       changeChannel={channelId => {
//         props.navigation.jumpTo('ChannelScreen', {
//           channelId,
//         });
//       }}
//     />
//   );
// };

//Drawer
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


export default function App() {
  const [isLoggedIn, setIsloggedIn] = useState(true);
// fire.auth().onAuthStateChanged((user) => {
//   return user ? setIsloggedIn(true) : setIsloggedIn(false);
// });
// console.log("logged in ?", isLoggedIn);


  return (
    <StoreProvider>
    <View style={styles.container}>
      <NavigationContainer>
        {!isLoggedIn ? (
          <Stack.Navigator
            initialRouteName="Splash">
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Chat" component={Chat} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator
            initialRouteName="Splash">
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Chat" component={Chat} />
          </Stack.Navigator>
        //   <View style={styles.container}>
        //   <Drawer.Navigator
        //     drawerContent={ChannelListDrawer}
        //     drawerStyle={styles.drawerNavigator}>
        //     <Drawer.Screen name="ChannelScreen" component={ChannelScreen} />
        //   </Drawer.Navigator>
        // </View>
        )}
      </NavigationContainer>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* <StatusBar style="auto" /> */}
    </View>
    <Loader />
    </StoreProvider>

  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
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
  channelScreenContainer: {flexDirection: 'column', height: '100%'},
  chatContainer: {
    backgroundColor: 'white',
    flexGrow: 1,
    flexShrink: 1,
  },
});