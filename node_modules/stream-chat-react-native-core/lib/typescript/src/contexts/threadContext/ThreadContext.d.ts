import React, { PropsWithChildren } from 'react';
import type { ChannelState } from 'stream-chat';
import type { MessageWithDates } from '../messagesContext/MessagesContext';
import type { Message } from '../../components/MessageList/utils/insertDates';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
export declare type ThreadContextValue<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = {
    closeThread: () => void;
    loadMoreThread: () => Promise<void>;
    openThread: (message: Message<At, Ch, Co, Ev, Me, Re, Us>) => void;
    thread: ReturnType<ChannelState<At, Ch, Co, Ev, Me, Re, Us>['messageToImmutable']> | MessageWithDates<At, Ch, Co, Me, Re, Us> | null;
    threadHasMore: boolean;
    threadLoadingMore: boolean;
    threadMessages: ChannelState<At, Ch, Co, Ev, Me, Re, Us>['threads'][string];
};
export declare const ThreadContext: React.Context<ThreadContextValue<DefaultAttachmentType, DefaultChannelType, string & {}, Record<string, unknown>, Record<string, unknown>, Record<string, unknown>, DefaultUserType>>;
export declare const ThreadProvider: <At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>({ children, value, }: React.PropsWithChildren<{
    value: ThreadContextValue<At, Ch, Co, Ev, Me, Re, Us>;
}>) => JSX.Element;
export declare const useThreadContext: <At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>() => ThreadContextValue<At, Ch, Co, Ev, Me, Re, Us>;
/**
 * Typescript currently does not support partial inference so if MessageContentContext
 * typing is desired while using the HOC withMessageContentContextContext the Props for the
 * wrapped component must be provided as the first generic.
 */
export declare const withThreadContext: <P extends Record<string, unknown>, At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>(Component: React.ComponentType<P>) => React.FC<Pick<P, Exclude<keyof P, "thread" | "closeThread" | "loadMoreThread" | "openThread" | "threadHasMore" | "threadLoadingMore" | "threadMessages">>>;
