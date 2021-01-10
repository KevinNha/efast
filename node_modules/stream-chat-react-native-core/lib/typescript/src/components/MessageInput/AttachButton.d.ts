import React from 'react';
import type { GestureResponderEvent } from 'react-native';
export declare type AttachButtonProps = {
    /** Disables the button */
    disabled?: boolean;
    /** Function that opens an attachment action sheet */
    handleOnPress?: (event: GestureResponderEvent) => void;
};
/**
 * UI Component for attach button in MessageInput component.
 *
 * @example ./AttachButton.md
 */
export declare const AttachButton: React.FC<AttachButtonProps>;
