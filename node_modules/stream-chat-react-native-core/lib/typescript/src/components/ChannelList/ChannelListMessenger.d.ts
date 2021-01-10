/// <reference types="react" />
import { FlatList } from 'react-native';
import type { Channel } from 'stream-chat';
import type { ChannelListProps } from './ChannelList';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
export declare type ChannelListMessengerProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = ChannelListProps<At, Ch, Co, Ev, Me, Re, Us> & {
    /**
     * Channels can be either an array of channels or a promise which resolves to an array of channels
     */
    channels: Channel<At, Ch, Co, Ev, Me, Re, Us>[];
    /**
     * Error in channels query, if any
     * */
    error?: boolean;
    /**
     * Incremental number change to force update the FlatList
     */
    forceUpdate?: number;
    /**
     * Whether or not the FlatList has another page to render
     */
    hasNextPage?: boolean;
    /**
     * Initial channels query loading state, triggers the LoadingIndicator
     */
    loadingChannels?: boolean;
    /**
     * Whether or not additional channels are being loaded, triggers the FooterLoadingIndicator
     * */
    loadingNextPage?: boolean;
    /**
     * Loads the next page of `channels`, which is present as a required prop
     * */
    loadNextPage?: () => Promise<void>;
    /**
     * Triggered when the channel list is refreshing, displays a loading spinner at the top of the list
     * */
    refreshing?: boolean;
    /**
     * Function to refresh the channel list that is similar to `reloadList`, but it doesn't wipe out existing channels
     * from UI before loading the new ones
     */
    refreshList?: () => void | Promise<void>;
    /**
     * Removes all the existing channels from UI and loads fresh channels
     * */
    reloadList?: () => Promise<void>;
    /**
     * Function to set the currently active channel, acts as a bridge between ChannelList and Channel components
     *
     * @param channel A channel object
     * */
    setActiveChannel?: (channel: Channel<At, Ch, Co, Ev, Me, Re, Us>) => void;
    /**
     * Function to gain access to the inner FlatList ref
     *
     * **Example:**
     *
     * ```
     * <ChannelListMessenger
     *  setFlatListRef={(ref) => {
     *    // Use ref for your own good
     *  }}
     * ```
     */
    setFlatListRef?: (ref: FlatList<Channel<At, Ch, Co, Ev, Me, Re, Us>> | null) => void;
};
/**
 * This UI component displays the preview list of channels and handles Channel navigation. It
 * receives all props from the ChannelList component.
 *
 * @example ./ChannelListMessenger.md
 */
export declare const ChannelListMessenger: <At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>(props: ChannelListMessengerProps<At, Ch, Co, Ev, Me, Re, Us>) => JSX.Element;
