/// <reference types="react" />
import type { Channel, UserResponse } from 'stream-chat';
import type { DebouncedFunc } from 'lodash';
import type { CommandsItemProps } from '../components/AutoCompleteInput/CommandsItem';
import type { MentionsItemProps } from '../components/AutoCompleteInput/MentionsItem';
import type { SuggestionCommand, SuggestionUser } from '../contexts/suggestionsContext/SuggestionsContext';
import type { TranslationContextValue } from '../contexts/translationContext/TranslationContext';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../types/types';
export declare const emojiData: {
    icon: string;
    id: string;
}[];
export declare const FileState: Readonly<{
    FINISHED: string;
    NO_FILE: string;
    UPLOAD_FAILED: string;
    UPLOADED: string;
    UPLOADING: string;
}>;
export declare const ProgressIndicatorTypes: {
    IN_PROGRESS: 'in_progress';
    RETRY: 'retry';
};
export declare const queryMembersDebounced: DebouncedFunc<(<At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>(channel: Channel<At, Ch, Co, Ev, Me, Re, Us>, query: UserResponse<Us>["name"], onReady?: ((users: UserResponse<Us>[]) => void) | undefined) => Promise<void>)>;
export declare const isMentionTrigger: (trigger: Trigger) => trigger is "@";
export declare type Trigger = '/' | '@';
export declare type TriggerSettings<Co extends string = DefaultCommandType, Us extends UnknownType = DefaultUserType> = {
    '/': {
        component: string | React.ComponentType<Partial<CommandsItemProps<Co>>>;
        dataProvider: (query: SuggestionCommand<Co>['name'], text: string, onReady?: (data: SuggestionCommand<Co>[], q: SuggestionCommand<Co>['name']) => void) => SuggestionCommand<Co>[];
        output: (entity: SuggestionCommand<Co>) => {
            caretPosition: string;
            key: string;
            text: string;
        };
        title: string;
    };
    '@': {
        callback: (item: SuggestionUser<Us>) => void;
        component: string | React.ComponentType<Partial<MentionsItemProps<Us>>>;
        dataProvider: (query: SuggestionUser<Us>['name'], _: string, onReady?: (data: SuggestionUser<Us>[], q: SuggestionUser<Us>['name']) => void) => SuggestionUser<Us>[] | Promise<void> | void;
        output: (entity: SuggestionUser<Us>) => {
            caretPosition: string;
            key: string;
            text: string;
        };
        title: string;
    };
};
export declare type ACITriggerSettingsParams<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = {
    channel: Channel<At, Ch, Co, Ev, Me, Re, Us>;
    onMentionSelectItem: (item: SuggestionUser<Us>) => void;
    autocompleteSuggestionsLimit?: number;
} & Pick<TranslationContextValue, 't'>;
/**
 * ACI = AutoCompleteInput
 *
 * DataProvider accepts `onReady` function, which will execute once the data is ready.
 * Another approach would have been to simply return the data from dataProvider and let the
 * component await for it and then execute the required logic. We are going for callback instead
 * of async-await since we have debounce function in dataProvider. Which will delay the execution
 * of api call on trailing end of debounce (lets call it a1) but will return with result of
 * previous call without waiting for a1. So in this case, we want to execute onReady, when trailing
 * end of debounce executes.
 */
export declare const ACITriggerSettings: <At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>({ channel, onMentionSelectItem, t, autocompleteSuggestionsLimit, }: ACITriggerSettingsParams<At, Ch, Co, Ev, Me, Re, Us>) => TriggerSettings<Co, Us>;
export declare const MESSAGE_ACTIONS: {
    delete: string;
    edit: string;
    reactions: string;
    reply: string;
};
export declare const makeImageCompatibleUrl: (url: string) => string;
