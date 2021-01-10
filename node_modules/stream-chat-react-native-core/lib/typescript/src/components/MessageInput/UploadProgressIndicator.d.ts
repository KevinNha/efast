import React from 'react';
import { GestureResponderEvent } from 'react-native';
export declare type UploadProgressIndicatorProps = {
    /** Action triggered when clicked indicator */
    action?: (event: GestureResponderEvent) => void;
    /** Boolean status of upload progress */
    active?: boolean;
    /** Type of active indicator */
    type?: 'in_progress' | 'retry';
};
export declare const UploadProgressIndicator: React.FC<UploadProgressIndicatorProps>;
