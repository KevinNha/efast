import type { StreamChat } from 'stream-chat';
import type { DefaultAttachmentType, DefaultChannelType, DefaultUserType } from '../../../types/types';
export declare const useIsOnline: <At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>(client: StreamChat<At, Ch, Co, Ev, Me, Re, Us>) => {
    connectionRecovering: boolean;
    isOnline: boolean;
};
