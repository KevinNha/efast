import React, { PropsWithChildren } from 'react';
import { View } from 'react-native';
import type { CommandResponse, UserResponse } from 'stream-chat';
import type { DefaultCommandType, DefaultUserType, UnknownType } from '../../types/types';
export declare type SuggestionComponentType<Co extends string = DefaultCommandType, Us extends UnknownType = DefaultUserType> = string | React.ReactElement<{
    item: Suggestion<Co, Us>;
}>;
export declare const isSuggestionUser: <Co extends string = string & {}, Us extends Record<string, unknown> = DefaultUserType>(suggestion: Suggestion<Co, Us>) => suggestion is UserResponse<Us>;
export declare type Suggestion<Co extends string = DefaultCommandType, Us extends UnknownType = DefaultUserType> = SuggestionCommand<Co> | SuggestionUser<Us>;
export declare type SuggestionCommand<Co extends string = DefaultCommandType> = CommandResponse<Co>;
export declare type SuggestionUser<Us extends UnknownType = DefaultUserType> = UserResponse<Us>;
export declare type Suggestions<Co extends string = DefaultCommandType, Us extends UnknownType = DefaultUserType> = {
    data: Suggestion<Co, Us>[];
    onSelect: (item: Suggestion<Co, Us>) => void;
};
export declare type SuggestionsContextValue<Co extends string = DefaultCommandType, Us extends UnknownType = DefaultUserType> = {
    closeSuggestions: () => void;
    openSuggestions: (title: string, component: SuggestionComponentType<Co, Us>) => Promise<void>;
    setInputBoxContainerRef: (ref: View | null) => void;
    updateSuggestions: (newSuggestions: Suggestions<Co, Us>) => void;
};
export declare const SuggestionsContext: React.Context<SuggestionsContextValue<string & {}, DefaultUserType>>;
/**
 * This provider component exposes the properties stored within the SuggestionsContext.
 */
export declare const SuggestionsProvider: <Co extends string = string & {}, Us extends Record<string, unknown> = DefaultUserType>({ children, value, }: React.PropsWithChildren<{
    value?: Partial<SuggestionsContextValue<Co, Us>> | undefined;
}>) => JSX.Element;
export declare const useSuggestionsContext: <Co extends string = string & {}, Us extends Record<string, unknown> = DefaultUserType>() => SuggestionsContextValue<Co, Us>;
export declare const withSuggestionsContext: <P extends Record<string, unknown>, Co extends string = string & {}, Us extends Record<string, unknown> = DefaultUserType>(Component: React.ComponentType<P>) => React.FC<Pick<P, Exclude<keyof P, "closeSuggestions" | "openSuggestions" | "setInputBoxContainerRef" | "updateSuggestions">>>;
