import React from 'react';
import { GestureResponderEvent } from 'react-native';
export declare type MessageNotificationProps = {
    /** onPress handler */
    onPress: (event: GestureResponderEvent) => void;
    /** If we should show the notification or not */
    showNotification?: boolean;
};
/**
 * @example ./MessageNotification.md
 */
export declare const MessageNotification: React.FC<MessageNotificationProps>;
