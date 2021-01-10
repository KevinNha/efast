import React from 'react';
export declare type KeyboardContextValue = {
    dismissKeyboard: () => void;
};
export declare const KeyboardContext: React.Context<KeyboardContextValue>;
export declare const KeyboardProvider: React.FC<{
    value: KeyboardContextValue;
}>;
export declare const useKeyboardContext: () => KeyboardContextValue;
export declare const withKeyboardContext: <P extends Record<string, unknown>>(Component: React.ComponentType<P>) => React.FC<Pick<P, Exclude<keyof P, "dismissKeyboard">>>;
