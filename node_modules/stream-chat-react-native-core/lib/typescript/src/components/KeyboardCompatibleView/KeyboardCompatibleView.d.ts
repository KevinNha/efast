import React from 'react';
import { AppStateStatus, EmitterSubscription, KeyboardAvoidingViewProps, KeyboardEvent, KeyboardEventListener, LayoutChangeEvent, LayoutRectangle, ScreenRect, View } from 'react-native';
/**
 * View that moves out of the way when the keyboard appears by automatically
 * adjusting its height, position, or bottom padding.
 *
 * Following piece of code has been mostly copied from KeyboardAvoidingView component, with few additional tweaks.
 */
export declare class KeyboardCompatibleView extends React.Component<KeyboardAvoidingViewProps, {
    appState: AppStateStatus;
    bottom: number;
    isKeyboardOpen: boolean;
}> {
    static defaultProps: Pick<KeyboardAvoidingViewProps, 'behavior' | 'enabled' | 'keyboardVerticalOffset'>;
    _frame: LayoutRectangle | null;
    _keyboardEvent: KeyboardEvent | null;
    _subscriptions: EmitterSubscription[];
    viewRef: React.RefObject<View>;
    _initialFrameHeight: number;
    constructor(props: KeyboardAvoidingViewProps);
    _relativeKeyboardHeight(keyboardFrame: ScreenRect): number;
    _onKeyboardChange: KeyboardEventListener;
    _onLayout: (event: LayoutChangeEvent) => void;
    _updateBottomIfNecessary: () => void;
    _handleAppStateChange: (nextAppState: AppStateStatus) => void;
    setKeyboardListeners: () => void;
    unsetKeyboardListeners: () => void;
    dismissKeyboard: () => Promise<unknown> | undefined;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
