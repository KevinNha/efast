/// <reference types="react" />
import type { GestureResponderEvent } from 'react-native';
import type { DefaultAttachmentType, DefaultChannelType, DefaultUserType } from '../../types/types';
export declare type SendButtonProps = {
    /** Disables the button */
    disabled?: boolean;
    /** Function that sends message */
    sendMessage?: (event: GestureResponderEvent) => void;
};
/**
 * UI Component for send button in MessageInput component.
 *
 * @example ./SendButton.md
 */
export declare const SendButton: <At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>(props: SendButtonProps) => JSX.Element;
