import React from 'react';
import {ReactionPickerWrapper} from 'stream-chat-react-native';
import {StyleSheet, Image, View, TouchableOpacity, Text} from 'react-native';
import iconEmoticon from '../../assets/iconEmoticon.png';

export const MessageFooter = props => {
  return (
    <View style={styles.reactionListContainer}>
      {props.message.latest_reaction &&
        props.message.latest_reaction.length > 0 &&
        renderReactions(
          props.message.latest_reaction,
          props.supportedReactions,
          props.message.reaction_counts,
          props.handleReaction,
        )}
      <ReactionPickerWrapper
        {...props}
        offset={{
          left: -70,
          top: 10,
        }}>
        {props.message.latest_reaction &&
          props.message.latest_reaction.length > 0 && (
            <View style={styles.reacationPickerContainer}>
              <Image source={iconEmoticon} style={styles.reactionPickerIcon} />
            </View>
          )}
        </ReactionPickerWrapper>
    </View>
  )
}

export const renderReactions = (
  reactions,
  supportedReactions,
  reactionCounts,
  handleReaction,
) => {
  const reactionsByType = {};
  reactions && 
    reactions.forEach(item => {
      if (reactions[item.type] === undefined) {
        return (reactionsByType[item.type] = [item]);
      } else {
        return (reactionsByType[item.type] = [item] = [
          ...reactionsByType[item.type],
          item,
        ])
      }
    })

    const emojiDataByType = {};
    supportedReactions.forEach(e => (emojiDataByType[e.id] = e));

    const reactionTypes = supportedReactions.map(e => e.id);
    return Object.keys(reactionsByType).map((type, index) => 
      reactionTypes.indexOf(type) > -1 ? (
        <ReactionItem
          key={index}
          type={type}
          handleReaction={handleReaction}
          reactionCounts={reactionCounts}
          emojiDataByType={emojiDataByType}
        />
      ) : null,
    );
}

const ReactionItem = ({
  type,
  handleReaction,
  reactionCounts,
  emojiDataByType,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        handleReaction(type);
      }}
      key={type}
      style={styles.reactionItemContainer}>
      <Text style={styles.reactionItem}>
        {emojiDataByType[type].icon} {reactionCounts[type]}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  reactionListContainer: {
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 10,
  },
  reactionItemContainer: {
    borderColor: '#0064c2',
    borderWidth: 1,
    padding: 4,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 10,
    backgroundColor: '#d6ebff',
    marginRight: 5,
  },
  reactionItem: {
    color: '#0064c2',
    fontSize: 14,
  },
  reactionPickerContainer: {
    padding: 4,
    borderRadius: 10,
    backgroundColor: '#F0F0F0',
  },
  reactionPickerIcon: {
    width: 19,
    height: 19,
  },
});