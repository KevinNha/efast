import React from 'react';
import { MessageSimpleProps } from './MessageSimple/MessageSimple';
import { ChannelContextValue } from '../../contexts/channelContext/ChannelContext';
import { ChatContextValue } from '../../contexts/chatContext/ChatContext';
import { KeyboardContextValue } from '../../contexts/keyboardContext/KeyboardContext';
import { GroupType, MessagesContextValue } from '../../contexts/messagesContext/MessagesContext';
import type { UserResponse } from 'stream-chat';
import type { ActionSheetStyles } from './MessageSimple/MessageActionSheet';
import type { FileIconProps } from '../Attachment/FileIcon';
import type { Message as InsertDatesMessage } from '../MessageList/utils/insertDates';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
export declare type ActionProps = {
    reactionsEnabled?: boolean;
    repliesEnabled?: boolean;
};
export declare type MessagePropsWithContext<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = MessageProps<At, Ch, Co, Ev, Me, Re, Us> & {
    channel: ChannelContextValue<At, Ch, Co, Ev, Me, Re, Us>['channel'];
    client: ChatContextValue<At, Ch, Co, Ev, Me, Re, Us>['client'];
    disabled: ChannelContextValue<At, Ch, Co, Ev, Me, Re, Us>['disabled'];
    dismissKeyboard: KeyboardContextValue['dismissKeyboard'];
    emojiData: MessagesContextValue<At, Ch, Co, Ev, Me, Re, Us>['emojiData'];
    removeMessage: MessagesContextValue<At, Ch, Co, Ev, Me, Re, Us>['removeMessage'];
    retrySendMessage: MessagesContextValue<At, Ch, Co, Ev, Me, Re, Us>['retrySendMessage'];
    setEditingState: MessagesContextValue<At, Ch, Co, Ev, Me, Re, Us>['setEditingState'];
    updateMessage: MessagesContextValue<At, Ch, Co, Ev, Me, Re, Us>['updateMessage'];
};
export declare type MessageProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = {
    /**
     * Position of message in group - top, bottom, middle, single.
     *
     * Message group is a group of consecutive messages from same user. groupStyles can be used to style message as per their position in message group
     * e.g., user avatar (to which message belongs to) is only showed for last (bottom) message in group.
     */
    groupStyles: GroupType[];
    /**
     * Current [message object](https://getstream.io/chat/docs/#message_format)
     */
    message: InsertDatesMessage<At, Ch, Co, Ev, Me, Re, Us>;
    /**
     * Style object for action sheet (used to message actions).
     * Supported styles: https://github.com/beefe/react-native-actionsheet/blob/master/lib/styles.js
     */
    actionSheetStyles?: ActionSheetStyles;
    /**
     * Custom UI component for attachment icon for type 'file' attachment.
     * Defaults to: https://github.com/GetStream/stream-chat-react-native/blob/master/src/components/Attachment/FileIcon.tsx
     */
    AttachmentFileIcon?: React.ComponentType<FileIconProps>;
    /** Should keyboard be dismissed when messaged is touched */
    dismissKeyboardOnMessageTouch?: boolean;
    /**
     * Latest message id on current channel
     */
    lastReceivedId?: string;
    /**
     * Custom UI component to display a message in MessageList component
     * Default component (accepts the same props): [MessageSimple](https://getstream.github.io/stream-chat-react-native/#messagesimple)
     * */
    Message?: React.ComponentType<MessageSimpleProps<At, Ch, Co, Ev, Me, Re, Us>>;
    /**
     * Custom message actions to display on open of the action sheet
     */
    messageActions?: boolean | string[];
    /**
     * Handler to open the thread on message. This is callback for touch event for replies button.
     *
     * @param message A message object to open the thread upon.
     */
    onThreadSelect?: (message: InsertDatesMessage<At, Ch, Co, Ev, Me, Re, Us>) => void;
    /**
     * A list of users that have read this message
     **/
    readBy?: UserResponse<Us>[];
    /**
     * Whether or not the MessageList is part of a Thread
     */
    threadList?: boolean;
};
/**
 * Message - A high level component which implements all the logic required for a message.
 * The actual rendering of the message is delegated via the "Message" property
 *
 * @example ./Message.md
 */
export declare const Message: <At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>(props: MessageProps<At, Ch, Co, Ev, Me, Re, Us>) => JSX.Element;
