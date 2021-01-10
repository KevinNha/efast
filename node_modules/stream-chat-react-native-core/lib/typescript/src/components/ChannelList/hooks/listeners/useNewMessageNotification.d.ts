/// <reference types="react" />
import type { Channel, Event } from 'stream-chat';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../../../types/types';
declare type Parameters<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = {
    setChannels: React.Dispatch<React.SetStateAction<Channel<At, Ch, Co, Ev, Me, Re, Us>[]>>;
    onMessageNew?: (setChannels: React.Dispatch<React.SetStateAction<Channel<At, Ch, Co, Ev, Me, Re, Us>[]>>, event: Event<At, Ch, Co, Ev, Me, Re, Us>) => void;
};
export declare const useNewMessageNotification: <At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>({ onMessageNew, setChannels, }: Parameters<At, Ch, Co, Ev, Me, Re, Us>) => void;
export {};
