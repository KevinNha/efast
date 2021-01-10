import React from 'react';
import { AttachmentActionsProps } from './AttachmentActions';
import { CardProps } from './Card';
import { FileAttachmentProps } from './FileAttachment';
import { FileIconProps } from './FileIcon';
import { GalleryProps } from './Gallery';
import type { Attachment as AttachmentType } from 'stream-chat';
import type { FileAttachmentGroupProps } from './FileAttachmentGroup';
import type { Alignment, GroupType } from '../../contexts/messagesContext/MessagesContext';
import type { DefaultAttachmentType, UnknownType } from '../../types/types';
export declare type ActionHandler = (name: string, value: string) => void;
export declare type AttachmentProps<At extends UnknownType = DefaultAttachmentType> = {
    /**
     * The attachment to render
     */
    attachment: AttachmentType<At>;
    /**
     * Handler for actions. Actions in combination with attachments can be used to build [commands](https://getstream.io/chat/docs/#channel_commands).
     */
    actionHandler?: ActionHandler;
    /**
     * Position of the message, either 'right' or 'left'
     */
    alignment?: Alignment;
    /**
     * Custom UI component to display attachment actions. e.g., send, shuffle, cancel in case of giphy
     * Defaults to https://github.com/GetStream/stream-chat-react-native/blob/master/src/components/Attachment/AttachmentActions.tsx
     */
    AttachmentActions?: React.ComponentType<AttachmentActionsProps<At>>;
    /**
     * Custom UI component for attachment icon for type 'file' attachment.
     * Defaults to: https://github.com/GetStream/stream-chat-react-native/blob/master/src/components/Attachment/FileIcon.tsx
     */
    AttachmentFileIcon?: React.ComponentType<FileIconProps>;
    /**
     * Custom UI component to display generic media type e.g. giphy, url preview etc
     * Defaults to https://github.com/GetStream/stream-chat-react-native/blob/master/src/components/Attachment/Card.tsx
     */
    Card?: React.ComponentType<CardProps<At>>;
    /**
     * Custom UI component to override default cover (between Header and Footer) of Card component.
     * Accepts the same props as Card component.
     */
    CardCover?: React.ComponentType<CardProps<At>>;
    /**
     * Custom UI component to override default Footer of Card component.
     * Accepts the same props as Card component.
     */
    CardFooter?: React.ComponentType<CardProps<At>>;
    /**
     * Custom UI component to override default header of Card component.
     * Accepts the same props as Card component.
     */
    CardHeader?: React.ComponentType<CardProps<At>>;
    /**
     * Custom UI component to display File type attachment.
     * Defaults to https://github.com/GetStream/stream-chat-react-native/blob/master/src/components/Attachment/FileAttachment.tsx
     */
    FileAttachment?: React.ComponentType<FileAttachmentProps<At>>;
    /**
     * Custom UI component to display group of File type attachments or multiple file attachments (in single message).
     * Defaults to https://github.com/GetStream/stream-chat-react-native/blob/master/src/components/Attachment/FileAttachmentGroup.tsx
     */
    FileAttachmentGroup?: React.ComponentType<FileAttachmentGroupProps<At>>;
    /**
     * Custom UI component to display image attachments.
     * Defaults to https://github.com/GetStream/stream-chat-react-native/blob/master/src/components/Attachment/Gallery.tsx
     */
    Gallery?: React.ComponentType<GalleryProps<At>>;
    /**
     * Custom UI component to display Giphy image.
     * Defaults to https://github.com/GetStream/stream-chat-react-native/blob/master/src/components/Attachment/Card.tsx
     */
    Giphy?: React.ComponentType<CardProps<At>>;
    /**
     * Position of message in group - top, bottom, middle, single.
     *
     * Message group is a group of consecutive messages from same user. groupStyles can be used to style message as per their position in message group
     * e.g., user avatar (to which message belongs to) is only showed for last (bottom) message in group.
     */
    groupStyle?: GroupType;
    /**
     * Custom UI component to display enriched url preview.
     * Defaults to https://github.com/GetStream/stream-chat-react-native/blob/master/src/components/Attachment/Card.tsx
     */
    UrlPreview?: React.ComponentType<CardProps<At>>;
};
/**
 * Attachment - The message attachment
 *
 * @example ./Attachment.md
 */
export declare const Attachment: <At extends Record<string, unknown> = DefaultAttachmentType>(props: AttachmentProps<At>) => JSX.Element | null;
