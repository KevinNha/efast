/// <reference types="seamless-immutable" />
/// <reference types="react" />
import { MessagesContextValue } from '../../../contexts/messagesContext/MessagesContext';
import type { DefaultAttachmentType, DefaultChannelType, DefaultUserType } from '../../../types/types';
export declare type FileUpload = {
    file: {
        name: string;
        size?: number | string;
        type?: string;
        uri?: string;
    };
    id: string;
    state: string;
    url?: string;
};
export declare type ImageUpload = {
    file: {
        name?: string;
        uri?: string;
    };
    id: string;
    state: string;
    url?: string;
};
export declare const useMessageDetailsForState: <At extends DefaultAttachmentType = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>(message: boolean | import("seamless-immutable").Immutable<Me & {
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
}, {}> | import("../../../contexts/messagesContext/MessagesContext").MessageWithDates<At, Ch, Co, Me, Re, Us>, initialValue?: string | undefined) => {
    fileUploads: FileUpload[];
    imageUploads: ImageUpload[];
    mentionedUsers: string[];
    numberOfUploads: number;
    setFileUploads: import("react").Dispatch<import("react").SetStateAction<FileUpload[]>>;
    setImageUploads: import("react").Dispatch<import("react").SetStateAction<ImageUpload[]>>;
    setMentionedUsers: import("react").Dispatch<import("react").SetStateAction<string[]>>;
    setNumberOfUploads: import("react").Dispatch<import("react").SetStateAction<number>>;
    setText: import("react").Dispatch<import("react").SetStateAction<string>>;
    text: string;
};
