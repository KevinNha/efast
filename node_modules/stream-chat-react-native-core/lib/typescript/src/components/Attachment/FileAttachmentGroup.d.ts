import React from 'react';
import { ActionHandler } from './Attachment';
import type { Attachment as AttachmentType } from 'stream-chat';
import type { AttachmentActionsProps } from './AttachmentActions';
import type { FileAttachmentProps } from './FileAttachment';
import type { FileIconProps } from './FileIcon';
import type { Alignment } from '../../contexts/messagesContext/MessagesContext';
import type { DefaultAttachmentType, UnknownType } from '../../types/types';
export declare type FileAttachmentGroupProps<At extends UnknownType = DefaultAttachmentType> = {
    /**
     * Position of the message, either 'right' or 'left'
     */
    alignment: Alignment;
    /**
     * The files attached to a message
     */
    files: AttachmentType<At>[];
    /**
     * Handler for actions. Actions in combination with attachments can be used to build [commands](https://getstream.io/chat/docs/#channel_commands).
     */
    handleAction: ActionHandler;
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
     * Custom UI component to display File type attachment.
     * Defaults to https://github.com/GetStream/stream-chat-react-native/blob/master/src/components/Attachment/FileAttachment.tsx
     */
    FileAttachment?: React.ComponentType<FileAttachmentProps<At>>;
    /**
     * The unique id for the message with file attachments
     */
    messageId?: string;
};
export declare const FileAttachmentGroup: <At extends Record<string, unknown> = DefaultAttachmentType>(props: FileAttachmentGroupProps<At>) => JSX.Element;
