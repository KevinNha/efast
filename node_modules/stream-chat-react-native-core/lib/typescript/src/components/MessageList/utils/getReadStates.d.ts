/// <reference types="seamless-immutable" />
import { InsertDatesResponse } from '../utils/insertDates';
import type { UserResponse } from 'stream-chat';
import type { DefaultAttachmentType, DefaultChannelType, DefaultUserType } from '../../../types/types';
export declare const getReadStates: <At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>(messages: InsertDatesResponse<At, Ch, Co, Ev, Me, Re, Us>, read?: import("seamless-immutable").ImmutableObject<{
    [key: string]: import("seamless-immutable").ImmutableObject<{
        last_read: Date;
        user: UserResponse<Us>;
    }>;
}> | undefined) => {
    [key: string]: UserResponse<Us>[];
};
