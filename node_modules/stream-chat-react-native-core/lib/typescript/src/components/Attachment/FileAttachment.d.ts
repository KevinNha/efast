import React from 'react';
import { AttachmentActionsProps } from './AttachmentActions';
import type { Attachment } from 'stream-chat';
import type { ActionHandler } from './Attachment';
import type { FileIconProps } from './FileIcon';
import type { Alignment, GroupType } from '../../contexts/messagesContext/MessagesContext';
import type { DefaultAttachmentType, UnknownType } from '../../types/types';
export declare type FileAttachmentProps<At extends UnknownType = DefaultAttachmentType> = {
    /** The attachment to render */
    attachment: Attachment<At>;
    /** Handler for actions. Actions in combination with attachments can be used to build [commands](https://getstream.io/chat/docs/#channel_commands). */
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
     * Position of message in group - top, bottom, middle, single.
     *
     * Message group is a group of consecutive messages from same user. groupStyles can be used to style message as per their position in message group
     * e.g., user avatar (to which message belongs to) is only showed for last (bottom) message in group.
     */
    groupStyle?: GroupType;
};
export declare const FileAttachment: <At extends DefaultAttachmentType = DefaultAttachmentType>(props: FileAttachmentProps<At>) => JSX.Element;
