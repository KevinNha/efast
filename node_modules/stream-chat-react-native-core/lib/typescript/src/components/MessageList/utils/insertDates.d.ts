/// <reference types="seamless-immutable" />
import type { ChannelState } from 'stream-chat';
import type { MessagesContextValue, MessageWithDates } from '../../../contexts/messagesContext/MessagesContext';
import type { ThreadContextValue } from '../../../contexts/threadContext/ThreadContext';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../../types/types';
export declare type DateSeparator<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = {
    date: Message<At, Ch, Co, Ev, Me, Re, Us>['created_at'] | string;
    type: 'message.date';
};
export declare type MessageOrDate<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Message<At, Ch, Co, Ev, Me, Re, Us> | DateSeparator<At, Ch, Co, Ev, Me, Re, Us>;
export declare type InsertDatesResponse<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = MessageOrDate<At, Ch, Co, Ev, Me, Re, Us>[];
export declare const isDateSeparator: <At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>(message: MessageOrDate<At, Ch, Co, Ev, Me, Re, Us>) => message is DateSeparator<At, Ch, Co, Ev, Me, Re, Us>;
export declare type Message<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = ReturnType<ChannelState<At, Ch, Co, Ev, Me, Re, Us>['messageToImmutable']> | MessageWithDates<At, Ch, Co, Me, Re, Us>;
export declare const insertDates: <At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>(messages: import("seamless-immutable").ImmutableArray<import("seamless-immutable").Immutable<Me & {
    id: string;
    attachments?: import("stream-chat").Attachment<At>[] | undefined;
    html?: string | undefined;
    mml?: string | undefined;
    parent_id?: string | undefined;
    show_in_channel?: boolean | undefined;
    text?: string | undefined; /**
     * If message read or deleted don't consider for date labels
     */
    user?: import("stream-chat").UserResponse<Us> | null | undefined;
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
    mentioned_users?: import("stream-chat").UserResponse<Us>[] | undefined; /**
     * Before the first message insert a date object
     */
    own_reactions?: import("stream-chat").ReactionResponse<Re, Us>[] | null | undefined;
    reaction_counts?: {
        [key: string]: number;
    } | null | undefined;
    reaction_scores?: {
        [key: string]: number;
    } | null | undefined; /**
     * If the date (day) has changed between two messages
     * insert a date object
     */
    reply_count?: number | undefined;
    shadowed?: boolean | undefined;
    silent?: boolean | undefined;
    type?: string | undefined;
    webhook_failed?: boolean | undefined;
    webhook_id?: string | undefined;
}, {}>>) => InsertDatesResponse<At, Ch, Co, Ev, Me, Re, Us>;
