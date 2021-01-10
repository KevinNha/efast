/// <reference types="react" />
import type { Channel } from 'stream-chat';
import type { ChannelListMessengerProps } from '../ChannelList/ChannelListMessenger';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
export declare type ChannelPreviewProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = ChannelListMessengerProps<At, Ch, Co, Ev, Me, Re, Us> & {
    /**
     * The previewed channel
     */
    channel: Channel<At, Ch, Co, Ev, Me, Re, Us>;
};
export declare const ChannelPreview: <At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>(props: ChannelPreviewProps<At, Ch, Co, Ev, Me, Re, Us>) => JSX.Element;
