import React from 'react';
import { GestureResponderEvent, ImageRequireSource } from 'react-native';
export declare type IconSquareProps = {
    icon: ImageRequireSource;
    onPress?: (event: GestureResponderEvent) => void;
};
export declare const IconSquare: React.FC<IconSquareProps>;
