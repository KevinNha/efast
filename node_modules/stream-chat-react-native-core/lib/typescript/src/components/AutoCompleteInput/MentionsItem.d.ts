/// <reference types="react" />
import type { SuggestionUser } from '../../contexts/suggestionsContext/SuggestionsContext';
import type { DefaultUserType } from '../../types/types';
export declare type MentionsItemProps<Us extends DefaultUserType = DefaultUserType> = {
    /**
     * A UserResponse of suggested UserTypes with these properties
     *
     * - id: User ID of the suggested mention user
     * - image: Image to be shown as the Avatar for the user
     * - name: Name of the suggested mention user
     */
    item: SuggestionUser<Us>;
};
/**
 * @example ./MentionsItem.md
 */
export declare const MentionsItem: <Us extends DefaultUserType = DefaultUserType>({ item: { id, image, name }, }: MentionsItemProps<Us>) => JSX.Element;
