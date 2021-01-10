import React, { PropsWithChildren } from 'react';
import type { Channel, StreamChat } from 'stream-chat';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
export declare type ChatContextValue<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = {
    client: StreamChat<At, Ch, Co, Ev, Me, Re, Us>;
    connectionRecovering: boolean;
    isOnline: boolean;
    logger: (message?: string | undefined) => void;
    setActiveChannel: (newChannel?: Channel<At, Ch, Co, Ev, Me, Re, Us>) => void;
    channel?: Channel<At, Ch, Co, Ev, Me, Re, Us>;
};
export declare const ChatContext: React.Context<ChatContextValue<DefaultAttachmentType, DefaultChannelType, string & {}, Record<string, unknown>, Record<string, unknown>, Record<string, unknown>, DefaultUserType>>;
export declare const ChatProvider: <At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>({ children, value, }: React.PropsWithChildren<{
    value: ChatContextValue<At, Ch, Co, Ev, Me, Re, Us>;
}>) => JSX.Element;
export declare const useChatContext: <At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>() => ChatContextValue<At, Ch, Co, Ev, Me, Re, Us>;
/**
 * Typescript currently does not support partial inference so if ChatContext
 * typing is desired while using the HOC withChatContext the Props for the
 * wrapped component must be provided as the first generic.
 */
export declare const withChatContext: <P extends Record<string, unknown>, At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>(Component: React.ComponentType<P>) => React.FC<Pick<P, Exclude<keyof P, "channel" | "client" | "connectionRecovering" | "isOnline" | "logger" | "setActiveChannel">>>;
