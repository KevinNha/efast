/// <reference types="react" />
import type { ChannelState, MessageResponse } from 'stream-chat';
import type { ChannelPreviewProps } from './ChannelPreview';
import type { LatestMessagePreview } from './hooks/useLatestMessagePreview';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
export declare type ChannelPreviewMessengerProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = ChannelPreviewProps<At, Ch, Co, Ev, Me, Re, Us> & {
    /** Latest message on a channel, formatted for preview */
    latestMessagePreview: LatestMessagePreview<At, Ch, Co, Ev, Me, Re, Us>;
    /**
     * Formatter function for date of latest message.
     * @param date Message date
     * @returns Formatted date string
     *
     * By default today's date is shown in 'HH:mm A' format and other dates
     * are displayed in 'DD/MM/YY' format. props.latestMessage.created_at is the
     * default formatted date. This default logic is part of ChannelPreview component.
     */
    formatLatestMessageDate?: (date: Date) => string;
    /** Most recent message on the channel */
    lastMessage?: ReturnType<ChannelState<At, Ch, Co, Ev, Me, Re, Us>['messageToImmutable']> | MessageResponse<At, Ch, Co, Me, Re, Us>;
    /** Length at which latest message should be truncated */
    latestMessageLength?: number;
    /** Number of unread messages on the channel */
    unread?: number;
};
/**
 * This UI component displays an individual preview item for each channel in a list. It also receives all props
 * from the ChannelPreview component.
 *
 * @example ./ChannelPreviewMessenger.md
 */
export declare const ChannelPreviewMessenger: <At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>(props: ChannelPreviewMessengerProps<At, Ch, Co, Ev, Me, Re, Us>) => JSX.Element;
