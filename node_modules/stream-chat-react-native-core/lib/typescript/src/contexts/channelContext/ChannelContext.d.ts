import React, { PropsWithChildren } from 'react';
import type { Channel, ChannelState, Event } from 'stream-chat';
import type { EmptyStateProps } from '../../components/Indicators/EmptyStateIndicator';
import type { LoadingProps } from '../../components/Indicators/LoadingIndicator';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
export declare type ChannelContextValue<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = {
    EmptyStateIndicator: React.ComponentType<EmptyStateProps>;
    error: boolean;
    eventHistory: {
        [key: string]: Event<At, Ch, Co, Ev, Me, Re, Us>[];
    };
    loading: boolean;
    LoadingIndicator: React.ComponentType<LoadingProps>;
    markRead: () => void;
    members: ChannelState<At, Ch, Co, Ev, Me, Re, Us>['members'];
    read: ChannelState<At, Ch, Co, Ev, Me, Re, Us>['read'];
    setLastRead: React.Dispatch<React.SetStateAction<Date | undefined>>;
    typing: ChannelState<At, Ch, Co, Ev, Me, Re, Us>['typing'];
    watchers: ChannelState<At, Ch, Co, Ev, Me, Re, Us>['watchers'];
    channel?: Channel<At, Ch, Co, Ev, Me, Re, Us>;
    disabled?: boolean;
    lastRead?: Date;
    watcherCount?: ChannelState<At, Ch, Co, Ev, Me, Re, Us>['watcher_count'];
};
export declare const ChannelContext: React.Context<ChannelContextValue<DefaultAttachmentType, DefaultChannelType, string & {}, Record<string, unknown>, Record<string, unknown>, Record<string, unknown>, DefaultUserType>>;
export declare const ChannelProvider: <At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>({ children, value, }: React.PropsWithChildren<{
    value: ChannelContextValue<At, Ch, Co, Ev, Me, Re, Us>;
}>) => JSX.Element;
export declare const useChannelContext: <At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>() => ChannelContextValue<At, Ch, Co, Ev, Me, Re, Us>;
/**
 * Typescript currently does not support partial inference so if ChatContext
 * typing is desired while using the HOC withChannelContext the Props for the
 * wrapped component must be provided as the first generic.
 */
export declare const withChannelContext: <P extends Record<string, unknown>, At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>(Component: React.ComponentType<P>) => React.FC<Pick<P, Exclude<keyof P, "disabled" | "loading" | "channel" | "error" | "members" | "read" | "typing" | "watchers" | "EmptyStateIndicator" | "eventHistory" | "LoadingIndicator" | "markRead" | "setLastRead" | "lastRead" | "watcherCount">>>;
