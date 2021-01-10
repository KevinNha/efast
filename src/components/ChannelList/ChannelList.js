import React, {useState, useEffect} from 'react';
import {useWatchedChannels} from './useWatchedChannels';

import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  SectionList,
} from 'react-native';
import {ChannelListItem} from '../ChannelListItem';


export const ChannelList = ({client, changeChannel}) => {
  const {
    activeChannelId,
    setActiveChannelId,
    unreadChannels,
    readChannels,
    oneOnOneConversations,
  } = useWatchedChannels(client, changeChannel);

  const renderChannelRow = (channel, isUnread) => {
    const isOneOnOneConversation =
      Object.keys(channel.state.members).length === 2;

    return (
      <ChannelListItem
        activeChannelId={activeChannelId}
        setActiveChannelId={setActiveChannelId}
        changeChannel={changeChannel}
        isOneOnOneConversation={isOneOnOneConversation}
        isUnread={isUnread}
        channel={channel}
        client={client}
        key={channel.id}
        currentUserId={client.user.id}
      />
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TextInput
            style={styles.inputSearchBox}
            placeholderTextColor="grey"
            placeholder="Jump to"
          />
        </View>

        <SectionList
          style={styles.sectionList}
          sections={[
            {
              title: 'Unread',
              id: 'unread',
              data: unreadChannels || [],
            },
            {
              title: 'Channels',
              data: readChannels || [],
            },
            {
              title: 'Direct Messages',
              data: oneOnOneConversations || [],
            },
          ]}
          keyExtractor={(item, index) => item.id + index}
          renderItem={({item, section}) => {
            return renderChannelRow(item, section.id === 'unread');
          }}
          renderSectionHeader={({section: {title}}) => (
            <View style={styles.groupTitleContainer}>
              <Text style={styles.groupTitle}>{title}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  headerContainer: {
    margin: 10,
    borderColor: '#D3D3D3',
    borderWidth: 0.5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  inputSearchBox: {
    padding: 10,
  },
  sectionList: {
    flexGrow: 1,
    flexShrink: 1,
  },
  groupTitleContainer: {
    paddingTop: 14,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  groupTitle: {
    fontSize: 14,
  },
  groupTitleRightButton: {
    textAlignVertical: 'center',
  },
  groupTitleRightButtonText: {
    fontSize: 25,
  },
  channelRow: {
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    marginRight: 5,
  },
  channelTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  channelTitle: {
    padding: 5,
    paddingLeft: 10,
  },
  channelTitlePrefix: {
    fontWeight: '300',
    padding: 1,
  },
});

