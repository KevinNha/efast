/// <reference types="react" />
import type { Attachment } from 'stream-chat';
import type { Alignment } from '../../contexts/messagesContext/MessagesContext';
import type { DefaultAttachmentType, UnknownType } from '../../types/types';
export declare type GalleryProps<At extends UnknownType = DefaultAttachmentType> = {
    /**
     * Position of the message, either 'right' or 'left'
     */
    alignment: Alignment;
    /**
     * The image attachments to render
     */
    images: Attachment<At>[];
};
/**
 * UI component for card in attachments.
 *
 * @example ./Gallery.md
 */
export declare const Gallery: <At extends Record<string, unknown> = DefaultAttachmentType>(props: GalleryProps<At>) => JSX.Element | null;
