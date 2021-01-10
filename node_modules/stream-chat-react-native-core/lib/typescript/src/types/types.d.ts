import type { LiteralStringForUnion } from 'stream-chat';
export declare type DefaultAttachmentType = UnknownType & {
    file_size?: number | string;
    mime_type?: string;
};
export declare type DefaultChannelType = UnknownType & {
    image?: string;
};
export declare type DefaultCommandType = LiteralStringForUnion;
export declare type DefaultEventType = UnknownType;
export declare type DefaultMessageType = UnknownType;
export declare type DefaultReactionType = UnknownType;
export declare type DefaultUserType = UnknownType & {
    image?: string;
};
export declare type UnknownType = Record<string, unknown>;
