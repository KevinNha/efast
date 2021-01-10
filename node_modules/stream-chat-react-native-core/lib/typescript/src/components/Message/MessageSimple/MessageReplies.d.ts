/// <reference types="react" />
import type { Message } from '../../../components/MessageList/utils/insertDates';
import type { Alignment } from '../../../contexts/messagesContext/MessagesContext';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../../types/types';
export declare type MessageRepliesProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = {
    /**
     * Position of the message, either 'right' or 'left'
     */
    alignment: Alignment;
    /**
     * Whether or not the current message is part of a thread
     */
    isThreadList: boolean;
    /**
     * Current [message object](https://getstream.io/chat/docs/#message_format)
     */
    message: Message<At, Ch, Co, Ev, Me, Re, Us>;
    /**
     * Handler to open a thread on a message
     */
    openThread: () => void;
};
export declare const MessageReplies: <At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>(props: MessageRepliesProps<At, Ch, Co, Ev, Me, Re, Us>) => JSX.Element | null;
