import { InsertDatesResponse } from '../utils/insertDates';
import type { DefaultAttachmentType, DefaultChannelType, DefaultUserType } from '../../../types/types';
export declare type UseMessageListParams = {
    inverted?: boolean;
    noGroupByUser?: boolean;
    threadList?: boolean;
};
export declare const useMessageList: <At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>(params: UseMessageListParams) => InsertDatesResponse<At, Ch, Co, Ev, Me, Re, Us>;
