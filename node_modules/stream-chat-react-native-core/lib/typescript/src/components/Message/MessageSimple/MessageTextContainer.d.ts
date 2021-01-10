import React from 'react';
import type { MessageSimpleProps } from './MessageSimple';
import type { RenderTextParams } from './utils/renderText';
import type { Alignment, GroupType } from '../../../contexts/messagesContext/MessagesContext';
import type { Message as MessageType } from '../../../components/MessageList/utils/insertDates';
import type { Theme } from '../../../styles/themeConstants';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../../types/types';
export declare type MessageTextProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = MessageTextContainerProps<At, Ch, Co, Ev, Me, Re, Us> & {
    renderText: (params: RenderTextParams<At, Ch, Co, Ev, Me, Re, Us>) => JSX.Element | null;
    theme: Theme;
};
export declare type MessageTextContainerProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = {
    /**
     * Position of the message, either 'right' or 'left'
     */
    alignment: Alignment;
    /**
     * Whether or not the message has failed
     */
    disabled: boolean;
    /**
     * Position of message in group - top, bottom, middle, single.
     *
     * Message group is a group of consecutive messages from same user. groupStyles can be used to style message as per their position in message group
     * e.g., user avatar (to which message belongs to) is only showed for last (bottom) message in group.
     */
    groupStyles: GroupType[];
    /** Handler to process a reaction */
    handleReaction: (reactionType: string) => Promise<void>;
    /**
     * Returns true if message belongs to current user, else false
     */
    isMyMessage: (message: MessageType<At, Ch, Co, Ev, Me, Re, Us>) => boolean;
    /**
     * Current [message object](https://getstream.io/chat/docs/#message_format)
     */
    message: MessageType<At, Ch, Co, Ev, Me, Re, Us>;
    /**
     * Handler to open and navigate into a message thread
     */
    openThread: () => void;
    /** Object specifying rules defined within simple-markdown https://github.com/Khan/simple-markdown#adding-a-simple-extension */
    markdownRules?: UnknownType;
    /**
     * Custom UI component to display a message in MessageList component
     * Default component (accepts the same props): [MessageSimple](https://getstream.github.io/stream-chat-react-native/#messagesimple)
     * */
    Message?: React.ComponentType<MessageSimpleProps<At, Ch, Co, Ev, Me, Re, Us>>;
    /**
     * Custom UI component for message text
     */
    MessageText?: React.ComponentType<MessageTextProps<At, Ch, Co, Ev, Me, Re, Us>>;
};
export declare const MessageTextContainer: <At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>(props: MessageTextContainerProps<At, Ch, Co, Ev, Me, Re, Us>) => JSX.Element | null;
