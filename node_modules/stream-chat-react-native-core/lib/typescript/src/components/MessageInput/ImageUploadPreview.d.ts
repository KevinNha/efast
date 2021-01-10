import React from 'react';
import type { ImageUpload } from './hooks/useMessageDetailsForState';
export declare type ImageUploadPreviewProps = {
    /**
     * An array of image objects which are set for upload. It has the following structure:
     *
     * ```json
     *  [
     *    {
     *      "file": // File object,
     *      "id": "randomly_generated_temp_id_1",
     *      "state": "uploading" // or "finished",
     *    },
     *    {
     *      "file": // File object,
     *      "id": "randomly_generated_temp_id_2",
     *      "state": "uploading" // or "finished",
     *    },
     *  ]
     * ```
     *
     */
    imageUploads: ImageUpload[];
    /**
     * Function for removing an image from the upload preview
     *
     * @param id string ID of image in `imageUploads` object in state of MessageInput
     */
    removeImage: (id: string) => void;
    /**
     * Function for attempting to upload an image
     *
     * @param id string ID of image in `imageUploads` object in state of MessageInput
     */
    retryUpload: ({ newImage }: {
        newImage: ImageUpload;
    }) => Promise<void>;
};
/**
 * UI Component to preview the images set for upload
 *
 * @example ./ImageUploadPreview.md
 */
export declare const ImageUploadPreview: React.FC<ImageUploadPreviewProps>;
