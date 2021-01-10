import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';

import iconProfile from '../../assets/profile.png'

function ChannelHeader({ navigation, channel, client }) {
  let channelTitle = '#channel-name';

  if (channel && channel.data && channel.data.name) {
    channelTitle = '# ' + channel.data.name.toLowerCase().replace(' ', '-');
  }

  const memberIds = (channel && channel.state) ? Object.keys(channel.state.members) : [];

  // Is it DM?
  if (channel && memberIds.length === 2) {
    const otherUserId = (memberIds[0] === client.user.id ? memberIds[1] : memberIds[0]);

    channelTitle = channel.state.members[otherUserId].user.name;
  }

  return (
    <View stlye={styles.container}>
      <View style={styles.leftContent}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Text style={styles.hamburgerIcon}>☰</Text>    
        </TouchableOpacity>
        <Text style={styles.channelTitle}>{ channelTitle } </Text>
      </View>

      <View style={styles.rightCotent}>
        <TouchableOpacity style={styles.profileIconContainer}>
          <Image source= { iconProfile } style={styles.profileIcon} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export const styles = StyleSheet.create({
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
  hamburgerIcon: {
    fontSize: 27,
  },
  channelTitle: {
    color: 'black',
    marginLeft: 10,
    fontWeight: '900',
    fontSize: 17,
  },
  rightContent: {
    flexDirection: 'row',
    marginRight: 10,
  },
  profileIconContainer: {marginRight: 15, alignSelf: 'center'},
  profileIcon: {
    height: 18,
    width: 18,
  },
});

export default ChannelHeader