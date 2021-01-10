import React from 'react';
import { ActionSheetCustom } from 'react-native-actionsheet';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';
export declare type ActionSheetStyles = {
    body?: StyleProp<ViewStyle>;
    buttonBox?: StyleProp<ViewStyle>;
    buttonText?: StyleProp<TextStyle>;
    cancelButtonBox?: StyleProp<ViewStyle>;
    messageBox?: StyleProp<ViewStyle>;
    messageText?: StyleProp<TextStyle>;
    overlay?: StyleProp<TextStyle>;
    titleBox?: StyleProp<ViewStyle>;
    titleText?: StyleProp<TextStyle>;
    wrapper?: StyleProp<ViewStyle>;
};
export declare type ActionSheetProps = {
    closeAttachActionSheet: () => void;
    pickFile: () => Promise<void>;
    pickImage: () => Promise<void>;
    setAttachActionSheetRef: (ref: ActionSheetCustom | null) => void;
    styles?: ActionSheetStyles;
};
export declare const ActionSheetAttachment: React.FC<ActionSheetProps>;
