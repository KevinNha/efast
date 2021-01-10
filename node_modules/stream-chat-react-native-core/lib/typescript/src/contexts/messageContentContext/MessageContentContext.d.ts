import React, { PropsWithChildren } from 'react';
import type { GestureResponderEvent, TouchableOpacityProps } from 'react-native';
export declare type MessageContentContextValue = {
    onLongPress: (event: GestureResponderEvent) => void;
    additionalTouchableProps?: Omit<TouchableOpacityProps, 'style'>;
    disabled?: boolean;
};
export declare const MessageContentContext: React.Context<MessageContentContextValue>;
export declare const MessageContentProvider: ({ children, value, }: React.PropsWithChildren<{
    value: MessageContentContextValue;
}>) => JSX.Element;
export declare const useMessageContentContext: () => MessageContentContextValue;
/**
 * Typescript currently does not support partial inference so if MessageContentContext
 * typing is desired while using the HOC withMessageContentContextContext the Props for the
 * wrapped component must be provided as the first generic.
 */
export declare const withMessageContentContext: <P extends Record<string, unknown>>(Component: React.ComponentType<P>) => React.FC<Pick<P, Exclude<keyof P, "disabled" | "onLongPress" | "additionalTouchableProps">>>;
