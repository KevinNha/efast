import React from 'react';
import type { FileUpload } from './hooks/useMessageDetailsForState';
import { FileIconProps } from '../Attachment/FileIcon';
export declare type FileUploadPreviewProps = {
    /**
     * An array of file objects which are set for upload. It has the following structure:
     *
     * ```json
     *  [
     *    {
     *      "file": // File object,
     *      "id": "randomly_generated_temp_id_1",
     *      "state": "uploading" // or "finished",
     *      "url": "https://url1.com",
     *    },
     *    {
     *      "file": // File object,
     *      "id": "randomly_generated_temp_id_2",
     *      "state": "uploading" // or "finished",
     *      "url": "https://url1.com",
     *    },
     *  ]
     * ```
     *
     */
    fileUploads: FileUpload[];
    /**
     * Function for removing a file from the upload preview
     *
     * @param id string ID of file in `fileUploads` object in state of MessageInput
     */
    removeFile: (id: string) => void;
    /**
     * Function for attempting to upload a file
     *
     * @param id string ID of file in `fileUploads` object in state of MessageInput
     */
    retryUpload: ({ newFile }: {
        newFile: FileUpload;
    }) => Promise<void>;
    /**
     * Custom UI component for attachment icon for type 'file' attachment.
     * Defaults to and accepts same props as: https://github.com/GetStream/stream-chat-react-native/blob/master/src/components/Attachment/FileIcon.tsx
     */
    AttachmentFileIcon?: React.ComponentType<FileIconProps>;
};
/**
 * FileUploadPreview
 * UI Component to preview the files set for upload
 *
 * @example ./FileUploadPreview.md
 */
export declare const FileUploadPreview: React.FC<FileUploadPreviewProps>;
