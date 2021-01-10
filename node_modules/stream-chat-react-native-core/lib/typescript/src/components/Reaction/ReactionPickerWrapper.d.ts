import React, { PropsWithChildren } from 'react';
import type { Reaction } from './ReactionList';
import type { ReactionPickerProps } from './ReactionPicker';
import type { Alignment } from '../../contexts/messagesContext/MessagesContext';
import type { Message } from '../../components/MessageList/utils/insertDates';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
export declare type ReactionPickerWrapperProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = {
    alignment: Alignment;
    customMessageContent: boolean;
    dismissReactionPicker: () => void;
    handleReaction: (id: Reaction['id']) => void;
    hideReactionCount: boolean;
    hideReactionOwners: boolean;
    message: Message<At, Ch, Co, Ev, Me, Re, Us>;
    offset: {
        left: number;
        right: number;
        top: number;
    };
    openReactionPicker: () => void;
    reactionPickerVisible: boolean;
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
    /**
     * @deprecated
     * emojiData is deprecated. But going to keep it for now
     * to have backward compatibility. Please use supportedReactions instead.
     * TODO: Remove following prop in 1.x.x
     */
    emojiData?: Reaction[];
    ReactionPicker?: React.ComponentType<ReactionPickerProps<At, Ch, Co, Me, Re, Us>>;
};
export declare const ReactionPickerWrapper: <At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>(props: React.PropsWithChildren<ReactionPickerWrapperProps<At, Ch, Co, Ev, Me, Re, Us>>) => JSX.Element;
