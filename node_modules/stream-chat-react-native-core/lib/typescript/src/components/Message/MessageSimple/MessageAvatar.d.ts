/// <reference types="react" />
import type { ForwardedMessageProps } from './MessageContent';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../../types/types';
export declare type MessageAvatarProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends DefaultUserType = DefaultUserType> = ForwardedMessageProps<At, Ch, Co, Ev, Me, Re, Us> & {
    showAvatar?: boolean;
};
export declare const MessageAvatar: <At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends DefaultUserType = DefaultUserType>(props: MessageAvatarProps<At, Ch, Co, Ev, Me, Re, Us>) => JSX.Element;
