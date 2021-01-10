import type { Channel, StreamChat } from 'stream-chat';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
declare type MoveParameters<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = {
    channels: Channel<At, Ch, Co, Ev, Me, Re, Us>[];
    cid: string;
};
export declare const moveChannelUp: <At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>({ cid, channels, }: MoveParameters<At, Ch, Co, Ev, Me, Re, Us>) => Channel<At, Ch, Co, Ev, Me, Re, Us>[];
declare type GetParameters<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = {
    client: StreamChat<At, Ch, Co, Ev, Me, Re, Us>;
    id: string;
    type: string;
};
export declare const getChannel: <At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>({ client, id, type, }: GetParameters<At, Ch, Co, Ev, Me, Re, Us>) => Promise<Channel<At, Ch, Co, Ev, Me, Re, Us>>;
export declare const DEFAULT_QUERY_CHANNELS_LIMIT = 10;
export declare const MAX_QUERY_CHANNELS_LIMIT = 30;
export {};
