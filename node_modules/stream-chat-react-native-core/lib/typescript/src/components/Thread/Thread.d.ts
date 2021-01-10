import React from 'react';
import { MessageInputProps } from '../MessageInput/MessageInput';
import { MessageListProps } from '../MessageList/MessageList';
import type { MessageSimpleProps } from '../Message/MessageSimple/MessageSimple';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
export declare type ThreadProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = {
    /**
     * Additional props for underlying MessageInput component.
     * Available props - https://getstream.github.io/stream-chat-react-native/#messageinput
     * */
    additionalMessageInputProps?: Partial<MessageInputProps<At, Ch, Co, Ev, Me, Re, Us>>;
    /**
     * Additional props for underlying MessageList component.
     * Available props - https://getstream.github.io/stream-chat-react-native/#messagelist
     * */
    additionalMessageListProps?: Partial<MessageListProps<At, Ch, Co, Ev, Me, Re, Us>>;
    /**
     * Additional props for underlying Message component of parent message at the top.
     * Available props - https://getstream.github.io/stream-chat-react-native/#message
     * */
    additionalParentMessageProps?: Partial<MessageSimpleProps<At, Ch, Co, Ev, Me, Re, Us>>;
    /** Make input focus on mounting thread */
    autoFocus?: boolean;
    /** Disables the thread UI. So MessageInput and MessageList will be disabled. */
    disabled?: boolean;
    /**
     * Custom UI component to display a message in MessageList component
     * Default component (accepts the same props): [MessageSimple](https://getstream.github.io/stream-chat-react-native/#messagesimple)
     * */
    Message?: React.ComponentType<MessageSimpleProps<At, Ch, Co, Ev, Me, Re, Us>>;
    /**
     * **Customized MessageInput component to used within Thread instead of default MessageInput
     * **Available from [MessageInput](https://getstream.github.io/stream-chat-react-native/#messageinput)**
     */
    MessageInput?: React.ComponentType<MessageInputProps<At, Ch, Co, Ev, Me, Re, Us>>;
    /**
     * **Customized MessageList component to used within Thread instead of default MessageList
     * **Available from [MessageList](https://getstream.github.io/stream-chat-react-native/#messagelist)**
     * */
    MessageList?: React.ComponentType<MessageListProps<At, Ch, Co, Ev, Me, Re, Us>>;
};
/**
 * Thread - The Thread renders a parent message with a list of replies. Use the standard message list of the main channel's messages.
 * The thread is only used for the list of replies to a message.
 *
 * Thread is a consumer of [channel context](https://getstream.github.io/stream-chat-react-native/#channelcontext)
 * Underlying MessageList, MessageInput and Message components can be customized using props:
 * - additionalParentMessageProps
 * - additionalMessageListProps
 * - additionalMessageInputProps
 *
 * @example ./Thread.md
 */
export declare const Thread: <At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>(props: ThreadProps<At, Ch, Co, Ev, Me, Re, Us>) => JSX.Element | null;
