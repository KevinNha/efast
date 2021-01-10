/// <reference types="react" />
import type { MarkdownStyle } from '../../../../styles/themeConstants';
import type { Message } from '../../../MessageList/utils/insertDates';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../../../types/types';
export declare type RenderTextParams<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = {
    markdownRules: UnknownType;
    markdownStyles: MarkdownStyle;
    message: Message<At, Ch, Co, Ev, Me, Re, Us>;
};
export declare const renderText: <At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>(params: RenderTextParams<At, Ch, Co, Ev, Me, Re, Us>) => JSX.Element | null;
