/// <reference types="seamless-immutable" />
import { InsertDatesResponse } from '../utils/insertDates';
import type { DefaultAttachmentType, DefaultChannelType, DefaultUserType } from '../../../types/types';
export declare const getLastReceivedMessage: <At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>(messages: InsertDatesResponse<At, Ch, Co, Ev, Me, Re, Us>) => import("seamless-immutable").Immutable<Me & {
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
}, {}> | import("../../..").MessageWithDates<At, Ch, Co, Me, Re, Us> | undefined;
