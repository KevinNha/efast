import React from 'react';
import { ActionSheetCustom as ActionSheet } from 'react-native-actionsheet';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';
import type { Message as InsertDatesMessage } from '../../MessageList/utils/insertDates';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../../types/types';
import type { Reaction } from 'src/components/Reaction/ReactionList';
export declare type ActionSheetStyles = {
    body?: StyleProp<ViewStyle>;
    buttonBox?: StyleProp<ViewStyle>;
    buttonText?: StyleProp<TextStyle>;
    cancelButtonBox?: StyleProp<ViewStyle>;
    messageBox?: StyleProp<ViewStyle>;
    messageText?: StyleProp<TextStyle>;
    overlay?: StyleProp<TextStyle>;
    titleBox?: StyleProp<ViewStyle>;
    titleText?: StyleProp<TextStyle>;
    wrapper?: StyleProp<ViewStyle>;
};
export declare type MessageActionSheetProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = {
    /**
     * Handler to delete a current message
     */
    handleDelete: () => Promise<void>;
    /**
     * Handler to edit a current message. This function sets the current message as the `editing` property of channel context.
     * The `editing` prop is used by the MessageInput component to switch to edit mode.
     */
    handleEdit: () => void;
    handleReaction: (reactionType: string) => Promise<void>;
    message: InsertDatesMessage<At, Ch, Co, Ev, Me, Re, Us>;
    /**
     * Function that opens the reaction picker
     */
    openReactionPicker: () => Promise<void>;
    /**
     * Function that opens a thread and gives the option to add a reply on a message
     */
    openThread: () => void;
    /**
     * Whether or not message reactions are enabled
     */
    reactionsEnabled: boolean;
    /**
     * The action sheet ref declared in MessageContent. To access the ref, ensure the ActionSheet custom
     * component is wrapped in `React.forwardRef`.
     */
    ref: React.MutableRefObject<ActionSheet | undefined>;
    /**
     * Whether or not message replies are enabled
     */
    repliesEnabled: boolean;
    /**
     * React useState hook setter function that toggles action sheet visibility
     */
    setActionSheetVisible: React.Dispatch<React.SetStateAction<boolean>>;
    supportedReactions: Reaction[];
    /**
     * Style object for action sheet (used to style message actions)
     * Supported styles: https://github.com/beefe/react-native-actionsheet/blob/master/lib/styles.js
     */
    actionSheetStyles?: ActionSheetStyles;
    /**
     * Function that returns a boolean indicating whether or not the user can delete the message.
     */
    canDeleteMessage?: () => boolean | undefined;
    /**
     * Function that returns a boolean indicating whether or not the user can edit the message.
     */
    canEditMessage?: () => boolean | undefined;
    /**
     * Array of allowed actions on message. e.g. ['edit', 'delete', 'reactions', 'reply']
     * If all the actions need to be disabled, empty array or false should be provided as value of prop.
     */
    messageActions?: boolean | string[];
    /**
     * Whether or not the MessageList is part of a Thread
     */
    threadList?: boolean;
};
export declare const MessageActionSheet: React.ForwardRefExoticComponent<Pick<MessageActionSheetProps<DefaultAttachmentType, DefaultChannelType, string & {}, Record<string, unknown>, Record<string, unknown>, Record<string, unknown>, DefaultUserType>, "message" | "openThread" | "supportedReactions" | "handleDelete" | "handleEdit" | "handleReaction" | "openReactionPicker" | "reactionsEnabled" | "repliesEnabled" | "setActionSheetVisible" | "actionSheetStyles" | "canDeleteMessage" | "canEditMessage" | "messageActions" | "threadList"> & React.RefAttributes<unknown>>;
