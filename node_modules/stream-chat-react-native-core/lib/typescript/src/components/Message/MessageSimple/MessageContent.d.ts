import React from 'react';
import { MessageRepliesProps } from './MessageReplies';
import { Alignment, GroupType } from '../../../contexts/messagesContext/MessagesContext';
import type { MessageSimpleProps } from './MessageSimple';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../../types/types';
export declare type ForwardedMessageProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = MessageSimpleProps<At, Ch, Co, Ev, Me, Re, Us> & {
    /**
     * Position of the message, either 'right' or 'left'
     */
    alignment: Alignment;
    /**
     * Whether or not the app is using a custom MessageContent component
     */
    customMessageContent: boolean;
    /**
     * Position of message in group - top, bottom, middle, single.
     *
     * Message group is a group of consecutive messages from same user. groupStyles can be used to style message as per their position in message group
     * e.g., user avatar (to which message belongs to) is only showed for last (bottom) message in group.
     */
    groupStyles: GroupType[];
    disabled?: boolean;
    /**
     * Custom message footer component
     */
    MessageFooter?: React.ComponentType<UnknownType & {
        testID: string;
    }>;
    /**
     * Custom message header component
     */
    MessageHeader?: React.ComponentType<UnknownType & {
        testID: string;
    }>;
    /**
     * Custom message replies component
     * Defaults to: https://github.com/GetStream/stream-chat-react-native/blob/master/src/components/MessageSimple/MessageReplies.tsx
     */
    MessageReplies?: React.ComponentType<MessageRepliesProps<At, Ch, Co, Ev, Me, Re, Us>>;
    textBeforeAttachments?: boolean;
};
/**
 * Child of MessageSimple that displays a message's content
 */
export declare const MessageContent: <At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>(props: ForwardedMessageProps<At, Ch, Co, Ev, Me, Re, Us>) => JSX.Element;
