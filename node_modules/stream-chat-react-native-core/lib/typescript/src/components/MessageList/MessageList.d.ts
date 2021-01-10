import React from 'react';
import { FlatList, FlatListProps, ScrollViewProps } from 'react-native';
import { DateSeparatorProps } from './DateSeparator';
import { MessageNotificationProps } from './MessageNotification';
import { MessageSystemProps } from './MessageSystem';
import { TypingIndicatorProps } from './TypingIndicator';
import { MessageOrDate } from './utils/insertDates';
import { ThreadContextValue } from '../../contexts/threadContext/ThreadContext';
import type { FileIconProps } from '../Attachment/FileIcon';
import type { ActionSheetStyles } from '../Message/MessageSimple/MessageActionSheet';
import type { MessageSimpleProps } from '../Message/MessageSimple/MessageSimple';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
export declare type MessageListProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = {
    /**
     * Style object for action sheet (used to message actions).
     * Supported styles: https://github.com/beefe/react-native-actionsheet/blob/master/lib/styles.js
     */
    actionSheetStyles?: ActionSheetStyles;
    /**
     * Besides existing (default) UX behavior of underlying FlatList of MessageList component, if you want
     * to attach some additional props to underlying FlatList, you can add it to following prop.
     *
     * You can find list of all the available FlatList props here - https://facebook.github.io/react-native/docs/flatlist#props
     *
     * **NOTE** Don't use `additionalFlatListProps` to get access to ref of flatlist. Use `setFlatListRef` instead.
     *
     * e.g.
     * ```js
     * <MessageList
     *  additionalFlatListProps={{ bounces: true, keyboardDismissMode: true }} />
     * ```
     */
    additionalFlatListProps?: Partial<FlatListProps<MessageOrDate<At, Ch, Co, Ev, Me, Re, Us>>>;
    /**
     * Custom UI component for attachment icon for type 'file' attachment.
     * Defaults to: https://github.com/GetStream/stream-chat-react-native/blob/master/src/components/Attachment/FileIcon.tsx
     */
    AttachmentFileIcon?: React.ComponentType<FileIconProps>;
    /**
     * Date separator UI component to render
     *
     * Defaults to and accepts same props as: [DateSeparator](https://getstream.github.io/stream-chat-react-native/#dateseparator)
     */
    DateSeparator?: React.ComponentType<DateSeparatorProps<At, Ch, Co, Ev, Me, Re, Us>>;
    disableWhileEditing?: boolean;
    /** Should keyboard be dismissed when messaged is touched */
    dismissKeyboardOnMessageTouch?: boolean;
    /**
     * UI component for header of message list. By default message list doesn't have any header.
     * This is basically a [ListFooterComponent](https://facebook.github.io/react-native/docs/flatlist#listheadercomponent) of FlatList
     * used in MessageList. Its footer instead of header, since message list is inverted.
     *
     */
    FooterComponent?: React.ReactElement;
    HeaderComponent?: React.ReactElement;
    /** Whether or not the FlatList is inverted. Defaults to true */
    inverted?: boolean;
    /**
     * Custom UI component to display a message in MessageList component
     * Default component (accepts the same props): [MessageSimple](https://getstream.github.io/stream-chat-react-native/#messagesimple)
     */
    Message?: React.ComponentType<MessageSimpleProps<At, Ch, Co, Ev, Me, Re, Us>>;
    /**
     * Array of allowed actions on message. e.g. ['edit', 'delete', 'reactions', 'reply']
     * If all the actions need to be disabled, empty array or false should be provided as value of prop.
     */
    messageActions?: boolean | string[];
    MessageNotification?: React.ComponentType<MessageNotificationProps>;
    /**
     * Custom UI component to display a system message
     * Default component (accepts the same props): [MessageSystem](https://getstream.github.io/stream-chat-react-native/#messagesystem)
     */
    MessageSystem?: React.ComponentType<MessageSystemProps<At, Ch, Co, Ev, Me, Re, Us>>;
    /**
     * Custom UI component to render network down indicator
     *
     * Defaults to and accepts same props as: [NetworkDownIndicator](https://getstream.github.io/stream-chat-react-native/#NetworkDownIndicator)
     */
    NetworkDownIndicator?: React.ComponentType;
    /** Turn off grouping of messages by user */
    noGroupByUser?: boolean;
    onListScroll?: ScrollViewProps['onScroll'];
    /**
     * Handler to open the thread on message. This is callback for touch event for replies button.
     *
     * @param message A message object to open the thread upon.
     */
    onThreadSelect?: (message: ThreadContextValue<At, Ch, Co, Ev, Me, Re, Us>['thread']) => void;
    /**
     * Use `setFlatListRef` to get access to ref to inner FlatList.
     *
     * e.g.
     * ```js
     * <MessageList
     *  setFlatListRef={(ref) => {
     *    // Use ref for your own good
     *  }}
     * ```
     */
    setFlatListRef?: (ref: FlatList<MessageOrDate<At, Ch, Co, Ev, Me, Re, Us>> | null) => void;
    /** Whether or not the MessageList is part of a Thread */
    threadList?: boolean;
    /**
     * Typing indicator UI component to render
     *
     * Defaults to and accepts same props as: [TypingIndicator](https://getstream.github.io/stream-chat-react-native/#typingindicator)
     */
    TypingIndicator?: React.ComponentType<TypingIndicatorProps>;
};
/**
 * The message list component renders a list of messages. It consumes the following contexts:
 *
 * [ChannelContext](https://getstream.github.io/stream-chat-react-native/#channelcontext)
 * [ChatContext](https://getstream.github.io/stream-chat-react-native/#chatcontext)
 * [MessagesContext](https://getstream.github.io/stream-chat-react-native/#messagescontext)
 * [ThreadContext](https://getstream.github.io/stream-chat-react-native/#threadcontext)
 * [TranslationContext](https://getstream.github.io/stream-chat-react-native/#translationcontext)
 *
 * @example ./MessageList.md
 */
export declare const MessageList: <At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>(props: MessageListProps<At, Ch, Co, Ev, Me, Re, Us>) => JSX.Element;
