/// <reference types="seamless-immutable" />
import React, { PropsWithChildren } from 'react';
import type { DebouncedFunc } from 'lodash';
import type { ChannelState, MessageResponse, StreamChat, Message as StreamMessage, UpdatedMessage, UserResponse } from 'stream-chat';
import type { SuggestionCommand } from '../suggestionsContext/SuggestionsContext';
import type { AttachmentProps } from '../../components/Attachment/Attachment';
import type { MessageSimpleProps } from '../../components/Message/MessageSimple/MessageSimple';
import type { Message } from '../../components/MessageList/utils/insertDates';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
export declare type Alignment = 'right' | 'left';
export declare type GroupType = 'bottom' | 'middle' | 'single' | 'top';
export declare type MessageWithDates<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = MessageResponse<At, Ch, Co, Me, Re, Us> & {
    groupStyles: GroupType[];
    readBy: UserResponse<Us>[];
};
export declare const isEditingBoolean: <At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>(editing: boolean | import("seamless-immutable").Immutable<Me & {
    id: string;
    attachments?: import("stream-chat").Attachment<At>[] | undefined;
    html?: string | undefined;
    mml?: string | undefined;
    parent_id?: string | undefined;
    show_in_channel?: boolean | undefined;
    text?: string | undefined;
    user?: UserResponse<Us> | null | undefined;
    user_id?: string | undefined;
} & {
    __html: string | undefined;
    created_at: Date;
    updated_at: Date;
    status: string;
    args?: string | undefined;
    channel?: import("stream-chat").ChannelResponse<Ch, Co, Us> | undefined;
    command?: string | undefined;
    command_info?: {
        name?: string | undefined;
    } | undefined;
    deleted_at?: string | undefined;
    latest_reactions?: import("stream-chat").ReactionResponse<Re, Us>[] | undefined;
    mentioned_users?: UserResponse<Us>[] | undefined;
    own_reactions?: import("stream-chat").ReactionResponse<Re, Us>[] | null | undefined;
    reaction_counts?: {
        [key: string]: number;
    } | null | undefined;
    reaction_scores?: {
        [key: string]: number;
    } | null | undefined;
    reply_count?: number | undefined;
    shadowed?: boolean | undefined;
    silent?: boolean | undefined;
    type?: string | undefined;
    webhook_failed?: boolean | undefined;
    webhook_id?: string | undefined;
}, {}> | MessageWithDates<At, Ch, Co, Me, Re, Us>) => editing is boolean;
export declare type MessagesContextValue<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = {
    clearEditingState: () => void;
    editing: boolean | Message<At, Ch, Co, Ev, Me, Re, Us>;
    editMessage: (updatedMessage: UpdatedMessage<At, Ch, Co, Me, Re, Us>) => ReturnType<StreamChat<At, Ch, Co, Ev, Me, Re, Us>['updateMessage']>;
    emojiData: Array<{
        icon: string;
        id: string;
    }>;
    hasMore: boolean;
    loadingMore: boolean;
    loadMore: DebouncedFunc<() => Promise<void>>;
    messages: ChannelState<At, Ch, Co, Ev, Me, Re, Us>['messages'];
    removeMessage: (message: {
        id: string;
        parent_id?: StreamMessage<At, Me, Us>['parent_id'];
    }) => void;
    retrySendMessage: (message: MessageResponse<At, Ch, Co, Me, Re, Us>) => Promise<void>;
    sendMessage: (message: Partial<StreamMessage<At, Me, Us>>) => Promise<void>;
    setEditingState: (message: Message<At, Ch, Co, Ev, Me, Re, Us>) => void;
    updateMessage: (updatedMessage: MessageResponse<At, Ch, Co, Me, Re, Us>, extraState?: {
        commands?: SuggestionCommand<Co>[];
        messageInput?: string;
        threadMessages?: ChannelState<At, Ch, Co, Ev, Me, Re, Us>['threads'][string];
    }) => void;
    Attachment?: React.ComponentType<AttachmentProps<At>>;
    Message?: React.ComponentType<MessageSimpleProps<At, Ch, Co, Ev, Me, Re, Us>>;
};
export declare const MessagesContext: React.Context<MessagesContextValue<DefaultAttachmentType, DefaultChannelType, string & {}, Record<string, unknown>, Record<string, unknown>, Record<string, unknown>, DefaultUserType>>;
export declare const MessagesProvider: <At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>({ children, value, }: React.PropsWithChildren<{
    value: MessagesContextValue<At, Ch, Co, Ev, Me, Re, Us>;
}>) => JSX.Element;
export declare const useMessagesContext: <At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>() => MessagesContextValue<At, Ch, Co, Ev, Me, Re, Us>;
/**
 * Typescript currently does not support partial inference so if ChatContext
 * typing is desired while using the HOC withChannelContext the Props for the
 * wrapped component must be provided as the first generic.
 */
export declare const withMessagesContext: <P extends Record<string, unknown>, At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>(Component: React.ComponentType<P>) => React.FC<Pick<P, Exclude<keyof P, "messages" | "Message" | "emojiData" | "Attachment" | "retrySendMessage" | "removeMessage" | "setEditingState" | "updateMessage" | "editing" | "clearEditingState" | "editMessage" | "hasMore" | "loadingMore" | "loadMore" | "sendMessage">>>;
