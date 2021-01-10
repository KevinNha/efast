import React, { PropsWithChildren } from 'react';
import { KeyboardAvoidingViewProps } from 'react-native';
import { Channel as ChannelType, SendMessageAPIResponse, StreamChat, Message as StreamMessage, UpdatedMessage } from 'stream-chat';
import { ChannelContextValue } from '../../contexts/channelContext/ChannelContext';
import { MessagesContextValue } from '../../contexts/messagesContext/MessagesContext';
import { ThreadContextValue } from '../../contexts/threadContext/ThreadContext';
import type { LoadingErrorProps } from '../Indicators/LoadingErrorIndicator';
import type { LoadingProps } from '../Indicators/LoadingIndicator';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
export declare type ChannelProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = {
    /**
     * The currently active channel
     */
    channel: ChannelContextValue<At, Ch, Co, Ev, Me, Re, Us>['channel'];
    /**
     * Additional props passed to keyboard avoiding view
     */
    additionalKeyboardAvoidingViewProps?: Partial<KeyboardAvoidingViewProps>;
    /**
     * Custom UI component to display attachments on individual messages
     * Default component (accepts the same props): [Attachment](https://getstream.github.io/stream-chat-react-native/#attachment)
     */
    Attachment?: MessagesContextValue<At, Ch, Co, Ev, Me, Re, Us>['Attachment'];
    /**
     * Disables the channel UI if the channel is frozen
     */
    disableIfFrozenChannel?: boolean;
    /**
     * When true, disables the KeyboardCompatibleView wrapper
     *
     * Channel internally uses the [KeyboardCompatibleView](https://github.com/GetStream/stream-chat-react-native/blob/master/src/components/KeyboardCompatibleView/KeyboardCompatibleView.tsx)
     * component to adjust the height of Channel when the keyboard is opened or dismissed. This prop provides the ability to disable this functionality in case you
     * want to use [KeyboardAvoidingView](https://facebook.github.io/react-native/docs/keyboardavoidingview) or handle dismissal yourself.
     * KeyboardAvoidingView works well when your component occupies 100% of screen height, otherwise it may raise some issues.
     */
    disableKeyboardCompatibleView?: boolean;
    /**
     * Overrides the Stream default mark channel read request (Advanced usage only)
     * @param channel Channel object
     */
    doMarkReadRequest?: (channel: ChannelType<At, Ch, Co, Ev, Me, Re, Us>) => void;
    /**
     * Overrides the Stream default send message request (Advanced usage only)
     * @param channelId
     * @param messageData Message object
     */
    doSendMessageRequest?: (channelId: string, messageData: StreamMessage<At, Me, Us>) => Promise<SendMessageAPIResponse<At, Ch, Co, Me, Re, Us>>;
    /**
     * Overrides the Stream default update message request (Advanced usage only)
     * @param channelId
     * @param updatedMessage UpdatedMessage object
     */
    doUpdateMessageRequest?: (channelId: string, updatedMessage: UpdatedMessage<At, Ch, Co, Me, Re, Us>) => ReturnType<StreamChat<At, Ch, Co, Ev, Me, Re, Us>['updateMessage']>;
    emojiData?: MessagesContextValue<At, Ch, Co, Ev, Me, Re, Us>['emojiData'];
    /**
     * Custom empty state indicator to override the Stream default
     */
    EmptyStateIndicator?: ChannelContextValue<At, Ch, Co, Ev, Me, Re, Us>['EmptyStateIndicator'];
    keyboardBehavior?: KeyboardAvoidingViewProps['behavior'];
    /**
     * Custom wrapper component that handles height adjustment of Channel component when keyboard is opened or dismissed
     * Default component (accepts the same props): [KeyboardCompatibleView](https://github.com/GetStream/stream-chat-react-native/blob/master/src/components/KeyboardCompatibleView/KeyboardCompatibleView.tsx)
     *
     * **Example:**
     *
     * ```
     * <Channel
     *  channel={channel}
     *  KeyboardCompatibleView={(props) => {
     *    return (
     *      <KeyboardCompatibleView>
     *        {props.children}
     *      </KeyboardCompatibleView>
     *    )
     *  }}
     * />
     * ```
     */
    KeyboardCompatibleView?: React.ComponentType<KeyboardAvoidingViewProps>;
    keyboardVerticalOffset?: number;
    /**
     * Custom loading error indicator to override the Stream default
     */
    LoadingErrorIndicator?: React.ComponentType<LoadingErrorProps>;
    /**
     * Custom loading indicator to override the Stream default
     */
    LoadingIndicator?: React.ComponentType<LoadingProps>;
    /**
     * Custom UI component to display a message in MessageList component
     * Default component (accepts the same props): [MessageSimple](https://getstream.github.io/stream-chat-react-native/#messagesimple)
     */
    Message?: MessagesContextValue<At, Ch, Co, Ev, Me, Re, Us>['Message'];
    thread?: ThreadContextValue<At, Ch, Co, Ev, Me, Re, Us>['thread'];
};
/**
 *
 * The wrapper component for a chat channel. Channel needs to be placed inside a Chat component
 * to receive the StreamChat client instance. MessageList, Thread, and MessageInput must be
 * children of the Channel component to receive the ChannelContext.
 *
 * @example ./Channel.md
 */
export declare const Channel: <At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>(props: React.PropsWithChildren<ChannelProps<At, Ch, Co, Ev, Me, Re, Us>>) => JSX.Element;
