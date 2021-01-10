/// <reference types="react" />
import type { Alignment, MessageWithDates } from '../../contexts/messagesContext/MessagesContext';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
export declare type LatestReactions<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = MessageWithDates<At, Ch, Co, Me, Re, Us>['latest_reactions'];
export declare type Reaction = {
    icon: string;
    id: string;
};
export declare type ReactionListProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = {
    alignment: Alignment;
    getTotalReactionCount: (arg: {
        icon: string;
        id: string;
    }[]) => number;
    latestReactions: LatestReactions<At, Ch, Co, Me, Re, Us>;
    /**
     * e.g.,
     * [
     *  {
     *    id: 'like',
     *    icon: '👍',
     *  },
     *  {
     *    id: 'love',
     *    icon: '❤️️',
     *  },
     *  {
     *    id: 'haha',
     *    icon: '😂',
     *  },
     *  {
     *    id: 'wow',
     *    icon: '😮',
     *  },
     * ]
     */
    supportedReactions: Reaction[];
    visible: boolean;
};
/**
 * @example ./ReactionList.md
 */
export declare const ReactionList: <At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>(props: ReactionListProps<At, Ch, Co, Me, Re, Us>) => JSX.Element | null;
