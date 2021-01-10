import type { Immutable } from 'seamless-immutable';
import type { Channel, ChannelState, MessageResponse } from 'stream-chat';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../../types/types';
export declare type LatestMessagePreview<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = {
    created_at: string;
    messageObject: undefined;
    text: string;
} | {
    created_at: string | number | Date;
    messageObject: Immutable<ReturnType<ChannelState<At, Ch, Co, Ev, Me, Re, Us>['messageToImmutable']>>;
    text: string;
};
/**
 * Hook to set the display preview for latest message on channel.
 *
 * @param {*} channel Channel object
 *
 * @returns {object} latest message preview e.g.. { text: 'this was last message ...', created_at: '11/12/2020', messageObject: { originalMessageObject } }
 */
export declare const useLatestMessagePreview: <At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>(channel: Channel<At, Ch, Co, Ev, Me, Re, Us>, lastMessage?: MessageResponse<At, Ch, Co, Me, Re, Us> | Immutable<Me & {
    id: string;
    attachments?: import("stream-chat").Attachment<At>[] | undefined;
    html?: string | undefined;
    mml?: string | undefined;
    parent_id?: string | undefined;
    show_in_channel?: boolean | undefined;
    text?: string | undefined;
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
    mentioned_users?: import("stream-chat").UserResponse<Us>[] | undefined;
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
}, {}> | undefined) => {
    created_at: string;
    messageObject: undefined;
    text: string;
} | {
    created_at: import("../../../contexts/translationContext/TranslationContext").TDateTimeParserInput;
    messageObject: Immutable<Immutable<Me & {
        id: string;
        attachments?: import("stream-chat").Attachment<At>[] | undefined;
        html?: string | undefined;
        mml?: string | undefined;
        parent_id?: string | undefined;
        show_in_channel?: boolean | undefined;
        text?: string | undefined;
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
        mentioned_users?: import("stream-chat").UserResponse<Us>[] | undefined;
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
    }, {}>, {}>;
    text: string;
};
