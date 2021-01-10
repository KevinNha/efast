/// <reference types="react" />
import type { Attachment } from 'stream-chat';
import type { ActionHandler } from './Attachment';
import type { DefaultAttachmentType, UnknownType } from '../../types/types';
export declare type AttachmentActionsProps<At extends UnknownType = DefaultAttachmentType> = Attachment<At> & {
    /** The handler to execute after selecting an action */
    actionHandler?: ActionHandler;
};
/**
 * AttachmentActions - The actions you can take on an attachment.
 * Actions in combination with attachments can be used to build [commands](https://getstream.io/chat/docs/#channel_commands).
 *
 * @example ./AttachmentActions.md
 */
export declare const AttachmentActions: <At extends Record<string, unknown> = DefaultAttachmentType>(props: AttachmentActionsProps<At>) => JSX.Element;
