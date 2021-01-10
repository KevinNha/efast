/// <reference types="react" />
import type { LatestReactions, Reaction } from './ReactionList';
import type { MessageWithDates } from '../../contexts/messagesContext/MessagesContext';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
export declare type ReactionPickerProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = {
    handleDismiss: () => void;
    handleReaction: (arg: string) => void;
    hideReactionCount: boolean;
    hideReactionOwners: boolean;
    latestReactions?: LatestReactions<At, Ch, Co, Me, Re, Us>;
    reactionCounts?: MessageWithDates<At, Ch, Co, Me, Re, Us>['reaction_counts'] | null;
    reactionPickerVisible?: boolean;
    rpLeft?: number;
    rpRight?: number;
    rpTop?: number;
    supportedReactions?: Reaction[];
};
export declare const ReactionPicker: <At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends DefaultUserType = DefaultUserType>(props: ReactionPickerProps<At, Ch, Co, Me, Re, Us>) => JSX.Element | null;
