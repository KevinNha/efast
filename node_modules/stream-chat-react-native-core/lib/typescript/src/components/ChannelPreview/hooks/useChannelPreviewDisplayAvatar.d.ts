import type { Channel } from 'stream-chat';
import type { DefaultAttachmentType, DefaultChannelType, DefaultUserType } from '../../../types/types';
/**
 * Hook to set the display avatar for channel preview
 * @param {*} channel
 *
 * @returns {object} e.g., { image: 'http://dummyurl.com/test.png', name: 'Uhtred Bebbanburg' }
 */
export declare const useChannelPreviewDisplayAvatar: <At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>(channel: Channel<At, Ch, Co, Ev, Me, Re, Us>) => {
    image: string | undefined;
    name: string | undefined;
} | {
    name: string | undefined;
    image?: undefined;
};
