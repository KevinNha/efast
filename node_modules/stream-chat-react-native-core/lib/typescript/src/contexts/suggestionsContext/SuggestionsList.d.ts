/// <reference types="react" />
import { GestureResponderEvent } from 'react-native';
import { SuggestionComponentType, Suggestions } from './SuggestionsContext';
import type { DefaultCommandType, DefaultUserType, UnknownType } from '../../types/types';
export declare type SuggestionsListProps<Co extends string = DefaultCommandType, Us extends UnknownType = DefaultUserType> = {
    active: boolean;
    backdropHeight: number | string;
    componentType: SuggestionComponentType<Co, Us>;
    handleDismiss: (event?: GestureResponderEvent) => void;
    marginLeft: number;
    suggestions: Suggestions<Co, Us>;
    suggestionsTitle: string;
    width: number | string;
};
export declare const SuggestionsList: <Co extends string = string & {}, Us extends Record<string, unknown> = DefaultUserType>(props: SuggestionsListProps<Co, Us>) => JSX.Element | null;
