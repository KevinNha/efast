/// <reference types="react" />
import type { Channel, ChannelFilters, ChannelOptions, ChannelSort } from 'stream-chat';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultUserType, UnknownType } from '../../../types/types';
declare type Parameters<Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Us extends UnknownType = DefaultUserType> = {
    filters: ChannelFilters<Ch, Co, Us>;
    options: ChannelOptions;
    sort: ChannelSort<Ch>;
};
export declare const usePaginatedChannels: <At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>({ filters, options, sort, }: Parameters<Ch, Co, Us>) => {
    channels: Channel<At, Ch, Co, Ev, Me, Re, Us>[];
    hasNextPage: boolean;
    loadNextPage: ((queryType?: string, retryCount?: number) => Promise<void>) | undefined;
    refreshList: () => Promise<void> | undefined;
    reloadList: () => Promise<void>;
    setChannels: import("react").Dispatch<import("react").SetStateAction<Channel<At, Ch, Co, Ev, Me, Re, Us>[]>>;
    status: {
        error: boolean;
        loadingChannels: boolean;
        loadingNextPage: boolean;
        refreshing: boolean;
    };
};
export {};
