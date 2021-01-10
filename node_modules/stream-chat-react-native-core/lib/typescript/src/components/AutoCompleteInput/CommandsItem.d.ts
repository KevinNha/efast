/// <reference types="react" />
import type { SuggestionCommand } from '../../contexts/suggestionsContext/SuggestionsContext';
import type { DefaultCommandType } from '../../types/types';
export declare type CommandsItemProps<Co extends string = DefaultCommandType> = {
    /**
     * A CommandResponse of suggested CommandTypes with these properties
     *
     * - args: Arguments which can be passed to the command
     * - description: Description of the command
     * - name: Name of the command
     */
    item: SuggestionCommand<Co>;
};
/**
 * @example ./CommandsItem.md
 */
export declare const CommandsItem: <Co extends string = string & {}>({ item: { args, description, name }, }: CommandsItemProps<Co>) => JSX.Element;
