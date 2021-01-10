// import React, { useContext, useState, useEffect } from 'react'
// // import { View, Text, SafeAreaView, FlatList, Button } from 'react-native'
// import firebase from '../../firebase/config';
// import 'firebase/firestore';
// import {uuid} from '../../utils/constants';
// import { Store } from '../../context/store';
// import { LOADING_START, LOADING_STOP } from '../../context/actions/types';
// import { CreateChannel } from '../../network/channel';

// import {useWatchedChannels} from './useWatchedChannels';

// import {
//   View,
//   Text,
//   SafeAreaView,
//   TextInput,
//   StyleSheet,
//   SectionList,
// } from 'react-native';

// import {ChannelListItem} from '../ChannelListItem';


// export const ChannelList = ({client, changeChannel, navigation}) => {
//   const globalState = useContext(Store);
//   const {dispatchLoaderAction} = globalState;

//   const [allChannels, setAllChannels] = useState([]);

//   const onChannelPress = (cid, cname) => {
//       navigation.navigate("Chat", {
//           cid,
//           cname,
//           currentUserId: uuid,
//       })
//   }

//   const handleAddChannel = () => {
//       dispatchLoaderAction({
//           type: LOADING_START,
//       });
//       CreateChannel("newChannelName", uuid)
//           .then(() => {
//               dispatchLoaderAction({
//                   type: LOADING_STOP,
//               });
//               // navigation.replace("Dashboard");
//           })
//           .catch((err) => {
//               dispatchLoaderAction({
//                   type: LOADING_STOP,
//               });
//               alert(err);
//           });
//   }

//   useEffect(() => {
//     dispatchLoaderAction({
//         type: LOADING_START,
//     });
//     try {
//         firebase
//         .firestore()
//         .collection("channels")
//         .get()
//         .then((querySnapshot) => {
//             let channels = [];
//             querySnapshot.forEach((doc) => {
//                 if (doc.data().members) {
//                     // TODO - REMOVE THIS
//                     // if (doc.data().members.includes(uuid)) {
//                         channels.push({
//                             id: doc.id,
//                             name: doc.data().name,
//                             members: doc.data().members,
//                         })
//                     // }
//                 }
//             });
//             setAllChannels(channels);
//             dispatchLoaderAction({
//                 type: LOADING_STOP,
//             });
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }, [])
  
//   // const {
//   //   activeChannelId,
//   //   setActiveChannelId,
//   //   unreadChannels,
//   //   readChannels,
//   //   oneOnOneConversations,
//   // } = useWatchedChannels(client, changeChannel);

//   // const renderChannelRow = (channel, isUnread) => {
//   //   const isOneOnOneConversation =
//   //     Object.keys(channel.state.members).length === 2;

//     return (
//       <ChannelListItem
//         activeChannelId={activeChannelId}
//         setActiveChannelId={setActiveChannelId}
//         changeChannel={changeChannel}
//         isOneOnOneConversation={isOneOnOneConversation}
//         isUnread={isUnread}
//         channel={channel}
//         client={client}
//         key={channel.id}
//         currentUserId={client.user.id}
//       />
//     );
//   };

//   return (
//     <SafeAreaView>
//       <View style={styles.container}>
//         <View style={styles.headerContainer}>
//           <TextInput
//             style={styles.inputSearchBox}
//             placeholderTextColor="grey"
//             placeholder="Jump to"
//           />
//         </View>

//         <SectionList
//           style={styles.sectionList}
//           sections={[
//             {
//               title: 'Unread',
//               id: 'unread',
//               data: unreadChannels || [],
//             },
//             {
//               title: 'Channels',
//               data: readChannels || [],
//             },
//             {
//               title: 'Direct Messages',
//               data: oneOnOneConversations || [],
//             },
//           ]}
//           keyExtractor={(item, index) => item.id + index}
//           renderItem={({item, section}) => {
//             return renderChannelRow(item, section.id === 'unread');
//           }}
//           renderSectionHeader={({section: {title}}) => (
//             <View style={styles.groupTitleContainer}>
//               <Text style={styles.groupTitle}>{title}</Text>
//             </View>
//           )}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };


